from django.contrib import admin
from django.urls import path

from book import views

urlpatterns = [
    path('', views.book_list, name="book_list"),
    path('<int:pk>/', views.book_detail, name="book_detail"),
    path('create/', views.book_create, name="book_create"),
    path('update/<int:pk>/', views.book_update, name="book_update"),
    path('delete/<int:pk>/', views.book_delete, name="book_delete"),
]
