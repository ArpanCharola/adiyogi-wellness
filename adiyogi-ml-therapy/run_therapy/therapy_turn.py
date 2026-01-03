# adiyogi-ml-therapy/run_therapy/therapy_turn.py

from typing import Dict, Any

# Remove emotion-model import for now
# from text_emotion import analyze_emotion
from mistral_client import call_mistral_therapy


def run_therapy_turn(issue: str, session_id: str, user_message: str) -> Dict[str, Any]:
    """
    One therapy turn used by the Django backend.

    - Calls Mistral with a therapist-style prompt.
    - Returns a compact dict for the API layer.

    Emotion detection is temporarily disabled to avoid heavy deps.
    """

    top_emotion = "neutral"
    emotion_scores: Dict[str, float] | None = None

    # 2) Prepare a minimal "client name" for the prompt
    client_name = "Friend"

    # 3) Call Mistral for a therapist-style reply
    mistral_reply: str | None = None
    mistral_error: str | None = None

    try:
        mistral_reply = call_mistral_therapy(
            client_name=client_name,
            issue=issue or "emotional distress",
            context_text=user_message,
        )
    except Exception as e:  # noqa: BLE001
        mistral_error = f"Mistral error: {e!s}"

    # 4) Safe fallback if Mistral fails or returns nothing
    if not mistral_reply:
        mistral_reply = (
            "Thank you for opening up about this. It sounds like this has been "
            "really difficult to carry on your own. Even though I cannot see the "
            "full context, your feelings are valid. If you can, share a bit more "
            "about what has been the hardest part lately so we can explore it together."
        )

    return {
        "assistant_text": mistral_reply,
        "emotion": top_emotion,
        "extra": {
            "source": "ml",
            "session_id": session_id,
            "issue": issue,
            "emotion_scores": emotion_scores,
            "mistral_error": mistral_error,
        },
    }
