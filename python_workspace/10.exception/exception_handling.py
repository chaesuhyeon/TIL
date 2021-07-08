# 예외처리
# try:
#    예외발생 가능한 실행문
# except:
#    예외발생 실행문
# else:
#    예외발생 안했을 때 실행문
# finally:
#    예외발생과 무관하게 무조건 실행되는 실행문

# Multi 예외처리
# try:
#    예외발생 가능 실행문1
# try:
#    예외발생 가능 실행문2
# except 예외타입 as 오류메세지 변수 :
#    실행문 1 예외발생시 실행문
# except 예외타입 as 오류메세지 변수 :
#    실행문 2 예외발생시 실행문
#

try:
    datas = [1,2,3]
    print(datas[3]) # IndexError  발생되게 만듦
    datas[1]/0 # ZeroDivisionError 발생되게 만듦 (0으로 나누는 것에 대한 오류 ,0으로 나누는것은 안되니까)

except IndexError as e:
    print(e)

except ZeroDivisionError as e:
    print(e)

else:
    print("예외 없이 실행")

finally:
    print("무조건 실행되는 실행문")


