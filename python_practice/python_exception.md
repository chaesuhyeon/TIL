# 예외 처리 

- 예외(exception) : 코드를 실행하는 중에 발생한 에러
- ZeroDivisionError , AttributeError, NameError, TypeError 등
- 예외 처리 : 예외가 발생했을 때도 스크립트 실행을 중단하지 않고 계속 실행하게 해주는 방법 



> 예외 처리 방법

#### try - except 사용

```python
try:
    실행할 코드
except:
    예외가 발생했을 때 처리하는 코드
   

# ex)
try:
    x = int(input('나눌 숫자를 입력하세요: '))
    y = 10 / x
    print(y)
except:    # 예외가 발생했을 때 실행됨
    print('예외가 발생했습니다.')
    
>>> 나눌 숫자를 입력하세요: 0 (입력) 
    예외가 발생했습니다.

```



#### 특정 예외만 처리하기

```python
try:
    실행할 코드
except 예외이름:
    예외가 발생했을 때 처리하는 코드
    

# ex)
y = [10, 20, 30]
 
try:
    index, x = map(int, input('인덱스와 나눌 숫자를 입력하세요: ').split())
    print(y[index] / x)
except ZeroDivisionError:    # 숫자를 0으로 나눠서 에러가 발생했을 때 실행됨
    print('숫자를 0으로 나눌 수 없습니다.')
except IndexError:           # 범위를 벗어난 인덱스에 접근하여 에러가 발생했을 때 실행됨
    print('잘못된 인덱스입니다.')


>>> 인덱스와 나눌 숫자를 입력하세요: 2 0 (입력)
    숫자를 0으로 나눌 수 없습니다.

>>> 인덱스와 나눌 숫자를 입력하세요: 3 5 (입력)
    잘못된 인덱스입니다.
```



#### 예외의 에러 메세지 받아오기

```python
try:
    실행할 코드
except 예외 as 변수:
    예외가 발생했을 때 처리하는 코드
   
# ex)
y = [10, 20, 30]
 
try:
    index, x = map(int, input('인덱스와 나눌 숫자를 입력하세요: ').split())
    print(y[index] / x)
except ZeroDivisionError as e:       # as 뒤에 변수를 지정하면 에러를 받아옴
    print('숫자를 0으로 나눌 수 없습니다.', e)    # e에 저장된 에러 메시지 출력
except IndexError as e:
    print('잘못된 인덱스입니다.', e)
    
 
>>>인덱스와 나눌 숫자를 입력하세요: 2 0 (입력)
   숫자를 0으로 나눌 수 없습니다. division by zero

>>> 인덱스와 나눌 숫자를 입력하세요: 3 5 (입력)
    잘못된 인덱스입니다. list index out of range
    
    

# 모든 에러 메세지 출력하고 싶을때 except에 Exception 넣어주기
except Exception as e:    
    print('예외가 발생했습니다.', e)
```









