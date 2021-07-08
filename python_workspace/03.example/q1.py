#1
#import numpy as np

#subject = [80, 75, 55]
#print(np.average(subject))

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