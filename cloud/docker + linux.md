# Docker

도커 설치  :  docker.com --> doc -> 다운로드 -> wsl 2backend (윈도우 프로인 경우는 확인 잘하기)

tag : 버전 

> ##### cmd
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



> ##### 재시작할 때  

- docker ps : 상태 확인 
- docker start container이름 | ID  : 컨테이너 이름이나 컨테이너 ID를 줘서 시작시키기
- docker ps : UP 상태인지 확인
- docker exec -it ubuntu bin/bash  
- - ubuntu  컨테이너에 bin/bash 명령어 실행 
- - / exec - start 상태 아니면 실행 안됨
  - -it 옵션으로 상호작용하기 

---

# Linux

- d :디렉토리
- d 없으면 일반 파일
- l : 링크 
- apt-get update 
- apt-get install vim  : vim 에디터 설치



> ##### vim 에디터 사용법 (중요한 것만)

- vi new.txt : new.txt 파일 생성 -> 에디터로 들어가짐 --> a 나 i를 통해서 수정 가능 
- `:q!` : 저장하지 않고 프롬프트로 나가기  ( 데이터 입력 후 esc 누르는 것 잊지말기)
- `:wq` :저장하고 나가기 등등

---



> ##### 메뉴얼 사용

- apt-get install man-db : 메뉴얼 설치
- unminimize  -y : minimize 풀기
- man rm : rm의 메뉴얼 보기 

- - 옵션 more : space 눌러서 보기 
  - 나갈 땐 ctrl + c

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

> ##### 네트워크 정보

- apt-get install net-tools
- ifconfig   : 도커에 설치된 네크워크 정보
- man netstat :  네트워크 상태 정보를 알 수 있는 netstat의  메뉴얼
- -  옵션 more : space 눌러서 보기 
  - 나갈 땐 ctrl + c

---

> #####  파일 묶기

- Tar , gzip 많이 사용 
- Tar 
- - tar -cvf etc.tar /etc  : etc 폴더 압축해라
  - mkdir test : test 디렉토리 생성
  - cd test : text 디렉토리로 이동 
  - tar -xvf etc.tar  : test 디렉토리에 etc.tar 압축파일 풀기 
  - ls /etc : etc 디렉토리에 있는 것들
  - ls ./etc : test 디렉토리에 있는 압축푼 etc에 있는 것들 확인해보기 . 위에 etc와 파일 내용 같음

---

> ##### 파일 위치 검색 : find

- find 경로 옵션 조건 action

- man find : find 메뉴얼 보기
- - find /etc -name "*.conf"  
  - - /etc 디렉토리 하위에 있으며 확장명이 .conf 파일 검색
  - find /home -name "*.swap" -exec rm { } \;
  - - /home 디렉토리 하위에 있으며 확장명이 *.swap인 파일 삭제 
    - ecec 는 외부 명령어 
    - \;  : 외부명령어의 끝을 나타냄
    - { } find 명령어로 찾은 파일을 나타냄 
    - rm : 삭제하는 명령어



> ##### 파일 위치 검색 : which

- which 실행 파일명
- path 에 설정된 디렉토리와 절대 경로를 포함한 위치 검색



> ##### 파일 위치 검색 : wheris

- whereis 실행파일명
- 실행 파일과 소스 , man 페이지 파일까지 검색



> 파일 허가권

- chmod
- - 파일 허가권을 변경하는 명령어
  - root 사용자 또는 해당 파일의 소유자만 실행 가능
  - chmod777 mydata.txt. : 모든 사용자가 mydata.txt 파일은 읽고 쓰고 실행할 수 있음



> 파일 소유권(소유자)변경

- chown
- - 파일 소유권을 변경하는 명령어
  - chown 새사용자명(.새그룹명) 파일명 과 같은 형식으로 사용
  - chown cookuser4 mydata.txt  하면 원래 mydata.txt 소유자는 root 사용자였는데 cookuser4로 바뀜 
  - ls -l  -> -rw-r--r-- 1 `cookuser4` root 0 Aug 19 04:01 mydata.txt

---

> ##### 파이프

-  두 프로그램을 연결하는 연결 통로를 의미     |를 사용 
- ls -l/etc |less



> 필터

- grep, tail, wc, sort, awk, sed 등이 있음
- 보통 파이프와 함께 사용
-  ls -l ./etc | grep profile
  -rw-r--r-- 1 root root     581 Dec  5  2019 profile
  drwxr-xr-x 2 root root    4096 Aug 18 07:46 profile.d



> ##### 리디렉션

- 표준 입출력의 방향을 바꾸는 것
- 표준 입력은 키보드이고 표준 출력은 화면이지만 , 이를 파일로 처리하고 싶을 때 주로 사용
- ls -al ./etc > etc_list.txt    : ./etc 내용을 etc_list.txt에 옮겨적음
- cat etc_list.txt : etc_list.txt 파일 내용을 화면에 출력

---

> ##### 사용자와 그룹

- adduser : 사용자 생성 
- - adduser cookuser1 : cookuser1 사용자 생성
  - cat etc/passwd : 유저 생성 됐는지 확인 (tail /etc/passwd)
  - adduser --uid 1002 cookuser2  : userid 줘서 사용자 생성
  - userdel cookuser1 : 사용자 삭제 



- groupadd : 그룹 생성
- - groupadd ubuntuGroup   : ubuntuGroup 이라는 그룹 생성
  - cat /etc/group :  생성한 group 확인  (tail /etc/group) 
  - adduser  --uid 1003 --gid 1001 cookuser3     : uid , gid 줘서 사용자 생성

---

> ##### link 링크

- 하드링크, 심벌릭 링크
- 하드링크  : inode값이 카피가 돼서 원본파일을 참조하는데 전혀 문제 x
- 심벌릭 링크 : 새로운 inode 값이 생성이 되면서 원본 파일 포인터를 참조
- - vi originalfile
- - ls -il
  - ln originalfile hardlink
  - ln -s originalfile softlink
  - ls -il  --> hardlink와 originalfile은 inode 값이 같음.  but softlink 는 inode값 다름
  - cat hardlink 
  - cat softlink    --> originalfile 내용 나옴
  - mkdir link : link 라는 디렉토리 생성
  - mv originalfile ./link : link디렉토리로 오리지널 파일 옮김
  - ls -il --> softlink가 참조하는 origina
  - lfile 의 포인터가 변경됨. 참조할 파일 없어짐 . 하드링크는 상관 x
  - cat softlink  --> cat: softlink: No such file or directory  : 참조할 파일이 없다고 나옴
  - cat hardlink --> original file (파일 내용 나옴)
  - mv ./link/originalfile .  --> link디렉토리에 있는 파일을 현재 디렉토리로 다시 옮김
  - ls -il --> softlink 보면 다시 활성화 됨

---

