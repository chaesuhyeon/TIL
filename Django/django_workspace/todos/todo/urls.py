from django.contrib import admin
from django.urls import path

from todo import views

urlpatterns = [
    path('', views.todo_list, name="todo_list"),
    path('<int:pk>/', views.todo_detail, name="todo_detail"),
    path('create/', views.todo_create, name="todo_create"),
    path('update/<int:pk>/', views.todo_update, name="todo_update"),
    path('delete/<int:pk>/', views.todo_delete, name="todo_delete"),
]
