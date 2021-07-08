import mod02

print("모듈 상수 사용하기 - 원주욜 : {0}".format(mod02.PI))

circle_area = mod02.Math()  # object 생성
print("모듈 클래스 사용하기 - 반지름 5인 원의 면적 : {0}".format(circle_area.solv(5)))
#print("모듈 클래스 사용하기 - 반지름 5인 원의 면적 : {0}".format(mod02.Math().solv(5))) 

print("모듈 함수 사용하기 - 10 + 20 = {0}".format(mod02.add(10,20)))