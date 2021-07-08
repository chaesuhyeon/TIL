#집합자료형 - set 함수 이용 
#중복 허용 x, 순서 상관없이 나옴 ( 순서 상관없이 결과 나옴)
#list와 차이점 : list는 데이터 중복 허용, add한 순서대로 저장 

s = set("Hello")
s1 = set([1,2,3])
print(s,s1) # {'o', 'e', 'H', 'l'} {1, 2, 3}

#집합함수
s2 = set([1,2,3,4,5,6])
s3 = set([4,5,6,7,8,9])
print("교집합 : {0}". format(s2.intersection(s3))) # 교집합 : {4, 5, 6}
print("합집합 : {0}". format(s2.union(s3))) # 합집합 : {1, 2, 3, 4, 5, 6, 7, 8, 9}
print("차집합 : {0}". format(s2.difference(s3))) # 차집합 : {1, 2, 3}

s2.add(7)
print("add {0}".format(s2)) # add {1, 2, 3, 4, 5, 6, 7}

s2.update([8,9,10])
print("update {0}".format(s2)) # update {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

s2.remove(10)
print("remove {0}".format(s2)) # remove {1, 2, 3, 4, 5, 6, 7, 8, 9}

#type() : 변수의 type 확인

print("s2 type {0}".format(type(s2))) # s2 type <class 'set'> 타입이 set
print(type(True)) # true의 타입이 뭐니? <class 'bool'> 타입이 bool

a = [1,2,3,4]
while a:
    print(a.pop())
#4
#3
#2
#1        이렇 게 출력이 됨 / a에 []안에 숫자가 존재할때까지 while명령문 수행해라
#         1까지 돌고나면 []에 숫자가 없으므로 파이썬에선 거짓으로 인식. 따라서 명령문 중지됨








