from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from .models import Session, Message, Ebook
from .serializers import (
    MessageSerializer,
    SessionSerializer,
    CreateMessageInputSerializer,
    EbookSerializer,
)

# Import the real ML function from the ML project.
from run_therapy.therapy_turn import run_therapy_turn  # type: ignore

@api_view(["GET"])
@permission_classes([AllowAny])
def health_check(request):
    """
    Simple health check for monitoring / frontend.
    """
    return Response({"status": "ok"}, status=status.HTTP_200_OK)

@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication])
@permission_classes([IsAuthenticated])
def create_message(request):
    """
    Create or reuse a Session and append user + assistant messages.
    """
    input_serializer = CreateMessageInputSerializer(data=request.data)
    if not input_serializer.is_valid():
        return Response(
            {"errors": input_serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )

    validated = input_serializer.validated_data
    session_id = validated["session_id"]
    issue = validated.get("issue", "")
    user_message = validated["user_message"]

    # Associate session with logged in user
    session, _created = Session.objects.get_or_create(
        session_id=session_id,
        defaults={
            "issue": issue,
            "user": request.user  # Link session to authenticated user
        },
    )
    
    # If session already exists but not linked to user, update it
    if not session.user:
        session.user = request.user
        session.save()

    user_msg = Message.objects.create(
        session=session,
        role="user",
        text=user_message,
        emotion="",
        extra=None,
    )

    # Call real ML turn
    ml_result = run_therapy_turn(issue or session.issue, session_id, user_message)

    assistant_msg = Message.objects.create(
        session=session,
        role="assistant",
        text=ml_result.get("assistant_text", ""),
        emotion=ml_result.get("emotion", ""),
        extra=ml_result.get("extra", {}),
    )

    session_data = SessionSerializer(session).data
    messages_data = MessageSerializer([user_msg, assistant_msg], many=True).data

    return Response(
        {
            "session": session_data,
            "messages": messages_data,
        },
        status=status.HTTP_201_CREATED,
    )

@api_view(["GET"])
@authentication_classes([TokenAuthentication, SessionAuthentication])
@permission_classes([IsAuthenticated])
def get_session_messages(request, session_id: str):
    """
    Get all messages for a given session_id for the authenticated user.
    """
    try:
        # Only return sessions belonging to the authenticated user
        session = Session.objects.get(session_id=session_id, user=request.user)
    except Session.DoesNotExist:
        # Return empty list instead of 404 if session doesn't exist or doesn't belong to user
        return Response(
            {
                "session": None,
                "messages": [],
            },
            status=status.HTTP_200_OK,
        )

    messages = session.messages.order_by("created_at")
    serializer = MessageSerializer(messages, many=True)
    session_data = SessionSerializer(session).data

    return Response(
        {
            "session": session_data,
            "messages": serializer.data,
        },
        status=status.HTTP_200_OK,
    )

@api_view(["GET"])
@permission_classes([AllowAny])
def get_ebooks(request):
    category = request.query_params.get('category')
    featured = request.query_params.get('featured') == 'true'
    limit = int(request.query_params.get('limit', 30))
    
    ebooks = Ebook.objects.all()[:limit]
    if category:
        ebooks = ebooks.filter(category=category)
    if featured:
        ebooks = ebooks.filter(featured=True)
    
    serializer = EbookSerializer(ebooks, many=True)
    return Response(serializer.data)

@api_view(["POST"])
@authentication_classes([TokenAuthentication, SessionAuthentication])
@permission_classes([IsAuthenticated])
def download_ebook(request, slug):
    try:
        ebook = Ebook.objects.get(slug=slug)
        ebook.downloads += 1
        ebook.save()
        
        serializer = EbookSerializer(ebook)
        return Response({
            'ebook': serializer.data,
            'download_url': ebook.file_url
        })
    except Ebook.DoesNotExist:
        return Response({'error': 'Ebook not found'}, status=404)