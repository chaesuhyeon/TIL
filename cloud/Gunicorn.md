# Gunicorn 

#### local gunicorn wsgi 이용 테스트

- cd C:\Users\Chae\Desktop\TIL\docker_workspace\Dockerfile\django



##### gunicorn install 

- - pip install gunicorn
  - pip freeze > requirements.txt
  - type requirements.txt  -->  gunicorn 설치되었는지 확인



##### gunicorn wsgi이용 pybo service

- settings.py - WSGI_APPLICATION 값 복사 Dokerfile 수정
- - CMD [ "gunicorn", "--bind", "0.0.0.0:8000", "config.wsgi:application" ]
- - (gunicorn --bind 0:8000 config.wsgi:application)
  - docker image build -t web_gunicorn:v1 .
  - docker run -p 8000:8000 --name pybo_gunicorn web_gunicorn:v1

