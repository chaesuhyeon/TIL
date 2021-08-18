# Docker

도커 설치  :  docker.com --> doc -> 다운로드 -> wsl 2backend (윈도우 프로인 경우는 확인 잘하기)

tag : 버전 

> cmd
>
> ```cmd
> docker images  --> 현재 있는 이미지 보여줌
> 
> docker run -it --name ubuntu ubuntu:latest /bin/bash 
> # 1. ubuntu 라는 이름의 컨테이너 생성
> # 2. ubuntu:latest : 최신버전의 ubuntu 
> # 3. -it : 상호작용 하겠다는 옵션
> # 4. bin/bash : 리눅스 운영체제 커맨드를 실행하기 위한 스크립트
> 
> ```



- root user인 경우 프롬프트가 #으로 표시 ,  root user가 아니면 $로 표시 

---



# Linux

- d :디렉토리
- d 없으면 일반 파일
- l : 링크 
- apt-get update 
- apt-get install vim  : vim 에디터 설치



> vim 에디터 사용법 (중요한 것만)

- vi new.txt : new.txt 파일 생성 -> 에디터로 들어가짐 --> a 나 i를 통해서 수정 가능 
- `:q!` : 저장하지 않고 프롬프트로 나가기  ( 데이터 입력 후 esc 누르는 것 잊지말기)
- `:wq` :저장하고 나가기 등등

---



> 메뉴얼 사용

- apt-get install man-db : 메뉴얼 설치
- unminimize  -y : minimize 풀기
- man rm : rm의 메뉴얼 보기 
- dpkg -l : 설치된 패키지 확인 

---

- cd ~ : 로그인 한 유저 디렉토리로 이동해라
- rmdir : 디렉토리가 빈 것이 아니면 삭제 안됨. 디렉토리가 비었다면 디렉토리 삭제 가능 (확인해보고 삭제하고 싶은 경우 사용 )
- rm -rf 디렉토리이름 : 디렉토리 내부가 빈게 아니라도 강제로 삭제 가능 (확인하지 않고 삭제하고 싶을 경우 사용 할 것 ) 
- touch text.txt     : text.txt 파일 생성
- cp text.txt text.txt    :  text.txt 를 test.txt로 카피 한 것 
- mkdir mydir  : mydir이라는 디렉토리 생성
- cp text.txt  ./mydir  : text.txt를 ./mydir에 파일 카피
- mv test.txt  ./mydir : test.txt 파일을  ./mydir 로 이동 시킴
- ls ./mydir : mydir 디렉토리 안에 있는 파일 확인 
- cat 파일 이름(text.txt)  : 파일 내용을 화면에 출력

---



> 네트워크 정보

- apt-get install net-tools
- ifconfig   : 도커에 설치된 네크워크 정보