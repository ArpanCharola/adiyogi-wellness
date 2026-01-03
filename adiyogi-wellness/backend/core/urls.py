"""
core URL Configuration
"""

from django.urls import path, include

urlpatterns = [
    path("api/", include("api.urls")),
]
