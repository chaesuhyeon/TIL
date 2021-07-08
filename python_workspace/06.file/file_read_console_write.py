# 파일읽기 - 화면출력
#f = open("test.txt", 'r') # 읽기모드 
#while True:
#    data = f.readline()  # 한줄씩 읽어들여라
#    if not data : break  # 데이터가 없으면 break로 빠져나가라
#    print(data)  # 데이터가 있으면 출력해라
#f.close()


f = open("test.txt",'r')
lines = f.readlines()
for line in lines:
    print(line)
f.close()