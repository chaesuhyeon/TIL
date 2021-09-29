from rest_framework import serializers

from todo.models import Todo


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Todo
        fields = ['id', 'title']  # 주고받을 필드만 , 직렬화할 필드만 작성
