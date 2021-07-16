## JavaScript

- 첫줄에 use strict를 써주면 문법을 엄격하게 해서 에러를 잘 잡아준다.
- 변수가 존재하며, 변수가 존재하면 타입과 변수명도 존재한다는 말
- / 있으면 절대경로, /없으면 상대경로
- script를 쓸때 defer 속성을 명시해 주는 것이 좋다. -> 파일을 위에서 아래로 읽는데 로드되는 순서를 보장해준다.
- script는 head, body 어디든지 위치 가능하며, 외부에서 불러서 참조할 수도 있다. --> `<script src="myscript.js"></script>`
- 객체를 생성하려면 new를 써주면 된다.
- 상속하려면 :(콜론)을 써주면 된다. (파이썬에선 괄호안에 써서 상속받음)
- javascript는 파이썬 처럼 인던트가 없으므로 { }로 지정해줘야한다.
- document.write(1+1) : 연산한 다음 문서에 적어라~
- 주석은 `//`  라고 쓰거나 여러줄을 할 때는 `/* */`
- 두 단어 이상 이어지는건 `-`, `_`, `upper camel case`,`lower camel case` 로 이어서 작성 
- ex ) upper camel case  : FirstName  //  lower camel case : firstName 
- class 이름의 첫글자는 대문자로!
- 변수, 함수의 이름은 lower camel case로 !



> ### node
>
> - 브라우저 없이 실행가능하게 해준다
> - console.log("hello javascript") 써주고 밑에 터미널 창에서 실행해주면됨



- 윈도우 객체는 생략 가능 
- 원래 window.document.write( ) 인데 document.write( )라고 window생략해서 사용
- confirm : 확인,취소 버튼 같이 나옴
- alert: 팝업창 띄워줌(모달창)



> ### 변수
>
> -  var , let으로 지정 가능. --> let을 쓰는 것을 추천 (var은 구버전)
> - undefined : 변수가 선언만 되고 값 할당이 안된경우. 디버깅 할때 변수에 값이 제대로 할당됐는지 확인하기

