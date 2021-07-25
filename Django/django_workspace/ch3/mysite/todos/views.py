
from datetime import datetime

from django.views.generic.list import ListView
from .form import TodoForm
from django.shortcuts import redirect, render
from django.http import HttpResponseRedirect
from .models import Todo
from django.urls import reverse
from django.shortcuts import render, get_object_or_404
from django.views.generic.base import TemplateView
from django.views.generic.list import ListView
from django.views.generic import detail
from django.views.generic.edit import FormView
from django.views.generic.edit import UpdateView


class IndexView(ListView):
    template_name = 'todos/index.html'
    context_object_name = 'todo_list'
    def get_queryset(self) : # QuerySet - customzing 해서 orderby절로 가져오려고 적어줌
        return Todo.objects.all().order_by('-todo_date')

# 일정 목록 보기  --  index
# def index(request):
#     todo_list = Todo.objects.all().order_by('-todo_date') 
#     context = {'todo_list': todo_list}
#     return render(request,'todos/index.html',context)


class DetailView(detail.DetailView):
    model = Todo  # 모델 선언하면 context_object_name : 'object' / template_name = 'polls/question_detail.html 
    context_object_name = 'todo'
    template_name = 'todos/detail.html'

# 일정 상세 보기
# def detail(request,todo_id):
#     todo = get_object_or_404(Todo, pk=todo_id)
#     context = {'todo': todo}
#     return render(request, 'todos/detail.html', context)



class RegisterView(FormView):
    template_name = 'todos/register.html'
    form_class = TodoForm
    success_url = '/todos/'
    def form_valid(self,form):
        todo = Todo(title = form.data.get('title'), contents= form.data.get('contents'))
        todo.save()
        return super().form_valid(form)




# 일정 등록
# def register(request):
#     if request.method == 'POST': # post 방식으로 요청이 들어왔을때
#         form = TodoForm(request.POST) # 입력된 내용들을 form이라는 변수에 저장
#         if form.is_valid():   # form이 유효하다면
#             post = form.save(commit=False) # form데이터를 가져온다.
#             post.todo_date = datetime.now()
#             post.save()
#             return HttpResponseRedirect(reverse('todos:index'))
               
#     else :
#         form = TodoForm () # Get 방식으로 들어왔을 때
#         context = {'form' : form}
#         return render(request,'todos/register.html', context)
#             # Get 방식으로 들어왔을 경우 form 이라는 변수에 담아서 html을 랜더링


def edit(request):
    return render(request,'todos/edit.html')
    
class UpdateView(UpdateView):
    template_name = 'todos/edit.html'
    form_class = TodoForm
    context_object_name = 'todo'
    success_url = '/todos/'
    def get_object(self) :
        todo = get_object_or_404(Todo, id = self.kwargs['pk'])
        return todo


# 일정 수정
# def update(request, todo_id):
#     todo = get_object_or_404(Todo, id=todo_id)
#     if request.method == 'POST':
#         form = TodoForm(request.POST, instance= todo)   # TodoForm의 instance는 todo임을 표시
#         if form.is_valid():
#             post = form.save(commit=False)
#             post.save()
#             return HttpResponseRedirect(reverse('todos:index'))
#     else:
#         form = TodoForm(instance= todo)
#         return render(request, 'todos/edit.html', {'form': form})



# # 일정 삭제
def remove(request, todo_id):
    todo = get_object_or_404(Todo,pk=todo_id)
    todo.delete() # todo DB에서 todo객체 삭제
    return render(request,'todos/index.html')








