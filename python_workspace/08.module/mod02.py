PI = 3.141592 # 상수(값이 변하지x) : 모두 대문자, 두단어 이상 이어지는 경우 _로 이어서 표시
              # 표시 예 ) TAX_RATE 
              # PI 는 global variable 

class Math:
    def solv(self, r):                      # member method
        return PI * (r**2)

def add(a,b):                #함수 (class 소속 x)
    return a + b     
         

