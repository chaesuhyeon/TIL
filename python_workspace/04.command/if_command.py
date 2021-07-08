#if 조건식 :
#    참일때 실행문
#else :
#    거짓일때 실행문 

#if 조건식1 :
#    조건식1 참일때 실행문
#elif 조건식2 :
#    조건식2가 참일때 실행문
#else:
#    조건식1, 조건식2 거짓일때 실행문

month = 3
print(month)

if month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12 :
    print("{0}월은 31일 까지 있습니다.".format(month))
elif month == 2:
    print("{0}월은 28일 까지 있습니다.".format(month))
elif month == 4 or month == 6 or month == 9 or month == 11 :
    print("{0}월은 30일 까지 있습니다.".format(month))
else:
    ("{0}월은 존재하지 않습니다.".format(month))

# month를 input()으로 입력받기. * 이때 주의해야할 것은 input으로 입력받으면 숫자로 입력받아도 '문자'로 인식하기 때문에 반드시 
#int함수를 써줘서 숫자로 바꿔주기

month = int(input("월을 입력하세요 : ")) # 이때 int를 안적어주면 오류남
if month == 1 or month == 3 or month == 5 or month == 7 or month == 8 or month == 10 or month == 12 :
    print("{0}월은 31일 까지 있습니다.".format(month))
elif month == 2:
    print("{0}월은 28일 까지 있습니다.".format(month))
elif month == 4 or month == 6 or month == 9 or month == 11 :
    print("{0}월은 30일 까지 있습니다.".format(month))
else:
    ("{0}월은 존재하지 않습니다.".format(month))

