# 사용자 정의 Exception
# 1. 사용자정의 Exception 클래스를 정의 -> Exception 상속 받아서 정의
# 2. 원하는 조건이 만족됐을때 Exception발생(raise 사용자정의 Exception())
# 3. 사용코드에서 try ~ except ~ finally로 Exception 처리

# 1
class UserException(Exception):
    def __init__(self):
        self.message = "사용자 정의 예외입니다."
    def get_message(self):
        return self.message
    def __str__(self):
        return self.message 


#2
def exception_f(nick):
    if nick == "바보":
        raise UserException()
    print(nick)  # 오류가 아니면 nick 출력

#3
exception_f("천사") # exception 발생 x
#exception_f("바보") # exception 발생

try :
    exception_f("천사")
    exception_f("바보")
except UserException as e:
    print(e.get_message())
    print(e) # __str__ 호출


