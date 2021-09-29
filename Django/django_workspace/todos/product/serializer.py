from rest_framework import serializers

from product.models import Product


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'category', 'price', 'stocked', 'name']  # 주고받을 필드만 , 직렬화할 필드만 작성
