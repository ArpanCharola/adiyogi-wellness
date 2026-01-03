from rest_framework import serializers
from bson import ObjectId
from .models import Session, Message, Ebook, EbookCategory

class ObjectIdField(serializers.Field):
    def to_representation(self, value):
        if value is None:
            return None
        return str(value)

class BaseMongoSerializer(serializers.ModelSerializer):
    class Meta:
        extra_kwargs = {
            '_id': {'read_only': True},
        }

class SessionSerializer(BaseMongoSerializer):
    id = ObjectIdField(read_only=True)
    
    class Meta(BaseMongoSerializer.Meta):
        model = Session
        fields = ["id", "session_id", "issue", "created_at"]

class MessageSerializer(BaseMongoSerializer):
    id = ObjectIdField(read_only=True)
    session = ObjectIdField(read_only=True)
    
    class Meta(BaseMongoSerializer.Meta):
        model = Message
        fields = ["id", "session", "role", "text", "emotion", "extra", "created_at"]

class CreateMessageInputSerializer(serializers.Serializer):
    session_id = serializers.CharField(max_length=100)
    issue = serializers.CharField(max_length=100, required=False, allow_blank=True)
    user_message = serializers.CharField()

# FIXED: Match EXACT Ebook model fields + handle _id primary key
class EbookSerializer(serializers.ModelSerializer):
    id = ObjectIdField(read_only=True)  # Maps to model's _id
    
    class Meta:
        model = Ebook
        fields = [
            'id',           # _id as string
            'title',
            'slug', 
            'category',     # TextField (string)
            'author',
            'description',
            'cover_image',
            'file_url',
            'tags',
            'downloads',
            'featured',
            'created_at',
            'updated_at'
        ]

class EbookCategorySerializer(BaseMongoSerializer):
    id = ObjectIdField(read_only=True)
    
    class Meta(BaseMongoSerializer.Meta):
        model = EbookCategory
        fields = '__all__'
