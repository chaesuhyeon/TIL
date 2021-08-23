from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from .models import Author, Book, Publisher
# Create your views here.

class BooksModelView(TemplateView):    # class view
    template_name = "books/index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)  # 내 부모꺼 이용하면서 
        context['model_list'] = ['Book', 'Author', 'Publisher']  # 추가되는 데이터가 있으면 추가하겠다. [키] = value  , 저 키값에 value값으로 추가한다~
        return context # 해당되는 context return

class BookList(ListView): # 데이터 저장
    model = Book   # 모델만 지정하면 밑에 주석처리한것들을 ListView가 다 해줌 
    #object_list = Book.objects.all()
    #context={"object_list":object_list}
    #return render(requset,"books/book_list.html",context)

class BookDetail(DetailView): # 디테일
    model = Book
    #object = Book.objects.get(pk=id) //id - urlpattern books/book/id
    #context{"object":object}
    #return render(request,"books/book_detail.html",context)

class AuthorList(ListView): # 데이터 저장
    model = Author
    #object_list = Author.objects.all()
    #context={"object_list":object_list}
    #return render(requset,"books/author_list.html",context)

class AuthorDetail(DetailView): # 디테일
    model = Author
    #object = Author.objects.get(pk=id) //id - urlpattern books/author/id
    #context{"object":object}
    #return render(request,"books/author_detail.html",context)

class PublisherList(ListView):  # 데이터 저장
    model = Publisher
    #object_list = Publisher.objects.all()
    #context={"object_list":object_list}
    #return render(requset,"books/publisher_list.html",context)

class PublisherDetail(DetailView): # 디테일
    model = Publisher
    #object = Publisher.objects.get(pk=id) //id - urlpattern books/publisher/id
    #context{"object":object}
    #return render(request,"books/publisher_detail.html",context)