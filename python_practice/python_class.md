# 클래스(Class)

참고 문헌  : 코딩 도장 파이썬



#### class 와 method 만들고 호출하기

- 클래스는 class에 클래스 이름을 지정하고 :(콜론)을 붙인 뒤 다음 줄 부터 def로 method를 작성하면 된다.
- 여기서 method는 클래스 안에 들어있는 함수를 뜻함
- 파이썬에서 클래스의 이름은 `대문자`로 시작

- method의 첫번째 매개변수는 반드시  `self`를 지정해야 한다.

```python
class 클래스이름:
    def 메서드(self):
        코드
        
# ex)

>>> class Person:
...     def greeting(self):
...         print('Hello')
...

>>> james = Person()        # instance = class이름()
```

- class는 특정 개념을 표현만 할 뿐 사용하려면 instance 생성해야 한다.



```python
>>> james.greeting()       # instance.method()
Hello 
```

- method는 class가 아니라 instance를 통해 호출



> 내용이 빈 함수 만들기
>
> ```python
> class Person:
>     pass
> 
> # 코드 부분에 pass 넣어주기
> ```



> method 안에서 method 호출하기
>
> ```python
> class Person:
>     def greeting(self):
>         print('Hello')
>  
>     def hello(self):
>         self.greeting()   
>         
> # self.메서드() 형식으로 클래스 안의 메서드를 호출
> # self 없이 메서드 이름만 사용하면 클래스 바깥쪽에 있는 함수를 호출한다는 뜻이 되므로 주의해야 한다.
>  
> james = Person()
> james.hello()    # Hello
> ```



> 특정 클래스의 인스턴스인지 확인하기
>
> - 현재 인스턴스(instance)가 특정 클래스의 인스턴스인지 확인할때는 isinstance함수를 사용한다.
> - 특정 클래스의 인스턴스가 맞으면 True, 아니면 False를 반환한다.
>
> ```python
> >>> class Person:
> ...     pass
> ...
> >>> james = Person()
> >>> isinstance(james, Person)
> True
> ```
>
> - isinstance는 주로 객체의 자료형을 판단할 때 사용한다.



#### class의 속성 만들고 사용하기

- 속성(attribute)을 만들 때는 `__init__` 메서드(method)안에서 `self.속성`에 값을 할당한다.

  ```python
  class 클래스이름:
      def __init__(self):
          self.속성 = 값
          
  # ex)        
  
  class Person:
      def __init__(self):
          self.hello = '안녕하세요.'  
  
   # Person 클래스의 __init__ 메서드에서 self.hello에 '안녕하세요.' 를 넣었음
   
      def greeting(self):
          print(self.hello)   
   
  james = Person()
  james.greeting()    # 안녕하세요.
  ```

- `__init__` 메서드는  james = Person()처럼 클래스에 ( )(괄호)를 붙여서 인스턴스를 만들 때 호출되는 특별한 메서드이다.
- `__init__`는 이름 그대로 인스턴스(instance : 객체)를 초기화 한다.
- 특히 앞뒤로 `__`두개가 붙은 메서드는 파이썬이 자동으로 호출해주는 메서드

- 속성은` __init__` 메서드에서 만든다는 점과 `self에 .(점)`을 붙인 뒤 값을 할당한다는 점이 중요



#### self의 의미

- self는 인스턴스 자기 자신을 의미

- `__init__`의 매개변수 self에 들어가는 값은 Person()이라 할 수 있다.

-  self가 완성된 뒤 james에 할당된다. 이후 메서드를 호출하면 현재 인스턴스가 자동으로 매개변수 self에 들어온다.



#### instance 만들 때 값 받기

- `__init__` 메서드에서 self 다음에 값을 받을 매개변수를 지정한다. 그리고 매개변수를`self.속성`에 넣어준다.

```python
class 클래스이름:
    def __init__(self, 매개변수1, 매개변수2):
        self.속성1 = 매개변수1
        self.속성2 = 매개변수2
        
        
# ex)

class Person:
    def __init__(self, name, age, address):
        self.hello = '안녕하세요.'
        self.name = name
        self.age = age
        self.address = address
 
    def greeting(self):
        print('{0} 저는 {1}입니다.'.format(self.hello, self.name))
 
maria = Person('마리아', 20, '서울시 서초구 반포동')
maria.greeting()    # 안녕하세요. 저는 마리아입니다.
 
print('이름:', maria.name)       # 마리아
print('나이:', maria.age)        # 20
print('주소:', maria.address)    # 서울시 서초구 반포동

```

- 클래스 안에서 속성에 접근할 때는`self.속성` 형식
- 클래스 바깥에서 속성에 접근할 때는`인스턴스.속성` 형식으로 접근                     ( maria.name)



#### class 상속

```python
class 부모클래스이름:
    코드
 
class 자식클래스이름(부모클래스이름):    # 상속
    코드
```



- 클래스의 상속관계를 확인하고 싶을때는 issubclass 함수 사용

> ```python
> >>> issubclass(class1, class2)
> >>> True
> ```



- super().__init__() 를 자식클래스에서 작성해줘야함. 
- super().__init__()를 사용안하는 경우 : 자식클래스에서  __init__ 메서드가 없다면 부모 클래스의 __init__이 자동으로 호출되므로 부모 클래스의 속성을 사용할 수 있다.

- 오버라이딩(overriding) :  부모클래스의 메서드를 무시하고 새로운 메서드를 만드는 것



> 다중상속
>
> ```python
> class 부모클래스이름1:
>     코드
>  
> class 부모클래스이름2:
>     코드
>  
> class 자식클래스이름(부모클래스이름1, 부모클래스이름2):
>     코드
>     
>     
> # ex)
> class Person:
>     def greeting(self):
>         print('안녕하세요.')
>  
> class University:
>     def manage_credit(self):
>         print('학점 관리')
>  
> class Undergraduate(Person, University):  # 두개를 상속받음
>     def study(self):
>         print('공부하기')
>  
> james = Undergraduate()
> james.greeting()         # 안녕하세요.
> james.manage_credit()    # 학점 관리
> james.study()            # 공부하기
> ```





