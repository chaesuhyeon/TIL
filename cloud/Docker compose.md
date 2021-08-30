# Docker compose

- cd C:\Users\Chae\Desktop\TIL\docker_workspace\docker_compose
- - dockerfile이 있는 위치
- docker-compose up(없을 경우 install )
- 



- Deployment (배포 기능)
- Service (expose 기능)
- - cluster IP : 내부에서만 노출
  - EXTERNAL IP : 외부로 노출
  - LoadBalancer : 외부로 노출
  - - LoadBalancer인 경우 1개라도 running 상태일 경우 그 곳으로 연결?해줌
  - Node Port : 외부로 노출
