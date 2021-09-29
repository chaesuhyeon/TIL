# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from book.models import Book
from book.serializer import BookSerializer


@api_view(['GET'])
def book_list(request):
    books = Book.object.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def book_detail(request, pk):
    book = Book.object.get(id=pk)
    serializer = BookSerializer(book, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def book_create(request):
    serializer = BookSerializer(data=request.data)  # 역직렬화
    if serializer.is_valid():  # 역직렬화일 경우 벨리드 체크 해줌
        serializer.save()
    return Response({"message": "success"})


@api_view(['PUT'])
def book_update(request, pk):
    book = Book.object.get(id=pk)
    serializer = BookSerializer(instance=book, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response({"message": "success"})


@api_view(['DELETE'])
def book_delete(request, pk):
    book = Book.object.get(id=pk)
    book.delete()
    return Response({"message": "success"})