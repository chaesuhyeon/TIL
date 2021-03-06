# 파이썬 함수 

##### 참고 문헌  : 코딩도장 파이썬



### 함수 작성 

```python
def hello():
    print('Hello, world!')
 
hello()

> Hello, world!
```

##### 함수 작성시 주의해야할 점

- 함수를 만들기 전에 함수를 먼저 호출하면 안됨



##### 내용이 빈 함수 만들기

```python
def hello():
    pass
```

- pass는 아무 일을 하지 않아도 함수의 틀을 유지할 필요가 있을 때 사용



##### 함수 형태

> ```python
> def 함수이름(매개변수1, 매개변수2):
>     코드
> ```



##### 함수 독스트링

- 함수의 :(콜론) 바로 다음 줄에 """ """(큰따옴표 세 개)로 문자열을 입력하면 함수에 대한 설명을 넣을 수 있다.
- 단, 독스트링의 윗줄에 다른 코드가 오면 안된다.

```python
def 함수이름(매개변수):
    """독스트링"""
    코드
 
def 함수이름(매개변수):
    """
    여러 줄로 된 
    독스트링
    """
    코드
```



> 독스트링 예제
>
> ```python
> def add(a, b):
>     """이 함수는 a와 b를 더한 뒤 결과를 반환하는 함수입니다."""
>     return a + b
>  
> x = add(10, 20)       # 함수를 호출해도 독스트링은 출력되지 않음
> print(x)
>  
> print(add.__doc__)    # 함수의 __doc__로 독스트링 출력
> ```



#####  return의 기능

- 값을 반환
- 함수 중간에서 바로 빠져나오기

> 함수 중간에서 바로 빠져나오기 예제
>
> ```python
> >>> def not_ten(a):
> ...     if a == 10:
> ...         return
> ...     print(a, '입니다.', sep='')
> ...
> >>> not_ten(5)
> 5입니다.
> >>> not_ten(10)
> >>> 
> ```



##### 가변 인수 함수

- 매개변수 앞에` *`를 붙여서 만든다.  
- 매개변수 이름은 관례적으로 arguments를 줄여서  `args`로 사용함
- * `*args`가 고정 매개변수보다 앞쪽에 오면 안된다. 매개변수 순서에서 `*args`는 반드시 가장 뒤쪽에 와야 한다.   ex) def print_numbers(a, *args)

```python
>>> def print_numbers(*args):
...     for arg in args:
...         print(arg)

>>> print_numbers(10)
10
>>> print_numbers(10, 20, 30, 40)
10
20
30
40
```



##### 딕셔너리 언패킹

- 딕셔너리 앞에 `**`를 붙여서 함수에 넣어준다.
- 딕셔너리 언패킹을 사용할 때는 함수의 '매개변수' 이름과 딕셔너리의 '키'  이름이 같아야 하며, '매개변수' 개수와 딕셔너리 '키'의 개수도 같아야 한다. 

```python
>>> x = {'name': '홍길동', 'age': 30, 'address': '서울시 용산구 이촌동'}
>>> personal_info(**x)
이름:  홍길동
나이:  30
주소:  서울시 용산구 이촌동
```



##### 딕셔너리 가변인수

- 관례적으로 kwargs로 사용
- kwargs는 딕셔너리라서 for로 반복할 수 있다.

```python
def personal_infoo(**kwargs):
    for kw,arg in kwargs.items():
        print(kw, ':', arg)

personal_infoo(name = '홍길동')
```



##### lamda 표현식

- `lamda 매개변수들 : 식`

```python
# 원래 함수 식 ( 숫자를 받은 뒤 10을 더해서 반환하는 함수)

>>> def plus_ten(x):
...     return x + 10
...
>>> plus_ten(1)
11


# 람다 표현 식

>>> plus_ten = lambda x: x + 10
>>> plus_ten(1)
11
```



- 람다 표현식은 변수에 할당하지 않고 람다 표현식 자체를 바로 호출할 수 있다.
- `lamda 매개변수들 :식(인수들)`

```python
>>> (lambda x: x + 10)(1)
11
```



- 람다 표현식에서 조건부 표현식 사용하기
- `lamda 매개변수들: 식1 if 조건식 else 식2`

```python
>>> a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
>>> list(map(lambda x: str(x) if x % 3 == 0 else x, a))

[1, 2, '3', 4, 5, '6', 7, 8, '9', 10]

# 요소가 3의 배수일 때는 str(x)로 요소를 문자열로 만들어서 반환했고, 3의 배수가 아닐 때는 x로 요소를 그대로 반환

# 식1은 조건식이 참일 때 , 식2는 조건식이 거짓일 때 사용되는 식
```

> 람다 표현식 안에서 조건부 표현식 if, else를 사용할 때는 :(콜론)을 붙이지 않는다.
>
> 일반적인 if-else문과 는 문법이 다름으로 주의
