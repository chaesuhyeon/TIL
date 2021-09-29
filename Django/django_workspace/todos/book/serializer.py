from rest_framework import serializers

from book.models import Book


class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'isbn', 'title', 'author', 'publisher', 'price', 'imgUrl', 'introduce']  # 주고받을 필드만 , 직렬화할 필드만 작성
