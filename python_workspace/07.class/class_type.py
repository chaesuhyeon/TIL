class calculator:
    static_variable = "계산기" #class variable : 모든 객체가 공유할 수 있음            # print(calculator.static_variable) = 계산기
    def __init__(self): # 생성자
        self.result = 0 # member variable(클래스 속성)

    def add(self, num): # member method(클래스 기능)
        self.result += num
        return self.result

#use code (사용자 코드) - classtype의 object
cal1 = calculator() # init이라는 내부함수 호출 / 콜백이라고 함 / 생성자 이용해서 instance화 - cal1객체(object) / 초기화 self.result = 0
cal2 = calculator() # 생성자 이용해서 instace화 , cal2 객체 (object) / 초기화 self.result = 0

print(cal1.add(3)) # cal1 객체의 add method 호출 : 3
print(cal1.add(4)) # 3에다가 4 누적 (초기화 x) :7
print(cal2.add(3)) # cal2 객체의 add method 호출 : 3  (초기화)
print(cal2.add(7)) # 3에다가 7 누적 (초기화 x) :10


# car 추상화를 통한 attrubute(member variable) , operator(member method)

class car:
    def __init__(self, name, cc, color):
        self.name = name
        self.cc = cc
        self.color = color
    
    def car_info(self):
        print("{0}차는 {1}색의 배기량 {2}cc 입니다. ".format( self.name,  self.color,  self.cc))


# 객체 생성 및 초기화 - 생성자
jsh = car("롤스로이스" , 3000, "흰")
hsl = car("그랜져" , 3000, "검은")
# 객체 기능 사용  - dot(.)
jsh.car_info()
hsl.car_info()          # 그랜져 할때는 '롤스로이스 , 3000, 흰' 이 초기화 됨 
                              

# 객체집합을 instance 라고 함

## 클래스 상속 : 부모클래스(superclass)의 member variable과 member method를 자식클래스 (subclass)에서 사용
# 상속 -->  사용 형식 : class  이름(상속할 클래스 이름) //  class subclass(superclass) : 

class subclass(calculator):
    pass
sub_variable = subclass()
print("subclass 에서 superclass method 사용하기 {0}".format(sub_variable.add(3)))
# subclass 에서 superclass method 사용하기 3   # 부모 class 가 적용되어 add(3) = 3이 나옴

# 실행순서 
# superclass의 생성자 호출 --> subclass의 생성사 호출


class subclass(calculator):
    def __init__(self):
        super().__init__()            # 자동으로 상속관계인거 인식됨
        print("subclass의 생성자 호출")

    def add(self, num): # method overriding : 부모의 method를 재정의 - 재정의 한 override method가 응답
        return num+10

sub_variable = subclass()
print("subclass 에서 superclass method 사용하기 {0}".format(sub_variable.add(3)))
# subclass 에서 superclass method 사용하기 13 # add함수의 정의가 재정의 되어 원래는 add(3) = 3 이지만 +10 을 해서 13이 나옴 












