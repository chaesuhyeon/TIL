# HTML / CSS

> ## Mark-Up 언어

- root element가 한개는 있어야 함(전체를 감싸는)
- <시작>내용<종료> : 시작과 종료가 매핑되어야 한다.
- <시작 속성="값" or  속성 = "값"... > : 속성은 여러개 올 수 있다.
- 중첩은 허용 안된다. 

> ```html
> <a>
>     <b>
> </a>
>     </b>
> <!--중첩은 허용되지 않는다.-->
> ```

- 대소문자 구분한다. `<a> <A>` 안됨  `<a></a>`됨 



> ## Mark-Up 언어 구성요소

- element : <시작>내용<종료>
- 속성 : <시작 attribute="value" | "value"... >         | = or
- entity  : 해당되는 변수  -> 2<3하면 <를 html 언어로 인식. 따라서 `&lt` (~보다 작다) , `&gt` (~보다 크다) , `&nbsp;` (공백 문자)

---

- document 타입 

  `<DOCTYPE html>`  : html5로 해석해라~

- ol : order the list : 순서가 있다

- `<p></p>` : 문단으로 해석해라~

- 나랑 다른 element와의 간격을 나타낼 때 margin

- meta : 정보 imformation (참조 하라고 써서 안닫는 경우 많음)

- `<a></a>` : 링크

```html
<DOCTYPE html>
<html>
     
<head> <title>창제목/문서제목</title>
    <meta>
</head>
    
    <body>
        
    </body>
    
</html>
```



- `<head> <title>창제목/문서제목`
- `<script>` : javascript
- `<link>`: 외부 css 참조
- `<ll>`: 리스트
- `<img>`: 이미지
- `<style>`: 내부 css선언
- `<br>`: 줄바꿈
- `<h1>`~`<h6>`: 글자 크기
- `<input>`: 입력 화면 제공
- `<input type = text, password, radio, checkbox, button name="변수명" value="기본값">`   : type에서 저기중에서 1개 사용
- `<form>`: 입력화면 제공
- `<form action = "target" ,method = "post">`
- `<text row='' column = ''>`
- `<strong>`: 굵은 글자
- `<u>`: 밑줄(언더라인)
- `<span>`: inline 구분
- `<p>`: 문단 나누기
- `<p id = "p1" class = "c1"> `      : 불러낼때 id는 #으로 class는 . 으로 부름
- `<p id = "p2" class = "c2">`      : ex ) #p2        
- `<p id = "p3" class = "c3">`      : ex ) .c3



> ### form
>
> - value = 디폴트 값을 주는 것
>
> - submit : event 발생되면서 form 에 적혀있는 action까지 실행(request 들어오는 이벤트, 액션까지 처리)
>
> - button : 눌러도 아무런 액션 x  -> 버튼은 따로 옆에 onclick ="링크"



- 두 단어 이상 이으는것 _(언더바)아님 !!! -(하이픈)으로 연결
- border : 라인을 그려라~
- id : 식별자 -> unique하게 할때 주기 . 여러개를 같은 id를 준다고 해서 오류가 나지는 않지만 나중을 위해서라도 unique하게 주기
- class : 같은 class안의 instance로 인식. -> 공통적으로 같은 속성을 적용해야할때 사용
- 코드는 위에서 아래로 읽히는데, 어떤 속성이 먼저 나오고 뒤에 속성이 또나오면 뒤의 속성이 적용(같은 selector 일때)
- input[type="text"] : input에서 type이 text인 것만 적용해라~
- `<link rel ="stylesheet" href="./css/style.css"></link>` 와 같이 작성하여 모든 html에 `<style> </style>`하지 말고 재사용성으로 링크 걸어서 쓰는게 훨 낫다
- 컨텐츠와 컨텐츠의 간격 : margin
- 보더와 컨텐츠 사이의 간격 : 패딩



> ## 반응형 웹

- `<meta name="viewport" content="device-width, initial-scale=1.0">`   같이 위에서 meta를 선언.  -> 반응형 웹 하겠다~~ 선언
- 반응형 웹이란 ? 디바이스의 크기에 맞게 자동으로 크기를 맞춰주는 것
- @media(max-width:800px) -> 800픽셀 이하로 내려가면 속성들을 적용
- ex ) {border-right : none;} : 오른쪽에 있는 선 없애라
- 상세조정은 media 쿼리로 조정
- 이미지 , 비디오 파일 같은거 안깨지려면 viewport 해줘야함