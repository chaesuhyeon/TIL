from django import forms
from .models import Question,Choice
class QuestionForm(forms.Form):
    class Meta:  # QuestionForm class 안에서만 사용되는 class 
        model = Question # 사용할 모델 매핑
        fields = ['question_txt'] # QuestionForm에서 사용할 Question 모델 속성

class ChoiceForm(forms.Form):
    class Meta:
        model = Choice
        fields = ['choice_txt', 'question'] # 사용자로 하여금 입력받는 데이터만 적어줌.  어떤질문의 어떤 초이스인지
                                            # ChoiceForm에서 사용할 Choice 모델 속성