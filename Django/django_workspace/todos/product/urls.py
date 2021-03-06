from django.contrib import admin
from django.urls import path

from product import views

urlpatterns = [
    path('', views.product_list, name="product_list"),
    path('<int:pk>/', views.product_detail, name="product_detail"),
    path('create/', views.product_create, name="product_create"),
    path('update/<int:pk>/', views.product_update, name="product_update"),
    path('delete/<int:pk>/', views.product_delete, name="product_delete"),
]
