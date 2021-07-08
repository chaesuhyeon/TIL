 # 함수정의
 #def 함수이름(매개변수) :
 #    함수 기능 코딩
 #    return 호출한 곳에 전달하는 데이터 

def add(a,b):
     return a + b

#함수호출
#함수이름(매개변수에 맞는 데이터를 넣어주면 됨)
print(add(10,20)) # a = 10, b = 20

#호출할때 매개변수의 개수를 꼭 지켜야함 a,b 두개면 두개만!

sum = add(10,20)
print("10 + 20 = {0}".format(sum)) # 10 + 20 = 30
print("10 + 20 = {0}".format(add(10,20)))  # 10 + 20 = 30

def substract(a,b):
    return a-b

def multipy(a,b):
    return a*b

def divde(a,b):
    return a/b

print("10-20 = {0}".format(substract(10,20))) # 10-20 = -10
print("10*20 = {0}".format(multipy(10,20))) # 10*20 = 200
print("10/20 = {0}".format(divde(10,20))) # 10/20 = 0.5

# 매개변수 미정인경우 --> *매개변수 : 호출되는 시점에 매개변수 개수 결정

def add_many(*args):
    sum = 0
    for i in args:
        sum += i #sum = sum + i
    return sum

print("1 + 2 + 3 = {0}".format(add_many(1,2,3)))
# 1 + 2 + 3 = 6
print("1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10  = {0}".format(add_many(1,2,3,4,5,6,7,8,9,10)))
# 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10  = 55

#파이썬은 여러개 return 가능 --> 왜냐하면 tuple 때문
#return : 함수를 빠져나가라~ 
#위의 a,b 같은 매개변수는 return되는 순간 메모리에서 없어짐! 함수 호출시에만 적용

# 함수 범위 // local variable & global variable
# local variable : 함수의 매개변수나 함수 내에서 선언한 변수로 유효 범위는
# 함수가 호출돼서 return 되기 전까지 유효
# global variable : 함수 밖에 선언된 변수로 모든 함수가 공유해서 사용

global_variable = 10

def function1():
    local_variable = 10
    global global_variable
    global_variable += 10
    print("local_variable : {0} , global_variable : {1}".format(local_variable,global_variable))

def function2():
    local_variable = 100
    global global_variable
    global_variable += 10
    print("local_variable : {0} , global_variable : {1}".format(local_variable,global_variable))

function1() # local_variable : 10 , global_variable : 20
function2() # local_variable : 100 , global_variable : 30

# 익명의 함수를 정의할때, 함수 이름을 정의하지않고 기능을 수행하고자 할때 람다 사용
add = lambda a,b : a+b
print("lamda function {0}".format(add(3,4)),type(add))
# lamda function 7 <class 'function'>    / add의 타입은 함수라고 나옴

number = input("숫자를 입력하세요 : ")
print(number)
type(number)      # 숫자를 입력했지만 문자로 인식 / 숫자로 인식시키기 위해서 int 사용






