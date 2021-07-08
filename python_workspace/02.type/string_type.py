print("hello")
print('hello')
print("\'Life is too short\' \n You need python")
print("""\'Life is too short\' 
You need python""")

head = "python"
tail = "3.9"
print(head + tail)
pythonversion = head + tail
print(pythonversion)
print(len(pythonversion))

#인덱스
a = "Life"
a[3] # e 왜냐하면 0,1,2,3 인덱스가 이렇게 시작해서 3번째인 e가 출력
print(pythonversion[0]) #p
print(pythonversion[8]) #9
print(pythonversion[-1]) #9 -1은 맨뒤부터 센다 ( 마이너스는 뒤부터 셈)

a[0:4] # 0부터 4 앞까지, 0 1 2 3  -> life
a[0:3] # lif

a[ : 3] # a[0 : 3] 과 같음 
a[0 : ] # a[0 : 끝까지] 와 같음
a[ : ] # a[처음 : 끝까지] 와 같음

#string format
print("I eat %d apples" %3 ) # I eat 3 apples
#퍼센트 뒤에 숫자가 오는데 그게 3이다.

number = 3
print("I eat %d apples" %number ) # I eat 3 apples

#print("I eat %d apples" %'3' ) 
# 오류남 : d에는 숫자만 와야함 , 여기선 3이 문자이므로 오류
# TypeError: %d format: a number is required, not str

print("I eat %s apples" %"three" ) # I eat three apples
print("I eat %s apples" %3 ) # I eat 3 apples
# d 뒤에 문자가 오면 오류가 나지만 s 뒤에는 숫자가오든 문자가 오든 오류 없이 다 가능

# 여러개 넣고 싶을 때
day = "three"
print("I eat %d apples. so i was sick %s days" %(3,day) )
# I eat 3 apples. so i was sick three days

print("%10s" % 'hi') # 10자리수라고 자릿수 지정 :         hi ( hi앞에 공백존재, 10자리수 채워야하므로)
print("%10.4s" % '3.456789')  # 3.45
print("%10.4s" % '32.456789') # 32.4

print("I ate {0} apples . so I was sick for {1} days".format(number,day))
# I ate 3 apples . so I was sick for three days
# {0} 에는 number , {1} 에는 day 할당

print("I ate {number} apples . so I was sick for {day} days".format(number=3,day="three"))
# I ate 3 apples . so I was sick for three days (위에랑 같은 뜻)

#위치 알려주기 (문자열)
a = "python is the best choice"
print(a.find('b')) # 14
print(a.find('k')) #-1 (존재하지 않는다.)

print("pythonversion 2 ?",pythonversion.find('2')) # pythonversion 2 ? -1 (존재하지 x)
print("pythonversion 3 ?",pythonversion.find('3')) # pythonversion 3 ? 6 (6번째에 존재)

print("     space     ".strip()) #space 양쪽 공백 삭제 strip()


















