# container의 기본 이미지  :nginx
FROM nginx:latest

# host의 index.html container에 copy   --> 같은 위치에 있는(같은 Dockerfile 디렉토리에 있음) index.html 파일을 /usr/share/nginx/html 경로로 복사
COPY index.html /usr/share/nginx/html

# nginx server forground로 실행 (exec 형식으로 작성해봄)
CMD ["nginx", "-g" , "daemon off;"]