from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.

class Question(models.Model):
    question_txt = models.CharField(max_length=200) #charfield 문자, 200자까지
    pub_data = models.DateTimeField('date published')      #날짜 and 시간

    def __str__(self) -> str:
        return self.question_txt # 내부모꺼 가져오지 않고 내꺼를 return하겠다.

class Choice(models.Model):
    choice_txt = models.CharField(max_length=200)
    votes = models.IntegerField(default=0) # 제약 사항 :디폴트 값으로 0을 준다. / int 타입
    question = models.ForeignKey(Question, on_delete=CASCADE)  # CASCADE : 기본키가 삭제되면 기본키를 참조하고 있는 데이터는 삭제됨.

    def __str__(self) -> str:
        return self.choice_txt
