from django.forms.fields import DateField
from django.http.response import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from .models import Question,Choice
from django.urls import reverse
from .forms import QuestionForm,ChoiceForm
from django.utils import timezone

# Create your views here.
# /polls/ 요청시 
# latest_question_list에 Question의 모둔 데이터 select all 저장
# templates - index.html select (latest_question_list전달)
# question 리스트 출력
from django.views.generic.base import TemplateView
from django.views.generic.list import ListView
from django.views.generic import detail

#def 에서 class로
class IndexView(ListView): # 기본적으로 object_list로 되어있고, 모델 소문자._list.html로 응답함. 근데 우리가 저장한 형식이랑 다르니 적어주면됨
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'
    def get_queryset(self) : # QuerySet - customzing 해서 orderby절로 가져오려고 적어줌
        return Question.objects.all().order_by('-pub_data')

class DetailView(detail.DetailView):
    model = Question  # 모델 선언하면 context_object_name : 'object' / template_name = 'polls/question_detail.html 
    context_object_name = 'question'
    template_name = 'polls/detail.html'
 


# /polls/id/vote 요청시 id의 vote add한 후 결과페이지로 redirect
def vote(request, question_id):
    # 입력값 검증 : question_id 존재하지 않는 경우 404 error 
    # business logic 호출 : question_id의 Question 객체 가져옴
    question = get_object_or_404(Question, pk = question_id )
    
    # reqeust choice_id에 해당하는 vote조회 - 증가 - 수정
    # error : question, Error_message 저장,  detail.html template select
    try:
        selected_choice = question.choice_set.get(pk=request.POST['choice'])

    except (KeyError, Choice.DoesNotExist):
        context = {'question' : question,'error_message' :"You didn't select a choice"}
        return render(request,'polls/detail.html',context)
    else:
        # select_choice vote 증가 - 수정
        selected_choice.votes +=1
        selected_choice.save()
        # redirect - result.html template select
        return HttpResponseRedirect(reverse('polls:results', args =(question.id,)))
# /polls/id/result/ 요청 시 id에 해당하는 vote 결과 출력


class ResultView(detail.DetailView):
    model = Question
    context_object_name = 'question'
    template_name = 'polls/results.html'



