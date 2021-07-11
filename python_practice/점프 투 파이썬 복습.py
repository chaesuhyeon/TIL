# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

##### 숫자형 #####

a = 9
b = 2
c = 3

# 제곱 : **

print(a ** b)

# 나눗셈 후 나머지 반환 : %

print(a / c) # 나눗셈
print(a % c)

# 나눗셈 후 몫을 반환 : //

print(a / c)
print(a // c)

##### 문자형 #####

# 문자열을 생성할때는 "" , '' , """ """ , ''' ''' 로 표시

print("hello")
print('hello')
print("hello is '안녕'")  # 큰 따옴표 안에 ' '를 문자열로 만드는 기호로 인식 x
print(('hello is "안녕"')) # 작은 따옴표 안에 " "를 문자열로 만드는 기호로 인식 x

print("hello is \"안녕\"") # " "앞에 \를 넣어주면 " 를 문자 자체로 인식( 작은 따옴표도 동일)

print("Life is too short.\n you need python") 
print("""Life is too short.
you need python""")

print("Life is too short.\t you need python") 

print("Life is too short.\\ you need python") 

# 문자열 더하기
head = "python"
tail = " is fun!"
print(head + tail)

# 문자열 곱하기

print("=" * 50)
print("My Program")
print("=" * 50)

print(len(head))
head[0]
head[1]
head[2]
head[3]
head[4]
head[5]

print(head[0:3]) # 슬라이싱 기법
print(head[3:])

print(head[0:3] + head[3:] ) 
print(head[ : ])

print(head1 = "hellohi")
print(head1[0])
# head1[0] = "H"  -> 오류남 , 문자열의 요솟값은 바꿀 수 있는 값이 아니다.

# 문자열의 요솟값은 바꿀 수 없기 때문에 슬라이싱 기법으로 합치기
print("H" + head1[1 :]) 


# 문자열 포맷
print("today is %d day" %3)
print("today is %s day" %3)
print("today is %s day" %"three")

print("today discount is %d%% percent" %3) # %를 작성하고 싶을땐 %d 뒤에 %%를 붙여준다

# f 문자열 포맷팅
name = '홍길동'
f'나의 이름은 {name} 입니다.'


d = {"name" :"홍길동" , "age" : 30}
f'나의 이름은 {d["name"]}입니다. 나이는 {d["age"]}입니다.'


a = "hobby"
a.count("b")
a.find("b")

",".join("hobby")
",".join(['a','b','c','d'])

['a','b','c','d']

a.upper()

##### 리스트 자료 #####

odd = [1, 3, 5, 7, 9]
odd
type(odd)

a = list()  # 비어있는 리스트 생성 or a = [] 라고 치면 됨
type(a) 

odd * 2

##### 딕셔너리 #####


grade = {17 : "1학년" , 18 : "2학년", 19 : "3학년"}
print(grade[17])
print(grade[18])


grade.keys()
list(grade.keys())

for i in grade.keys():
    print(i)

grade.values()
grade.items()

grade.get(17)

# 해당 key가 딕셔너리 안에 있는지 조사하기 
17 in grade # True
20 in grade # False


##### 집합자료형(set) #####

s1 = set([1,2,3])
s1
type(s1)

s = set()
type(s)

s2 = set("Hello")
s2
s1[0]

type(s2)
ss1 = list(s2)
print(type(ss1))

ss1[0]


s1 = set([1, 2, 3, 4, 5, 6])
s2 = set([4, 5, 6, 7, 8, 9])

s1 & s2

print("s1과 s2 의 교집합은 {0} 입니다.".format(s1 & s2))
print("s1과 s2 의 합집합은 {0} 입니다.".format(s1 | s2))
print("s1과 s2 의 합집합은 {0} 입니다.".format(s1.union(s2)))
print("s1과 s2 의 합집합은 {0} 입니다.".format(s2.union(s1)))
print("s1과 s2 의 차집합은 {0} 입니다.".format(s1 - s2))
print("s1과 s2 의 차집합은 {0} 입니다.".format(s1.difference(s2)))



s = set([1,2,3])
s.add(4)
print(s)

s.update([7,8])
print(s)


s.remove(7)
print(s)

1 in s


#if 1 in s == "True":
#    s.remove(1)
#    print(s)



#i = int(input("숫자를 입력하세요 : "))
#if i in s == "True":
#    sss1 = s.remove(i)
#    print(sss1)

a = b = "python" 
a is b


##### if문 #####
money = True
if money:
    print("택시를 타고 가라")
else:
    print("걸어 가라")

pocket = ['paper', 'cellphone','money']
if 'money' in pocket:
    print("택시를 타고 가라")

else:
    print("걸어 가라")
    
score = 50
message = print("success") if score >=60 else print("failure")

##### while문 #####

#
treeHit = 0
while  treeHit < 10:
    treeHit +=1
    print("나무를 %d번 찍었습니다." %treeHit)
    if treeHit ==10:
        print("나무 넘어갑니다.")

#
prompt = """
   1. Add
   2. Del
   3. List
   4. Quit
   
   Enter number : """
   
print(prompt)
   
number = 0
while number != 4:
    print(prompt)
    number = int(input())

#
coffee = 10
money = 300
while money:
    print("돈을 받았으니 커피를 줍니다.")
    coffee -=1
    print("남은 커피의 양은 %d 입니다." % coffee)
    if coffee == 0:
        break


#
coffee = 10
while True:
    money = int(input("돈을 넣어 주세요: "))
    if money == 300:
        print("커피를 줍니다.")
        coffee -=1
    elif money > 300:
        print("거스름돈 %d를 주고 커피를 줍니다." %(money -300))
        coffee -=1
    else:
        print("돈을 다시 돌려주고 커피를 주지 않습니다.")
        print("남은 커피의 양은 %d개 입니다." %coffee)
    if coffee == 0:
        print("커피가 다 떨어졌습니다. 판매를 중지합니다.")
        break

# 홀수만 출력하기        
a = 0
while a < 10:
    a +=1
    if a % 2 == 0: continue
    print(a)
    
   
##### for문 ##### 

#
test_list = ['one', 'two', 'three']
print(test_list)    
    
for i in test_list:
    print(i)    
    

#
a = [(1,2), (3,4), (5,6)]
for (first, last) in a:
    print(first + last)
    
# 점수에 대한 합격/불합
marks = [90, 25, 67, 45, 80] 
    
number = 0

for i in  marks :
    number +=1
    if i < 60:
        print("%d번 학생은 불합격 입니다." %number)
    else:
        print("%d번 학생은 합격 입니다." %number)


# 합격자만 알려주기 
        
marks = [90, 25, 67, 45, 80] 
    
number = 0

for i in  marks :
    number +=1
    if i < 60:
        continue
    else:
        print("%d번 학생은 합격 입니다." %number)

# 리스트 내포 사용하기
        
a = [1,2,3,4]
result = []
for i in a:
    result.append(i*3)
print(result)


##### 함수 ##### 

#
def hello():
    print("hello world")

hello() # 함수 호출 

#
def add(a,b):
    return a+b

add(3,4)

#
def not_ten(a):
    if a == 10:
        return
    print("a는 {0}입니다.".format(a))
not_ten(5)
not_ten(10)


#
def add_diff(a,b):
    return a+b, a-b

add_diff(20,10)
x, y = add_diff(20,10)
x
y    

1,2 # 튜플로 반환


# 가변 인수 함수
def print_numbers(*args):
    for arg in  args:
        print(arg)

print_numbers(10)

xx = [1,2,3,4]
print_numbers(*xx)  


#    
def personal_info(name,age,adress):
 
    return name , age, adress

personal_info("채수현", 25, "안산")    


# 
def personal(name,age) :
    print("이름은 : ", name)
    print("나이는 : ", age)    
    
personal("채수현", 25)    
    
personal(age = 25, name = "채수현")


print(10,20,30, sep = ':')


print(10,20,30, sep = ':' , end ='')



a_a = {'name1' : '홍길동', 'name' : '유관순'}
a_a.items()


#
def personal_infoo(**kwargs):
    for kw,arg in kwargs.items():
        print(kw, ':', arg)

personal_infoo(name = '홍길동')

 def plus_ten(x):
     return x + 10
list(map(plus_ten, [1, 2, 3]))







