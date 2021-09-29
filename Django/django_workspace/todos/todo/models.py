from django.db import models


# Create your models here.

class Todo(models.Model):
    object = models.Manager()  # 인식이 안되는 경우가 있어서 그냥 넣어줌
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title
