# Create your models here.
from django.db import models


# Create your models here.

class Book(models.Model):
    objects = models.Manager()  # 인식이 안되는 경우가 있어서 그냥 넣어줌
    isbn = models.CharField(max_length=20)
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=50)
    publisher = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    imgUrl = models.CharField(max_length=200, null=True)
    introduce = models.CharField(max_length=500)

    def __str__(self):
        return self.title
