
from django.urls import path
from todos import views
from todos.views import IndexView,DetailView,UpdateView,RegisterView,edit,remove
app_name ='todos'
# urlpatterns = [
#     path('', views.index, name='index'),
#     path('register/', views.register, name='register'),
#     path('<int:todo_id>/', views.detail, name='detail'), # int 타입
#     path('edit/',views.edit, name='edit'), # 글 수정 화면
#     path('update/<int:todo_id>/', views.update, name='update'), # 수정을 진행하는 method
#     path('remove/<int:todo_id>/', views.remove, name='remove'),
           
# ]




urlpatterns = [
    path('',IndexView.as_view() , name='index'),
    path('register/', RegisterView.as_view(), name='register'),
    path('<int:pk>/', DetailView.as_view(), name='detail'), # int 타입
    path('edit/',edit, name='edit'), # 글 수정 화면
    path('update/<int:pk>/', UpdateView.as_view(), name='update'), # 수정을 진행하는 method
    path('remove/<int:todo_id>/', remove, name='remove'),
           
]