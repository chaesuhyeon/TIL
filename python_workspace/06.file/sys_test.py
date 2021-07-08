import sys # sys모드 쓰겠다~
args = sys.argv[1:] # sys모듈의 argv는 명령창에서 입력한 인수를 의미    / 1부터 입력 받은 만큼
for i in args:
    print(i)

# 실행하는 방법 --> 밑에 터미널에 python sys_test.py 김지수 26 간호   라고 적기 (python sys_test.py 입력한 다음에 정보 적으면 됨)