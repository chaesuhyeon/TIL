# 키보드 입력 -> 파일쓰기

# 파일읽기 -> 화면출력

# 파일읽기 -> 파일쓰기 (file copy)

# open으로 열고 , close로 닫기
# f = open (" 경로/파일이름.파일형식" or 파일 이름   " ,  '모드')
# f.close()

#모드 r : read only / /     w : 내용 쓰기   / / a : 기존에 있는 내용 유지되고 내용 추가하기

f = open("C:/Users/ddd81/Desktop/python_workspace/06.file/test.txt", 'w')
# 경로복사할때 \ 를 /로 바꿔주고, 뒤에 파일명과 파일형식 꼭 작성하기
# 모드도 w, r, a 중에 작성하기

#data = input("키보드 입력 : ")
#f.write(data)
#f.close()            # 하나만 입력하기
# 밑 터미널에 cat .\test.txt 쳐서 내용 확인할 수 있음

# w모드는 파일을 새롭게 만들 수 있고, 내용이 있으면 덮어서 새롭게 업데이트 시킴
# 그게아니라 기존 내용에 추가만 하고 싶으면 a모드(append) 사용하면 됨

f = open("test.txt", 'w') # 경로를 주지 않고 파일명.파일형식만 적을 경우 파이썬이 실행되는 현재위치에 저장됨
while True:
    data = input("키보드 입력 : ")
    if not data : break
    f.write(data+"\n")
f.close()    


#f = open("test.txt", 'a')             # 모드 a : 내용들이 계속해서 새롭게 추가
#while True:
#    data = input("키보드 입력 : ")
#    if not data : break
#    f.write(data+"\n")
#f.close()