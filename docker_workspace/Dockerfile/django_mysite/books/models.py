from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.

class Book(models.Model):
    title = models.CharField(max_length=100)
    authors = models.ManyToManyField('Author') # 참조하는 pk의 타입을 쓴다. Author테이블의 id를 참조하고 있는데 id의 타입은 integer이므로, authors 타입도 integer
    publisher = models.ForeignKey('Publisher', on_delete=models.CASCADE)
    publication_date = models.DateField()

    def __str__(self) -> str:
        return self.title # 책 제목

class Author(models.Model):
    salutation = models.CharField(max_length=100)
    name = models.CharField(max_length=50)
    email = models.EmailField()

    def __str__(self) -> str:
        return self.name # 저자이름 return 

class Publisher(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    website = models.URLField()  

    def __str__(self) -> str:
        return self.name  # 출판사 이름