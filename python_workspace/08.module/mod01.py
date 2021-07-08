# 모듈 : 독립적인 기능을 위한 변수, 함수, 클래스를 모아 놓은 파일
# 다른 모듈 기능 사용 : import 모듈이름                      -> 모듈이름.함수이름() 으로 사용
#                      form 모듈이름 import 함수리스트      -> 함수이름() 으로 사용

def add(a,b):
    return a+b

def sub(a,b):
    return a-b 

# 더하기와 빼기 기능을 갖는 mod01.py라는 모듈을 갖는다.

#mod01_use.py 에 가서 mod01.py 모듈을 사용해보자

print(__name__)  # : __main__ 이라고 나옴 
# __name__ : 해당되는 모듈의 이름을 나오게 해라~ 인데 main이 나옴
# 그 모듈이 실행되는 파일이면 name에 main이 나온다.
# python .\mod01_use.py 라고 터미널에 치면 : mod01이 나옴
# 여기서는 mod_use가 main이고 실행모듈 이름이 mod01 이라는 말 

#print(add(10,20))
#print(sub(10,20))

#print("mod01 __name__ = {0}".format(__name__))
if __name__ == "__main__":
    print(add(10,20))
    print(sub(10,20))
                            




