# -*- coding: utf-8 -*-
"""
Created on Wed Jun 30 13:14:50 2021

@author: ddd81
"""

#########################################1
#1
import numpy as np

subject = [80, 75, 55]
print(np.average(subject))

#2
(80+75+55)/3

#3 dictionary
sb = {"국어" :80, "영어" : 75, "수학" : 55}
type(sb)

(sb["국어"] + sb["영어"] + sb["수학"]) / 3


#4
subject = [80, 75, 55]
average = (subject[0] + subject[1] + subject[2])/len(subject)
print(average)
print("홍길동의 평균은 ? {0}".format(average))

#########################################2

number = 13

#1
if number / 2 == 0 :
    print("number는 짝수입니다.") 
else : 
    print("number는 홀수입니다.")
    
#2 
number % 2 == 0
print("자연수 13은 짝수입니까? {0}".format(number % 2 == 0))
print("자연수 13은 홀수입니까? {0}".format(number % 2 == 1))                 

#########################################3

ID = "881120-1068234"
yyddmmdd = ID[:6] ; print(yyddmmdd)
num = ID[7:] ; print(num)

#########################################4

#1
if num[0] == "1" :
    print("남자입니다.")
else :
    print("여자입니다.")
    
#2
print("홍길동의 성별은 남자입니까? {}".format(num[0] == "1"))

#########################################5

a = "a:b:c:d"
print(a.replace(":","#"))


#########################################6

a = [1,3,5,4,2]
a.sort()
print(a)
a.reverse()
print(a)
print("거꾸로 해보기 : {0}".format(a))

#########################################7
A = ['Life', 'is', 'too', 'short']

B = A[0] + A[1] + A[2] + A[3]
print(B)






























