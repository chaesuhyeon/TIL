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
- docker image prune -a : 사용하고 있지 않은 이미지 모두 삭제 
- docker image rm mariadb:latest  --> mariadb 이미지 삭제
- - docker system prune  --> rm 한다음에 system prune 해주는게 좋음 . 사용하지 않는 캐시 제거 해줌
  - 컨테이너 삭제할 때는 rm  // 이미지 삭제할때는 image 생략하고 rmi 써줌
  - docker image rm  이미지이름 // docker rmi 이미지이름 // docker rm 컨테이너이름



> ##### 재시작할 때  

- docker ps : 상태 확인 
- docker start container이름 | ID  : 컨테이너 이름이나 컨테이너 ID를 줘서 시작시키기
- docker ps : UP 상태인지 확인
- docker exec -it ubuntu bin/bash  
- - ubuntu  컨테이너에 bin/bash 명령어 실행 
- - / exec - start 상태 아니면 실행 안됨
  - -it 옵션으로 상호작용하기 



---

> nginx 웹서버 설치

- docker images   : 현재 nginx 이미지 없음
- docker run --name nginx -d -p 80:80 nginx:latest   --> docker pull nginx 안해도 로컬에 없으면 디폴트로 설정되어 있는 docker hub에서 가져와서 이미지 다운
- - -d :데모 -->  백그라운드로 돌아가게   / -p --> 포트 지정 
- docker images  --> 이미지에 nginx 나옴
- docker ps  -->  돌아가고 있는 서버 확인 
- docker exec -it nginx bin/bash  --> nginx 서버 root로 상호작용하기



>nginx 서버 구조 보기

- docker run --name nginx -d -p 80:80 nginx:latest
- - run : 컨테이너 생성하고 시작하는 명령어  
  - -d : 백그라운드로 실행 시키기 , -d안쓰면 command line 안떨어짐 
  - -p : 80포트로 생성 , http://localhost
  - nginx:latest   : 최신버전으로 
- docker exec -it nginx bin/bash
- cat etc/nginx
- cat etc/nginx/conf.d
- cat etc/nginx/conf.d/default.conf
- ls -l /usr/share/nginx/html
- cat /usr/share/nginx/html/index.html

---



