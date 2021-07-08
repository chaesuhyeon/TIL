# while 무한루프 돌릴때 주로사용
# for 루프 반복횟수 정해져 있을때 주로 사용

#초기식
#while 조건식:
#    참일때 실행문     (증감식 위치랑 위아래로 바뀌어도 상관없음)
#    증감식

#무한루프
#while True:
#    무한루프 실행문
#    if 종료 조건식:
#        break;(무한루프라서 루프 빠져나가게)

number = 1
while number < 11 :
    print(number) #참일때 실행문
    number = number + 1 # number += 1 이라고 해도 같은말

#무한루프 - break; 명령문 벗어나기
while True:
    money = int(input("돈을 넣어주세요:"))
    if money < 0 :
        break;
    print("커피가 나왔습니다.") 

#for 변수 in list(tuple, string):
#    참일때 루프 실행문

#for 변수 in range(minnumber, maxnumber) :
#    참일때 루프 실행

num = [1,2,3,4,5,6,7,8,9,10]
for i in num:
    print(i)

for i in range(1,11): # 11까지 x , 11미만 이므로 1~10까지를 말함
    print(i)

for i in range(0,10): # 0~9까지 이므로 0일때 1더해서 1 , ~~~, 9일때 1더해서 10 / 따라서 결과는 1~10으로 나옴 
    print(i+1) 

#continue문  : 아래 실행문을 실행하지 않고 가까운 루프문으로 돌아가기
#1~10 홀수만 출력

for i in range(1,11):
    if i%2 ==0:           # 짝수면 print문 안가고 위로 올라가서 루프문 실행(continue있어서), 홀수면 print문 실행
        continue
    print("홀수 {0}".format(i))

#nested loop
for i in range(2,10):
    for j in range(1,10):
        print(i*j, end=" ")
    print('')                # 구구단 가로로 출력

for i in range(1,10):
    for j in range(2,10):
        print(i*j, end="\t")
    print('')



















