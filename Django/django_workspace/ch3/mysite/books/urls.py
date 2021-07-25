"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from books.views import *

app_name = 'books'
urlpatterns = [
    path('', BooksModelView.as_view(), name = 'index'), # /books/
    path('book/', BookList.as_view(), name = 'book_list'), # /books/book/
    path('book/<int:pk>', BookDetail.as_view(), name = 'book_detail'), # /books/book/3(id)/
    path('author/', AuthorList.as_view(), name = 'author_list'), # /books/author/
    path('author/<int:pk>', AuthorDetail.as_view(), name = 'author_detail'), # /books/author/3(id)
    path('publisher/', PublisherList.as_view(), name = 'publisher_list'), # /books/publisher/
    path('publisher/<int:pk>', PublisherDetail.as_view(), name = 'publisher_detail'), # /books/publisher/
]
