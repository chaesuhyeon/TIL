# 모듈 : 독립적인 기능을 위한 변수, 함수, 클래스를 모아 놓은 파일
# 다른 모듈 기능 사용 : import 모듈이름                      -> 모듈이름.함수이름() 으로 사용
#                      form 모듈이름 import 함수리스트      -> 함수이름() 으로 사용

# print("10 + 20 = {0}".format(add(10,20))) --> 실행하면 add가 정의 안됐다고 오류나옴

# 그동안 한페이지에서다 실행, 출력 했지만, 다른페이지에서 mod01.py에 있는 함수를
# 사용하고자 할때 --> import 사용 !!

# from . import mod01   # from 옆에 .을 쓰는 이유는 같은(현재)디렉토리(08.module)에서
# mod01.py 모듈을 import 한다~ 라는 뜻   # vs code 에서는 오류남 . 파이썬에선 실행될듯

#import mod01
# print("10 + 20 = {0}".format(mod01.add(10,20)))
# print("10 - 20 = {0}".format(mod01.sub(10,20)))

# mod.01 add()  처럼 mod01. ~이렇게 안쓰고 싶으면 

# mod01.py 모듈로부터 add, sub함수 import 하겠다~

from mod01 import add,sub # mod01.py 모듈로부터 add, sub함수 import 하겠다~
print("10 + 20 = {0}".format(add(10,20)))  # format 에 mod01. ~ 이 빠짐
print("10 - 20 = {0}".format(sub(10,20))) 

# from mod01 import *  이라고 해도 됨 ! -> * : 모든 function  다 쓰겠다는 의미
# but 가독성을 위해 함수를 그냥 나열하는 것이 낫다.

# 실행하다보니 08.module에 __pycache__ 생김 
# 속도향상을 위해 내부적으로 생김 --> 신경안써도 됨

#print("mod01_use의 __name__ = {0}".format(__name__))

# __name__ : 모듈이름  / 단, 실행모듈일 경우 __name__ = "__main__" 
















