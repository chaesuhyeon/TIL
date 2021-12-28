## 자바의 특징

#### 1. 운영체제에 독립적이다.

#### 2. 객체지향언어이다.

#### 3. 비교적 배우기 쉽다

#### 4. 자동 메모리 관리

#### 5. 네트워크와 분산처리를 지원한다.

#### 6. 멀티쓰레드를 지원한다.

#### 7. 동적 로딩(Dynamic Loading)을 지원한다.



---

## 자바 프로그램 작성 (인텔리제이에서 ctrl + shift + F10으로 실행)

```java
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, world"); // Hello, world 출력
    }
}
```

- 실행할 때 : Hello.java 작성 -> javac.exe(자바컴파일러) -> Hello.class 생성 -> java.exe 실행 -> "Hello, world" 출력

- 자바에서 모든 코드는 반드시 클래스 안에 존재해야하며, 서로 관련된 코드들을 그룹으로 나누어 별도의 클래스를 구성



> 자바 클래스를 작성하는 방법

```java
class 클래스 이름 {
    public static void main(String[] args) // main 매서드의 선언부 , String args[] 도 가능
    {
        //실행시킬 문장 적기
    }
}
```

- public static void main : main 메서드의 선언부인데, 프로그램을 실행할 때 java.exe에 의해 호출될 수 있도록 해줌
- 모든 클래스가 main 메서드를 가지고 있어야 하는 것은 아니지만, 하나의 Java 애플리케이션에는 main메서드를 포함한 클래스가 반드시 하나는 있어야함



---

## 자주 발생하는 에러

#### 1. cannot find symbol 또는 cannot resolve symbol

: 지정된 변수나 메서드를 찾을 수 없다는 뜻으로 선언되지 않은 변수나 메서드를 사용하거나, 변수 또는 메서드의 이름을 잘못 사용한 경우에 발생

-> 자바는 대소문자를 구분하기 때문에 철자 뿐만 아니라 대소문자의 일치여부도 꼼꼼하게 확인할 것



#### 2. ';' expected

: 세미콜론이 필요한 곳에 없다는 뜻. 자바의 모든 문장 끝에는 세미콜론을 붙여줘야함



#### 3. Exception in thread "main" java.lang.NoSuchMethodError: main

: 'main'메서드를 찾을 수 없다는 뜻. 실제로 클래스 내에 main 메서드가 존재하지 않거나 메서드 선언부 

public static void main(String[] args)에 오타가 존재하는 경우에 발생

-> main  메서드가 클래스에 정의도어 있는지 확인하고 정의되어 있다면 오타를 확인할 것



#### 4. Exception in thread "main"  java.lang.NoClassDefFoundError: Hello

"Hello" 라는 클래스를 찾을 수 없다는 뜻. 클래스의 철자, 특히 대소문자를 확인해보고 이상이 없으면 클래스 파일 (*.class)이 생성되었는지 확인할 것

-> 클래스 파일이 존재하는데도 메세지가 반복해서 나타난다면 classpath의 설정이 바르게 되었는지 확인



##### 5. illegal start of expression

: 문장, 수식의 앞부분이 문법에 맞지 않는다는 뜻. 



#### 6. class, interface, or enum expected

: 키워드 class나 interface 또는 enum이 없다라는 뜻인데 보통 괄호 {}의 개수가 일치하지 않는 경우에 발생



---

Java의 정석 기초편 | 남궁성 | 도우출판
