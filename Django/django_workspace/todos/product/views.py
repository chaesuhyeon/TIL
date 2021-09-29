from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from product.models import Product
from product.serializer import ProductSerializer


@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def product_detail(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def product_create(request):
    serializer = ProductSerializer(data=request.data)  # 역직렬화
    if serializer.is_valid():  # 역직렬화일 경우 벨리드 체크 해줌
        serializer.save()
    return Response({"message": "success"})


@api_view(['PUT'])
def product_update(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(instance=product, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response({"message": "success"})


@api_view(['DELETE'])
def product_delete(request, pk):
    product = Product.objects.get(id=pk)
    product.delete()
    return Response({"message": "success"})
