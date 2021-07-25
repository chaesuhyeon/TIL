from .models import Author, Book, Publisher
from django.contrib import admin

# Register your models here.

admin.site.register(Book)
admin.site.register(Author)
admin.site.register(Publisher)