- > nginx -  index.html 커스텀

  - vs code로 index.html 새로 작성

  - cd C:\Users\Chae\Desktop\TIL\docker_workspace\nginx
  - mkdir backup
  - cd backup
  - docker container cp  nginx:/usr/share/nginx/html/index.html .
  - - container의 index.html 파일을 host에 backup 및 확인 작업
  - - nginx:/usr/share/nginx/html/에 있는 index.html파일을 현재 디렉토리(.)에 cp(카피)해라
  - type index.html
  - - host에서 작성한 index.html container에 copy
  - cd ..   --> C:\Users\Chae\Desktop\TIL\docker_workspace\nginx로 이동 (vscode로 작성한 index.html 파일이 있는 위치)
  - docker cp ./index.html nginx:/usr/share/nginx/html/    --> 현재 디렉토리에 있는 index.html(내가 직접 작성한 파일)을  nginx:/usr/share/nginx/html/에 덮어씌우기
  - docker exec -it nginx bin/bash : 상호작용해서 들어가기
  - cat /usr/share/nginx/html/index.html  ->  index.html 파일이 내가 작성한 파일로 내용이 바뀌었는지 확인 해보기  --> http://localhost로 들어가보기
  - docker diff nginx :  기존과 뭐가 달라졌는지 확인할 수 있음 , 변경된 container image build .
  - docker commit nginx ddd8177/mynginx:v1   --> 현재 container  image로 저장 . 커밋
  - - nginx : 컨테이너 이름
    - ddd8177 : dockerhub id
    - mynginx:vi  -->  image명:tag(버전
    - docker hub 레파지토리에 공유할 경우에 docker commit nginx <dockerhub 아이디>/image명:tag(버전)
  - docker images --> 결과보면 REPOSITORY부분에 ddd8177/mynginx 생성된거 확인
  - dockerhub publish - 이미지 공유 :  docker image push ddd8177/mynginx:v1
  - - docker hub  - sign in 상태여야함 (login 상태)

  

> 카피한거 복귀

- C:\Users\Chae\Desktop\TIL\docker_workspace\nginx>  현재위치가  이 디렉토리인지 확인
- docker cp ./backup/index.html nginx:/usr/share/nginx/html/



> 내가 생성한 이미지 활용

- docker run --name mynginx -d -p 8000:80 ddd8177/mynginx:v1
- - 8000포트로  --> http://localhost:8000
- docker images 해서 이미지 생성되었는지 확인
- 생성된 것 확인했으면 , localhost:80 하고 localhost:8000하고 확인해보기

---

- image pull : docker image pull ddd8177/mynginx:v1

- 기존 이미지 삭제 : docker rmi ddd8177/mynginx:v1
- mynginx server container 실행 : docker run --name mynginx -d -p 8000:80 ddd8177/mynginx:v1

---

> 도커 파일

- vs code로 Dokerfile파일 생성(확장자 없이)

- 서비스 할 index.html 생성

- ```dockerfile
  # container의 기본 이미지  :ubuntu
  FROM ubuntu:latest
  
  # 실행중인 container에 nginx 서버 설치
  RUN apt-get update && apt-get install -y -q nginx
  
  # host의 index.html container에 copy   --> 같은 위치에 있는(같은 Dockerfile 디렉토리에 있음) index.html 파일을 /var/www/html/ 경로로 복사
  COPY index.html /var/www/html/
  # COPY index.html /usr/share/nginx/html 이 경로 틀림!!!!!!!!! 
  # ubuntu에서의 nginx 설치한뒤 한거라 conf의 위치가 달라짐
  
  # nginx server forground로 실행 (exec 형식으로 작성해봄)
  CMD ["nginx", "-g" , "daemon off;"]
  ```

- cd C:\Users\Chae\Desktop\TIL\docker_workspace\Dockerfile 

- - Dockerfile이 있는 디렉토리 위치로 이동 

- docker image build -t mywebapp:v1 .

- - ```
    docker image build -t 이미지명:태그 Dockerfile위치(.이면 현재 있는 디렉토리에 파일이 존재) 
    ```

- docker images   --> mywebapp 이미지 생성되었는지 확인해보기

- docker ps -->  포트번호 충돌 안나게 돌아가고 있는 컨테이너 PORTS 확인

- docker run -d -p 9000:80 --name webpp mywebapp:v1

- - webpp -> container 이름  // mywebapp : 이미지 이름 // vi :버전이름
  - http://localhost:9000

- docker ps  --> 컨테이너 돌아가는지 확인 (UP상태인지)



- >기본이미지 nginx

- ```dockerfile
  # container의 기본 이미지  :nginx
  FROM nginx:latest
  
  # nginx 설치할 필요 x
  
  # host의 index.html container에 copy   --> 같은 위치에 있는(같은 Dockerfile 디렉토리에 있음) index.html 파일을 /usr/share/nginx/html 경로로 복사
  COPY index.html /usr/share/nginx/html
  
  # nginx server forground로 실행 (exec 형식으로 작성해봄)
  CMD ["nginx", "-g" , "daemon off;"]
  ```

-  cd C:\Users\Chae\Desktop\TIL\docker_workspace\Dockerfile 

- docker image build -t mywebapp:v2 .

- docker images : 이미지 생성됐는지 확인

- docker run --name webapp2 -d -p 8888:80 mywebapp:v2 

- - 버전을 (태그를) v2로 해서 생성

- docker ps

- - webapp2 컨테이너가 돌아가고 있는지 확인



> Dockerfile - python

- cd C:\Users\Chae\Desktop\TIL\Django\django_workspace\venv\pybo\Scripts
- activate
- cd C:\Users\Chae\Desktop\TIL\docker_workspace\Dockerfile\django

- pip freeze > requirements.txt

- ```dockerfile
  # 파이썬 3.X 버전 / base image python3
  FROM python:3
  
  # pybo : 앱 이름  // project copy할 directory 생성
  WORKDIR /usr/src/pybo
  
  # install할 package 복사
  COPY requirements.txt ./
  
  # pip install
  RUN pip install --no-cache-dir -r requirements.txt
  
  # 로컬에 있는 파일들 (.) 을 가져다가 해당되는 working directiory에 copy
  # project source copy : host project root에서 container의 /usr/src/pybo에 복사
  COPY . .
  
  EXPOSE 8000  # 포트 8000
  
  # python embeded server 실행 , 인바운드 : 어디서나 요청가능하도록 8000포트로
  CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
  ```

- docker image build -t pybo:v1 .

- docker run --name pybo -p 8000:8000 pybo:v1

- docker ps

- http://localhost:8000

---

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

> 리눅스 쉘 연습

- vim editer 이용
