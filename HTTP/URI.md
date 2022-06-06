# URI

- URI(Uniform Resource Identifier)
  - Uniform : 리소스 식별하는 통일된 방식
  - Resource : 자원, URI로 식별할 수 있는 모든 것(제한 x)
  - Identifier : 다른 항목과 구분하는데 필요한 정보
  - URI는 로케이터(locator), 이름(name) 또는 둘다 추가로 분류될 수 있다.
    - URL - locator : 리소스가 있는 위치를 지정
    - URN - name : 리소스에 이름을 부여
  - URI 안에 URL(Resource Locator)과 URN(Resource Name)이 있음

---

## URL 분석

`https://www.google.com:433/search?q=hello&hl=ko`

- scheme://[userinfo@]host:[:port][/path][?query][#fragment]
  
  - **scheme**
    
    - 주로 프로토콜 사용
    - 프로토콜 : 어떤 방식으로 자원에 접근할 것인가 하는 약속 규칙 / http, https, ftp 등등
    - http : 80
    - https : 433 (http에 보안 추가 )
    - 포트는 생략 가능
  
  - **userinfo**
    
    - 거의 안씀
    - URL에 사용자 정보를 포함해서 인증
  
  - **host**
    
    - 호스트명
    - 도메인명 또는 IP 주소를 직접 사용 가능
  
  - **path**
    
    - 리소스 경로(path), 계층적 구조
  
  - **query**
    
    - key = value 형태
    - ?로 시작. &로 추가 가능
    - ?keyA=value&keyB=valueB
    - query parameter, query string 등으로 불림
    - 문자 형태
  
  - **fragment**
    
    - 잘 사용하지 않음
    - html 내부 북마크 등에 사용
    - 서버에 전송하는 정보 x

- 프로토콜 : https

- 호스트명 : [www.google.com](http://www.google.com)

- 포트번호 : 443

- 패스 : /search

- 쿼리 파라미터 : q=hello&hl=ko
