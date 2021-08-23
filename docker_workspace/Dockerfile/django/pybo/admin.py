from django.contrib import admin


# Register your models here.
from pybo.models import Question, Answer

class QuestionAdmin(admin.ModelAdmin):
    search_fields = ['subject']


admin.site.register(Question,QuestionAdmin)
admin.site.register(Answer)