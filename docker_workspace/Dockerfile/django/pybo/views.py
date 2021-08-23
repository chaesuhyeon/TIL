from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, redirect

# Create your views here. - input validate,  model call, context에 data 저장, ui select
from django.utils import timezone
from django.views import generic

from pybo.forms import QuestionForm
from pybo.models import Question
from django.contrib.auth.decorators import login_required

#pybo 목록 출력

# def index(request):
#     object_list = Question.objects.order_by('create_date')
#     context = {'object_list': object_list}       ####################### object_list
#     return render(request, 'pybo/question_list.html',context)
#
# #pybo 상세보기
# def detail(request,question_id):
#    #question = Question.objects.get(id=question_id)
#     question = get_object_or_404(Question, pk=question_id)
#     context = {'object' : question}         ############################# object로
#     return render(request,'pybo/question_detail.html',context)   ######## 모델명 소문자 _

class IndexView(generic.ListView) :
    paginate_by = 10 # context = {'page_obj' : page_obj} 한 페이지당 10개씩 보여주는 것
    def get_queryset(self):
        return Question.objects.order_by('-create_date')

class DetailView(generic.DetailView):
    model = Question

# question_id의 Answer 객체 save
@login_required(login_url='common:login')
def answer_create(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    question.answer_set.create(content=request.POST.get('content'), create_date=timezone.now(), author=request.user)
    # answer = Answer(question = Question.objects.get(id=question_id),content= request.POST.get('content'),create_date=timezone())
    # answer.save()
    return redirect('pybo:detail', pk=question.id)

# question 등록화면 : get으로 들어오면 입력화면만 제공 , post로 요청들어오면 form(subject,content) 데이터 model 저장
@login_required(login_url='common:login')
def question_create(request):
    if request.method == 'POST':
        form = QuestionForm(request.POST)   # subject = request.POST['subject'] content = request.POST['content']
        if form.is_valid():                 # input data valid check : if subject != null && content != null 와 같이 하나하나 다써서 valid 검사를 해줘야함
            question = form.save(commit=False) # question = Question(subject=subject, content = content, create_date = timezone.now())
            question.create_date = timezone.now()
            question.author = request.user
            question.save()
            return redirect('pybo:index')
    else:
        form = QuestionForm()
    context = {'form': form}
    return render(request, 'pybo/question_form.html', context)
