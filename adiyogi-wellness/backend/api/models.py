from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django_mongodb_backend.fields import ObjectIdAutoField  # type: ignore

class CustomUser(AbstractUser):
    id = ObjectIdAutoField(primary_key=True)
    # Add profile fields directly to User model for simplicity in NoSQL
    bio = models.TextField(blank=True, null=True)
    profile_photo = models.TextField(blank=True, null=True)
    reports = models.JSONField(default=list, blank=True)

    class Meta:
        db_table = "users"

    def __str__(self):
        return self.username

class Session(models.Model):
    """
    Therapy chat session.
    """
    id = ObjectIdAutoField(primary_key=True)
    # Optional: link session to user if logged in
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True, related_name="sessions")
    session_id = models.CharField(max_length=100, unique=True)
    issue = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "sessions"

    def __str__(self) -> str:
        return self.session_id

class Message(models.Model):
    """
    Single message/turn in a therapy session.
    """
    id = ObjectIdAutoField(primary_key=True)
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name="messages")
    role = models.CharField(max_length=20)  # "user" or "assistant"
    text = models.TextField()
    emotion = models.CharField(max_length=50, blank=True)
    extra = models.JSONField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return f"{self.role}: {self.text[:40]}"

class Ebook(models.Model):
    _id = ObjectIdAutoField(primary_key=True)
    title = models.TextField()
    slug = models.TextField(unique=True)
    category = models.TextField()
    author = models.TextField()
    description = models.TextField()
    cover_image = models.TextField()
    file_url = models.TextField()
    tags = models.JSONField(default=list)
    downloads = models.IntegerField(default=0)
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "ebooks"
        ordering = ['-downloads', '-created_at']

    def __str__(self) -> str:
        return self.title

class EbookCategory(models.Model):
    _id = ObjectIdAutoField(primary_key=True)
    name = models.TextField(unique=True)
    slug = models.TextField(unique=True)
    color = models.TextField()
    icon = models.TextField()
    ebooks_count = models.IntegerField(default=0)

    def __str__(self) -> str:
        return self.name
