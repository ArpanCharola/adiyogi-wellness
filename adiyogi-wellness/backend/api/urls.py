from django.urls import path
from . import views

urlpatterns = [
    path('health/', views.health_check, name='health_check'),
    path('message/', views.create_message, name='create_message'),
    path('session/<str:session_id>/messages/', views.get_session_messages, name='get_session_messages'),
    
    # NEW WORKSHEETS ROUTES
    path('worksheets/ebooks/', views.get_ebooks, name='get_ebooks'),
    path('worksheets/ebooks/<str:slug>/download/', views.download_ebook, name='download_ebook'),
]
