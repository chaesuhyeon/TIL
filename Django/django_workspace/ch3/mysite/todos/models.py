from django.db import models


# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=50) # 글자 수 제한
    contents = models.CharField(max_length=200)
    todo_date = models.DateTimeField(auto_now_add = True)   # auto_mow하면 수정할때도 수정한 시각으로 자동수정가능

    def __str__(self):
        return self.title
