
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response

from todo.models import Todo
from todo.serializer import TodoSerializer


@api_view(['GET'])
def todo_list(request):
    todos = Todo.object.all()  # 모델 불러옴 
    serializer = TodoSerializer(todos, many=True)  # todos 데이터를 직렬화 해서 응답 , 여러개의 데이터니까 many = True
    return Response(serializer.data)  # 직렬화된 데이터를 리턴


@api_view(['GET'])
def todo_detail(request, pk):
    todo = Todo.object.get(id=pk)
    serializer = TodoSerializer(todo, many=False)  # todos 데이터를 직렬화 해서 응답 , 한개의 데이터니까 many = False
    return Response(serializer.data)


@api_view(['POST'])
def todo_create(request):
    serializer = TodoSerializer(data=request.data)  # 역직렬화
    if serializer.is_valid():  # 역직렬화일 경우 벨리드 체크 해줌
        serializer.save()
    return Response({"message": "success"})


@api_view(['PUT'])
def todo_update(request, pk):
    todo = Todo.object.get(id=pk)
    serializer = TodoSerializer(instance=todo, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response({"message": "success"})


@api_view(['DELETE'])
def todo_delete(request, pk):
    todo = Todo.object.get(id=pk)
    todo.delete()
    return Response({"message": "success"})
