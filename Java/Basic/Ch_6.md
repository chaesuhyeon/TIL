# 객체지향 언어

#### 객체지향언어의 주요 특징

1. 코드의 재사용이 높음
2. 코드의 관리가 용이
3. 신뢰성이 높은 프로그래밍을 가능하게 함 

==> 가장 큰 특징 : `코드의 재사용이 높고 유지보수가 용이하다`



# 클래스와 객체

##### - 클래스 정의 : 객체를 정의해 놓은 것

##### - 클래스의 용도 : 객체를 생성하는데 사용

###### - 객체  : 클래스에 정의된 내용대로 메모리에 생성된 것 

###### - 객체의 정의 : 실제로 존재하는 것. 사물 또는 개념

###### - 객체의 용도 : 객체가 가지고 있는 기능과 속성에 따라 다름



# 객체의 구성요소 - 속성과 기능

- 객체는 속성과 기능 두 종류의 구성요소로 이루어져 있음
- 객체가 가지고 있는 속성과 기능을 그 객체의 맴버(구성원, member)라고 함
- 클래스는 객체를 정의한 것이므로 클래스에서는 객체의 모든 속성과 기능이 정의되어 있음
- 클래스로부터 객체를 생성하면, 클래스에 정의된 속성과 기능을 가진 객체가 만들어지는 것임

```java
속성(property) -> 멤버 변수(variable)
기능(function) -> 메서드(method)

채널 -> int channel
채널 높이기 -> channelUp(){...}
```



# 객체와 인스턴스

##### - 클래스의 인스턴스화 : 클래스로부터 객체를 만드는 과정

##### - 클래스의 인스턴스 : 어떤 클래스로부터 만들어진 객체

###### ex) tv클래스로부터 만들어진 객체를 tv클래스의 인스턴스라고 함 

- 인스턴스와 객체는 결국 같은말이지만 객체는 모든 인스턴스를 대표하는 포괄적인 의미를 가지고 있음 

###### ==>  클래스 → 인스턴스화 → 인스턴스(객체)



# 한 파일에 여러클래스 작성하기

- #### 주의해야할점

  - 소스파일의 이름은 public class 이름과 일치해야함 
  - 소스파일 내에 public class가 없다면 소스파일의 이름은 소스파일 내의 어떤 클래스의 이름으로 해도 상관 없음 
  - 하나의 소스파일에 둘 이상의 public class가 존재하면 안됨 
    - 각 클래스를 별도의 소스파일에 나누던가 둘 중 한 클래스에 public을 붙이지 않아야함
  - 소스파일의 이름은 대소문자를 구분하기 때문에 주의해야함



# 객체의 생성과 사용

```java
클래스명 변수명; // 클래스의 객체를 참조하기 위한 참조변수 선언
변수명 = new 클래스명(); // 클래스의 객체를 생성한 후 , 객체의 주소를 참조변수에 저장

ex)
Tv t; // Tv클래스 타입의 참조변수 t를 선언
t = new Tv(); // Tv인스턴스를 생성한 후 생성된 Tv인스턴스의 주소를 t에 저장
```

```java
class EX6_1 {
    public static void main(String[] args) {
        Tv t;
        t = new Tv();
        t.channel = 7;
        t.channelDown();
        System.out.println("현재 채널은" + t.channel + "입니다.");

    }
}

class Tv {
    // Tv의 속성(멤버변수)
    String color;
    boolean power;
    int channel;

    // Tv의 기능(메서드)
    void power() { power = !power; } // tv를 켜거나 끄는 기능을 하는 메서드
    void channelUp() { ++channel; }
    void channelDown() { --channel; }

}

현재 채널은6입니다.
```

- Tv t : Tv 클래스 타입의 참조 변수 t를 선언 . 메모리에 참조변수 t를 위한 공간이 마련됨 . 아직 인스턴스가 생성되지 않았으므로 이 참조 변수로 할 수 있는 것은 아무것도 없음
- t = new Tv() : 연산자 new에 의해 Tv클래스의 인스턴스가 메모리의 빈 공간에 생성. 이 때 멤버 변수는 각 자료형에 해당하는 기본값으로 초기화됨 
  - 그 다음에는 대입연산자 `=`에 의해서 생성된 객체의 주소값이 참조변수 t에 저장 
-  t.channel = 7 : 참조변수 t에 저장된 주소에 있는 인스턴스 멤버 변수 channel에 7을 저장
  - 인스턴스의 멤버변수(속성)를 사용하려면 `참조변수.멤버변수`와 같이 하면 됨
- t.channelDown() : 참조변수 t가 참조하고 있는 Tv인스턴스의 channelDown메서드를 호출 channelDown메서드는 멤버변수 channel에 저장되어 있는 값을 1 감소시킴



==> `인스턴스는 참조변수를 통해서만 다룰 수 있으며, 참조변수의 타입은 인스턴스의 타입과 일치해야함`

```java
class EX6_2 {
    public static void main(String[] args) {
        Tv t1 = new Tv(); // Tv t1; t1 = new Tv(); 를 한 문장으로 가능 
        Tv t2 = new Tv();
        System.out.println("t1의 현재 채널은" + t1.channel + "입니다.");
        System.out.println("t2의 현재 채널은" + t2.channel + "입니다.");

        t1.channel = 7; // channel 값을 7으로 한다．
        System.out.println("t1의 채널 값을 7로 변경하였습니다.");

        System.out.println("t1의 현재 채널은" + t1.channel + "입니다.");
        System.out.println("t2의 현재 채널은" + t2.channel + "입니다.");
    }
}

t1의 현재 채널은0입니다.
t2의 현재 채널은0입니다.
t1의 채널 값을 7로 변경하였습니다.
t1의 현재 채널은7입니다.
t2의 현재 채널은0입니다.
```



# 객체 배열 

- 많은 수의 객체를 다뤄야할 때 배열로 다루면 편리함

- 객체배열 : 객체를 배열로 다루는 것 

- 객체 배열 안에 객체가 저장되는 것이 아니고 객체의 주소가 저장됨 

- 객체 배열은 참조변수들을 하나로 묶은 참조변수 배열임 

  ```java
  Tv tv1, tv2, tv3;    ==> Tv[] tvArr = new Tv[3]; // 참조변수 배열(객체배열)을 생성
  
  // 객체를 생성해서 배열의 각 요소에 저장
  tvArr[0] = new Tv();
  tvArr[1] = new Tv();
  tvArr[2] = new Tv();
  
  ==> Tv[] tvArr = {new Tv(), new Tv(), new Tv() }; 로 한줄로 작성할 수도 있음 
      
  
  ```



# 클래스의 정의 - 사용자 정의 타입

- 사용자 정의 타입 :  기본자료형 외에 프로그래머가 서로 관련된 변수들을 묶어서 하나의 타입으로 새로 추가하는 것 
- 자바와 같은 객체지향 언어에서는 클래스가 곧 사용자 정의 타입임 



# 선언위치에 따른 변수의 종류 

- ##### 변수의 종류

  - 클래스 변수
    - 인스턴스 변수앞에 static만 붙여주면 됨 
    - 모든 인스턴스가 공통된 저장공간(변수)을 공유하게 됨
    - 한 클래스의 모든 인스턴스들이 공통적인 값을 유지해야하는 속성의 경우 클래스 변수로 선언해줘야함 
    - 인스턴스를 생성하지 않고도 언제라도 바로 사용할 수 있으며 `클래스이름.클래스 변수`와 같은 형식으로 사용하면 됨 
  - 인스턴스 변수 
    - 클래스 영역에서 선언되며 인스턴스를 생성할 때 만들어짐 
    - 인스턴스 변수의 값을 읽어오거나 저장하려면 먼저 인스턴스를 생성해야함
    - 인스턴스마다 별도의 저장공간을 가지므로 서로 다른 값을 가질 수 있음
    - 인스턴스마다 고유한 상태를 유지해야하는 속성의 경우 인스턴스 변수로 선언함
  - 지역 변수 
    -  클래스 영역 이외의 영역에서 선언되는 변수 
    - 매서드 내에 선언되어 메서드 내에서만 사용 가능
    - 메서드가 종료되면 소멸되어 사용할 수 없음

- 변수의 정류를 결정짓는 요소  : `변수의 선언 위치`

- 멤버 변수를 제외한 변수들은 모두 지역변수이며, 멤버 변수 중 static이 붙은 것은 클래스 변수, 붙지 않은 것은 인스턴스 변수임



```java
class variables
{
    int iv; // 인스턴스 변수
    static int cv // class변수(static변수 ,공유 변수)
        
    void method()
    {
        int lv = 0; // method 영역이므로 지역변수 
    }
} 
```



# 클래스 변수와 인스턴스 변수 

- 인스턴스 변수는 인스턴스가 생성될 때 마다 생성되므로 인스턴스마다 각기 다른 값을 유지할 수 있지만, 클래스 변수는 모든 인스턴스가 하나의 저장공간을 공유하므로 항상 공통된 값을 갖음 

- 카드를 예제로 속성엔 무늬, 숫자, 폭, 높이가 있는데 
- 무늬와 숫자는 카드 개별로 가져야 하는 속성이지만 
- 카드의 폭과 높이는 공통적인 속성이어야 하므로 
- 무늬, 숫자는 인스턴스 변수로, 
- 폭과 높이는 클래스 변수로 선언을 해줘야 함
- 카드의 폭을 변경해야할 필요가 있을 경우 한 카드의 폭만 변경해도 모든 카드의 폭이 변경 됨  

```java
class EX6_3 {
    public static void main(String[] args) {
        System.out.println("Card.width = "+ Card.width);
        System.out.println("Card.height = "+ Card.height);
        // class변수(static 변수)는 객체 생성 없이 `클래스이름.클래스변수`로 사용가능
        Card c1 = new Card();
        c1.kind = "Heart";
        c1.number = 7;

        Card c2 = new Card();
        c2.kind = "Spade"; // 인스턴스 변수의 값을 변경
        c2.number = 4; // 인스턴스 변수의 값을 변경

        System.out.println("c1은 "+ c1.kind + "," + c1.number + "이며, 크기는 (" + c1.width +"," + c1.height + ")" ) ;
        System.out.println("c2는 "+ c2.kind + "," + c2.number + "이며, 크기는 (" + c2.width +"," + c2.height + ")" ) ;

        System.out.println("c1의 width와 height를 각각 50,80으로 변경합니다");
        c1.width = 50; // 클래스 변수의 값을 변경
        c1.height = 80; // 클래스 변수의 값을 변경

        System.out.println("c1은 "+ c1.kind + "," + c1.number + "이며, 크기는 (" + c1.width +"," + c1.height + ")" ) ;
        System.out.println("c2는 "+ c2.kind + "," + c2.number + "이며, 크기는 (" + c2.width +"," + c2.height + ")" ) ;


    }
}

class Card {
    String kind;
    int number;
    static int width = 100;
    static int height = 250;
}

Card.width = 100
Card.height = 250
c1은 Heart,7이며, 크기는 (100,250)
c2는 Spade,4이며, 크기는 (100,250)
c1의 width와 height를 각각 50,80으로 변경합니다
c1은 Heart,7이며, 크기는 (50,80)
c2는 Spade,4이며, 크기는 (50,80)
    
// 클래스 변수를 공유하기 때문에 c1의 width, height 내용만 바꿨는데도 불구하고 c2의 width, height도 바뀜 
// 클래스 변수는 모두 같은 저장공간을 참조하므로 항상 같은 값 
```



# 메서드

##### - 메서드 : 특정 작업을 수행하는 일련의 문장들을 하나로 묶은 것 

- 입력값 또는 출력값(결과값)이 없을 수도 있으며 심지어는 입력값과 출력값이 모두 없을 수도 있음 
- 메서드는 `선언부`와 `구현부`로 이루어져 있음

```java
반환타입 메서드이름(타입 변수명, 타입 변수명,...) // 선언부
{ 
    // 메서드 호출시 수행될 코드 // 구현부
}


ex)
int add(int a , int b) // 선언부
{ // 여기부터
    int result = a + b; 
    return result; // 호출한 메서드로 결과를 반환 
// 여기까지 구현부 
}
```



# 메서드 선언부

- 메서드 선언부는 `메서드 이름` `매개변수 선언(위의 타입 변수명 부분)` `반환타입`으로 구성

- ##### 매개변수의 선언

  - `매개변수`는 메서드가 작업을 수행하는데 필요한 값들을 제공받기 위한 것이므로 필요한 값의 개수만큼 변수를 선언하며 각 변수간의 구분은 `,`쉼표를 이용함
  - 변수들의 타입이 같아도 타입 생략 불가능 `int add(int a , int b) ` 로 타입 명시
  - 매개변수의 개수는 제한이 없지만 , 만일 입력해야하는 값의 개수가 많은 경우에는 `배열`이나 `참조변수`사용하면 됨
  - 입력할 필요가 없다면 아무것도 안적어도 됨 

  

- ##### 반환타입

  - 메서드의 작업 수행 결과(출력)인 `반환값(return value)`의 타입을 적음
  - 반환 값이 없는 경우 반환 타입으로 `void`를 적어줘야 함 

  ```java
  void print99danAll() { 
  	for(int i=1;i<=9;i++) { 
  		for(int j=2;j<=9;j++) { 
  			System.out.print(j+"*"+i+"="+(j*i)+" "); 
  		} 
          System.out.println();
  	} 
  } 
  
  // 출력만 할 뿐 반환값이 없으므로 void 적어줌 
  ```

  



# 메서드 구현부

- 메서드 선언부 다음에 오는 괄호 { }를 `메서드의 구현부`라고 함
- 메서드를 호출 했을 때 수행될 문장들을 적음



##### - return 문

- 메서드의 반환 타입이 `void`가 아닌 경우 `구현부 { } 안에 'return 반환값';`이 반드시 포함되어야 함 
- 반환 값의 타입은 `반환타입`과 일치하거나 `적어도 자동 형변환이 가능한 것`이어야 함
- return문은 하나의 값만 반환할 수 있음 
- 매개변수는 여러개일지라도 출력(반환값)은 최대 하나만 허용 

```java

int add(int a , int b) // 선언부
{ // 여기부터
    int result = a + b; 
    return result; // 호출한 메서드로 결과를 반환 
// 여기까지 구현부 
}

// 이 코드로 보면 맨 첫줄 int와 return의 result는 타입이 일치해야하거나 / result가 자동 형변환이 가능해야한다
```



##### - 지역변수

- 메서드 내에 선언된 변수들은 그 메서드 내에서만 사용할 수 있음 
- 서로 다른 메서드라면 같은 이름의 변수를 선언해도 됨

```java
int add(int a , int b) 
{ 
    int result = a + b; 
    return result;  
}

int multiply(int a, int b)
{
    int result = a*b
    return result;    
        
}

// 정의된 메서드 add와 multiply에 각기 선언된 변수 a, b, result는 이름만 같을 뿐 서로 다른 변수임 
```





# 메서드 호출

- 메서드를 정의했어도 호출되지 않으면 아무일도 일어나지 않음

```java
메서드이름(값1, 값2); // 메서드 호출 방법

int result = add(3,5) ;
// add메서드를 호출하고 결과를 result에 저장 
```



##### - 인수(argument)와 매개변수(parameter)

- 메서드를 호출할 때 괄호 `( )` 안에 지정해준 값들을 `인수 또는 인자`라고 함
- 인자의 개수와 순서는 호출된 메서드에 선언된 매개변수와 일치해야 함
- 인자는 메서드가 호출되면서 매개변수에 대입되므로 인자의 타입은 매개변수와 일치하거나 자동 형변환이 가능한 타입이어야 함 

# 메서드 실행 흐름





```java
class EX6_4 {
    public static void main(String[] args) {
        MyMath mm = new MyMath();
        long result1 = mm.add(5L, 3L);
        long result2 = mm.substract(5L, 3L);
        long result3 = mm.multiply(5L, 3L);
        double result4 = mm.divide(5L, 3L);

        System.out.println("add(5L, 3L) = " + result1);
        System.out.println("substract(5L, 3L) = " + result2);
        System.out.println("multiply(5L, 3L) = " + result3);
        System.out.println("divide(5L, 3L) = " + result4);
    }
}

class MyMath {
    long add(long a ,  long b) {
        long result = a + b;
        return result;
    }
    long substract(long a , long b) { return a - b ;} // 한줄로 가능
    long multiply(long a , long b) { return a * b ;}
    double divide(double a , double b) { return a / b ;}
}

add(5L, 3L) = 8
substract(5L, 3L) = 2
multiply(5L, 3L) = 15
divide(5L, 3L) = 1.6666666666666667
```



# return문

- 현재 실행중인 메서드를 종류하고 호출한 메서드로 되돌아감
- 원래는 반환값의 유무에 관계없이 모든 메서드에 적어도 하나의 return문이 있어야 하지만 반환타입이 void인경우 return문 없이도 오류가 안났던 이유는 컴파일러가 메서드의 마지막에 return을 자동적으로 추가해줬기 때문
- 반환타입이 void가 아닌 경우 반드시 return문이 있어야함 --> 안써주면 컴파일 에러 발생 (missing return statement)
- if문을 작성하는 경우 else문까지 작성해주어 항상 결과값이 반환되게 해야함 (if문만 써주면 if문에 따라서 return 문이 실행될 수도 있고 실행 안될 수도 있기 때문에 )



# 호출 스택(call stack)

- 호출 스택은 메서드의  작업에 필요한 메모리 공간을 제공함
- 이 메모리는 메서드가 작업을 수행하는 동안 지역변수(매개변수 포함)들과 연산의 중간 결과 등을 저장하는데 사용됨
- 메서드가 작업을 마치면 할당되었던 메모리 공간은 반환되어 비워짐

```java
class EX6_5 {
    public static void main(String[] args) {
        System.out.println("Hello");
    }
}

Hello

// 1. 호출 스택에서 amin 메서드를 위한 메모리 공간이 할당되고 main메서드의 코드가 수행되기 시작
// 2. main 메서드가 끝난 것은 아니기 때문에 main메서드는 호출스택에 대기상태로 남아있고 println()의 수행 시작 됨 . hello출력
// 3. println() 메서드의 수행이 완료되어 호출스택에서 사라지도 자신을 호출한 main메서드로 돌아감. println()을 호출한 이후부터 수행을 재개
// 4. main메서드에서도 더 이상 수행할 코드가 없으므로 종료되어 호출 스택은 완전히 비워지게 되고 프로그램은 종료 됨
```



# 기본형 매개변수

- 메서드의 매개변수를 기본형으로 선언하면 단순히 저장된 값만 얻음
- 메서드의 매개변수를 참조형으로 선언하면 값이 저장된 곳의 주소를 알 수 있기 때문에 값을 읽어  오는 것은 물론 값을 변경하는 것도 가능함
- 기본형 매개 변수 (read only)    //  참조형 매개 변수 (read & write)

```java
class Data {int x;}

class EX6_6 {
    public static void main(String[] args) {
        Data d = new Data();
        d.x = 10;
        System.out.println("main() : x = " + d.x);

        change(d.x);

        System.out.println("After change(d.x)");
        System.out.println("main() : x = "+d.x);
    }

    static void change(int x) { // 기본형 매개변수
        x = 1000;
        System.out.println("change() : x = "+ x);
    }
}

main() : x = 10
change() : x = 1000
After change(d.x)
main() : x = 10
    
// 기본형 매개변수는 값만 읽을 수 있을 뿐 변경할 수 없음
// change메서드가 종료되면서 매개변수 x는 스택에서 제거됨 d.x에는 아무런 변화 x
```



# 참조형 매개변수

```java
class Data2 {int x;};

class EX6_7 {
    public static void main(String[] args) {
        Data2 d = new Data2();
        d.x = 10;
        System.out.println("main() : x = " + d.x);

        change(d);

        System.out.println("After change(d)");
        System.out.println("main() : x = "+d.x);
    }

    static void change(Data2 d) { // 참조형 매개변수
        d.x = 1000;
        System.out.println("change() : x = "+ d.x);
    }
}

main() : x = 10
change() : x = 1000
After change(d)
main() : x = 1000

// change의 매개 변수를 참조형으로 선언했기 때문에 x의 값이 아닌 변수 d의 주소가 매개변수 d에 복사 
// main 메서드의 참조변수 d와 change 메서드의 참조변수 d는 같은 주소를 가리켜 변경하는 것도 가능하게 됨 
```



# 참조형 반환타입

- 매개 변수 뿐만 아니라 반환 타입도 참조형이 될 수 있음

```java
class Data3 {int x;};

class EX6_8 {
    public static void main(String[] args) {
        Data3 d = new Data3();
        d.x = 10;
        
        Data3 d2 = copy(d);
        
        System.out.println("d.x = " + d.x);
        System.out.println("d2.x = " + d2.x);

    }

    static Data3 copy(Data3 d) { // 참조형 매개변수
        Data3 tmp = new Data3(); // 새로운 객체 tmp 생성 
        tmp.x = d.x; // d.x의 값을 tmp.x에 복사
        
        return tmp;

    }
}

d.x = 10
d2.x = 10

// 모든 참조형 타입의 값은 객체의 주소 이므로 정수값이 반환
//  copy메서드는 새로운 객체를 생성한 다음에, 매개변수로 넘겨받은 객체에 저장된 값을 복사해서 반환 
    

```



# static 메서드와 인스턴스 메서드 

- 앞에 static이 붙어 있으면 클래스 메서드
- 앞에 static이 안붙어있으면 인스턴스 메서드 (반드시 객체를 생성해야하만 호출 가능)
- 클래스 메서드도 클래스 변수처럼 객체를 생성하지 않고도 `클래스이름.메서드이름(매개변수)`와 같은 식으로 호출 가능 

```java
class MyMath2 {
    long a , b;
    
    // 인스턴스 변수 a, b만을 이용해서 작업하므로 매개변수가 필요 없음
    long add() { return a + b; }
    long subtract() { return a - b; }
    long mutiply() { return a * b; }
    long divide()  { return a / b; }
    
    // 인스턴스 변수와 관계없이 매개변수만으로 작업이 가능 
    static long add(long a , long b) { return a + b; } // a,b는 지역변수
    static long subtract(long a , long b) { return a - b; }
    static long mutiply(long a , long b) { return a * b; }
    static long divide(long a , long b)  { return a / b; }
        
}

class EX6_9 {
    public static void main(String args[]) {
        // 클래스 메서드 호출. 인스턴스 생성 없이 호출 가능
        System.out.println(MyMath2.add(200L, 100L));
        System.out.println(MyMath2.subtract(200L, 100L));
        System.out.println(MyMath2.mutiply(200L, 100L));
        System.out.println(MyMath2.divide(200L, 100L));
        
        MyMath2 mm = new MyMath2(); // 인스턴스 생성
        mm.a = 200L;
        mm.b = 100L;
        
        //인스턴스메서드는 객체 생성 후에만 호출이 가능
        System.out.println(mm.add());
        System.out.println(mm.subtract());
        System.out.println(mm.mutiply());
        System.out.println(mm.divide());
    }
}

300
100
20000
2
300
100
20000
2
```



# static을 언제 붙여야 할까?

- **클래스를 설계할 때 , 멤버 변수 중 모든 인스턴스에 공통으로 사용하는 것에 static붙임**
- 클래스 변수(static 변수)는 인스턴스를 생성하지 않아도 사용 가능
- 클래스 메서드(static 메서드)는 인스턴스 변수를 사용할 수 없음
  - 반면에 인스턴스 변수나 인스턴스 메서드에서는 static이 붙은 멤버들을 사용하는 것이 가능
- **메서드 내에서 인스턴스 변수를 사용하지 않는다면 static을 붙이는 것을 고려할 것**(메서드 호출 시간이 짧아지기 때문에 성능이 향상됨. static을 안붙인 메서드는 실행 시 호출되어야할 메서드를 찾는 과정이 추가적으로 필요하기 때문에 시간이 더 걸리기 때문)



# 메서드 간의 호출과 참조

- 같은 클래스에 속한 멤버들 간에는 별도의 인스턴스를 생성하지 않고도 서로 참조 또는 호출이 가능 
- 단, 클래스 멤버가 인스턴스 멤버를 참조 또는 호출하고자 할 때는 인스턴스를 생성해야 함(인스턴스 멤버가 존재하는 시점에 클래스 멤버는 항상 존재하지만, 클래스 멤버가 존재하는 시점에는 인스턴스 멤버가 존재하지 않을 수도 있기 때문)

```java
class TestClass { 
	void instanceMethod() {} //인스턴스 메서드
	static void staticMethod() {} // static 메서드 
    
	void instanceMethod2() {  //인스턴스 메서드
		instanceMethod();  // 다른 인스턴스 메서드 호출
		staticMethod(); // static 메서드 호출
} 

	static void staticMethod2() { // static메서드 
		instanceMethod(); // 에러! 인스턴스메서드를 호출할 수 없다， 
		staticMethod();//  static메서드는 호출 할 수 있다
    }
} // end of class 
```

```java
class TestClass2 { 
    int iv; // 인스턴스 변수 
    static int cv; // static 변수
    
	void instanceMethod() {  //인스턴스 메서드
		System.out.println(iv); // 인스턴스 변수 사용 가능
        System.out.println(cv); // static 변수 사용 가능
} 

	static void staticMethod() { // static메서드 
        System.out.println(iv); // 에러 ! 인스턴스 변수 사용 불가 
        System.out.println(cv); // static 변수 사용 가능
    }
} // end of class 
```



# 오버로딩(overloading)

- 메서드도 변수와 마찬가지로 같은 클래스 내에서 서로 구별될 수 있어야 하기 때문에 각기 다른 이름을 가져야함
- 하지만 자바에서는 한클래스내에 이미 사용하려는 이름과 같은 이름을 가진 메서드가 있더라도 `매개변수의 개수 또는 타입이 다르면` `같은 이름을 사용해서 메서드 정의` 가능
- **메서드 오버로딩**(오버로딩) : 한 클래스 내에 같은 이름의 메서드를 여러개 정의하는 것 



> **오버로딩 성립 조건**
>
> 1. 메서드 이름이 같아야함
> 2. 매개변수의 개수 또는 타입이 달라야함
> 3. 반환 타입은 관계 없음

```java
class EX6_10 {
    public static void main(String args[]) {
		MyMath3 mm = new MyMath3();
        System.out.println("mm. add(3,3) 결과 : "  +mm.add(3,3));
        System.out.println("mm. add(3L,3) 결과 : "  +mm.add(3L,3));
        System.out.println("mm. add(3,3L) 결과 : "  +mm.add(3,3L));
        System.out.println("mm. add(3L,3L) 결과 : "  +mm.add(3L,3L));
        
        int[] a = {100,200,300};
        System.out.println("mm. add(a) 결과 : "  +mm.add(a));
    
    }
}

class MyMath3 {
    int add(int a, int b) {
        System.out.print("int add(int a, int b) - ");
        return a + b;
    }
    
    long add(int a, long b) {
        System.out.print("long add(int a, long b) - ");
        return a + b;
    }
    
    long add(long a, int b) {
        System.out.print("long add(long a, int b) - ");
        return a + b;
    }

    long add(long a, long b) {
        System.out.print("long add(long a, long b) - ");
        return a + b;
    }    
    
    int add(int[] a) {
        System.out.print("int add(int[] a) - ");
        int result = 0;
        for(int i = 0; i < a.length; i++) {
            result += a[i];
        }
        return result;
    }
    
}

int add(int a, int b) - mm. add(3,3) 결과 : 6
long add(long a, int b) - mm. add(3L,3) 결과 : 6
long add(int a, long b) - mm. add(3,3L) 결과 : 6
long add(long a, long b) - mm. add(3L,3L) 결과 : 6
int add(int[] a) - mm. add(a) 결과 : 600
```



# 생성자

- 생성자는 인스턴스가 생성될 때 호출되는 `인스턴스 초기화 메서드`임
- 인스턴스 변수의 초기화 작업에 주로 사용
- 생성자는 메서드 처럼 클래스 내에 선언
- 리턴 값은 없음
- 리턴 값이 없어도 void키워드를 사용하지 않고 그냥 단지 아무것도 적지 않음
- 생성자도 오버로딩 가능. 따라서 하나의 클래스에 여러개의 생성자가 존재할 수 있음



> **생성자의 조건**
>
> 1. 생성자의 이름은 클래스 이름과 같아야함
> 2. 생성자는 리턴 값이 없음

```java
클래스이름(타입 변수명, 타입 변수명, ...) {
    // 안스턴스 생성 시 수행될 코드
    // 주로 인스턴스 변수의 초기화 코드를 적음
}

class Point {
    Point() { // 매개 변수가 없는 생성자
        ... 
    }
    
    Point(int x, int y) { // 매개 변수가 있는 생성자 
        ...
    }
}
```

- 연산자 new가 인스턴스를 생성하는 것이지, 생성자가 인스턴스를 생성하는건 아님



## 기본 생성자(default constructor)

- 모든 클래스에는  반드시 하나 이상의 생성자가 정의되어야 하는데, 지금까지 클래스에 생성자를 정의하지 않고도 인스턴스를 생성할 수 있었던 이유는 컴파일러가 제공하는 `기본 생성자`덕분임

- 인스턴스 초기화 작업이 필요하지 않다면 생성자를 정의하지 않고 컴파일러가 제공하는 기본 생성자를 사용하는 것도 좋음



```java
class Data_1 {
    int value;
}

class Data_2 {
    int value;
    
    Data_2(int x) { // 매개변수가 있는 생성자
        value = x;
    }
}


class EX6_11 {
    public static void main(String args[]) {
		Data_1 d1 = new Data_1();
        Data_1 d2 = new Data_2(); // compile error 발생  (매개변수가 없어서)
        Data_2 d2 = new Data_2(10); // 정상 작동
    }
}
```



# 매개변수가 있는 생성자

> 인스턴스를 생성할 때 결정해야 할 사항

- 클래스 : 어떤 클래스의 인스턴스를 생성할 것인가?
- 생성자 : 선택한 클래스의 어떤 생성자로 인스턴스를 생성할 것 인가?

```java
class Car {
    String color;
    String gearType;
    int door;
    
    Car() {} // 기본 생성자
    
    Car(String c, String g, int d) { // 생성자
        color = c;
        gearType = g;
        door = d;
    }    
}

class EX6_12 {
    public static void main(String[] args) {
        Car c1 = new Car();
        c1.color = "white";
        c1.gearType = "auto";
        c1.door = 4;
        
        
        Car c2 = new Car("white", "auto", 4); // 위에 코드들을 간결하게
        
        System.out.println("c1의 color= "+ c1.color + ", gearType = "+c1.gearType + ", door = "+ c1.door);
        
        System.out.println("c2의 color= "+ c2.color + ", gearType = "+c2.gearType + ", door = "+ c2.door);        
    }
}

c1의 color= white, gearType = auto, door = 4
c2의 color= white, gearType = auto, door = 4
```



# 생성자에서 다른 생성자 호출하기 - this()

- 생성자 간에도 서로 호출 가능

> **생성자간에 호출 조건**
>
> 1. 생성자의 이름으로 클래스 이름 대신 this 사용
> 2. 한 생성자에서 다른 생성자를 호출할 때는 반드시 첫 줄에서만 호출이 가능

```java
class Car2 {
    String color;
    String gearType;
    int door;
    
    Car2() {
        this("white", "auto", 4);
    }
    
    Car2(String color) {
        this(color, "auto", 4);
    }
    
    Car2(String color, String gearType, int door) {
        this.color = color;
        this.gearType = gearType;
        this.door = door;
    }
}

class EX6_13 {
    public static void main(String[] args) {
        Car2 c1 = new Car2();
		Car2 c2 = new Car2("blue");
        
        System.out.println("c1의 color= "+ c1.color + ", gearType = "+c1.gearType + ", door = "+ c1.door);
        
        System.out.println("c2의 color= "+ c2.color + ", gearType = "+c2.gearType + ", door = "+ c2.door);        
    }
}

c1의 color= white, gearType = auto, door = 4
c2의 color= blue, gearType = auto, door = 4
```



# 객체 자신을 가리키는 참조변수 - this

- this는 참조변수로 인스턴스 자신을 가리킴
- this로 인스턴스 변수에 접근 
- 인스턴스 멤버만 this사용 가능 (static 멤버에선 사용 불가능)

```java
this : 인스턴스 자신을 가리키는 참조변수. 인스턴스의 주소가 저장되어 있고 모든 인스턴스 메서드에서 지역변수로 숨겨진 채로 존재
    
this(), this(매개변수) : 생성자, 같은 클래스의 다른 생성자를 호출할 때 사용 
```

```java
Car(String c, String g, int d) {   
    color = c; // color는 iv , c 는 lv
    gearType = g;
    door = d;
}
// 변수 color와 c는 서로 구별이 됨 
↓↓↓↓↓↓↓↓↓↓↓↓↓↓

Car(String color, String gearType, int door) {
    this.color = color;
    this.geatType = gearType;
    this.door = door;
}
// 인스턴스 변수 color와 매개변수로 선언된 변수의 이름이 같은 경우 이름만으로는 두변수가 구분이 안되기 때문에 this를 붙여서 인스턴스 변수라고 구분지어야 함 
```



# 변수의 초기화

- **변수의 초기화** : 변수를 선언하고 처음으로 값을 저장하는 것
- 멤버 변수(클래스 변수, 인스턴스 변수 )는 초기화를 하지 않아도 자동적으로 변수의 자료형에 맞는 기본값으로 초기화가 이루어져서 초기화를 사용하지 않고 사용 가능 (초기화는 선택)
- 지역 변수는 사용하기 전에 반드시 초기화 해야함



```java
class InitTest {
    int x; // 인스턴스 변수 
    int y = x; // 인스턴스 변수  // y를 초기화 하는데 x사용
    // x는 초기화를 해주지 않아도 자동적으로 int형의 기본값인 0으로 초기화 됨 
    
    
    void method1() {
        int i; // 지역 변수 // 초기화 안해 줌 
        int j = i; // 에러 발생 .  지역변수를 초기화 하지 않고 사용 
        // i는 자동적으로 초기화 되지 않으므로 초기화 되지 않은 상태에서 변수 j를 초기화 할 수 없음
    }
}
```



# 멤버 변수의 초기화 

- 멤버 변수는 각 타입의 기본값으로 자동 초기화 됨 
- 그 다음으로는 명시적 초기화, 초기화 블럭, 생성자의 순서로 초기화 됨
- 클래스 변수(cv) 가 인스턴스 변수(iv)보다 먼저 초기화 됨

```java
1. 클래스 변수 초기화 -> 인스턴스 변수 초기화
2. 자동 초기화 -> 명시적 초기화(간단) -> 초기화 블럭, 생성자(복잡)
```



##### - 명시적 초기화(explicit initialization)

- 변수를 선언과 동시에 초기화 하는 것
- 보다 복잡한 초기화 작업이 필요할 때는 `초기화 블럭(initialization block)` 또는 `생성자`사용

```java
class Car {
    int door = 4; // 기본형 변수의 초기화 
    Engine e = new Engine(); // 참조형 변수의 초기화 
}
```



##### - 초기화 블럭(initialization block)

> **초기화 블럭 종류**
>
> 1. 클래스 초기화 블럭 : 클래스 변수의 복잡한 초기화에 사용
> 2. 인스턴스 초기화 블럭 : 인스턴스 변수의 복잡한 초기화에 사용

- 인스턴스 초기화 블럭은 단순히 클래스 내에 블럭`{}`만들고 그 안에 코드만 작성
- 클래스 초기화 블럭은 인스턴스 초기화 블럭 앞에 `static` 붙이면 됨 



```java
class EX6_14 {
    static {
        System.out.println("static { }");
    }
    
    {
        System.out.println("{ }");
    }
    
    public EX6_14(){
        System.out.println("생성자");
    }
    
    public static void main(String[] args) {
	    System.out.println("EX6_14 bt = new EX6_14();");
        EX6_14 bt = new EX6_14();
        
        System.out.println("EX6_14 bt2 = new EX6_14();");
        EX6_14 bt2 = new EX6_14();
    }
}

static { }
EX6_14 bt = new EX6_14();
{ }
생성자
EX6_14 bt2 = new EX6_14();
{ }
생성자

// 클래스 초기화 블럭이 가장 먼저 수행되고
// main메서드가 수행되어 EX6_14의 인스턴스가 생성되면서 인스턴스 초기화블럭이 수행되고 끝으로 생성자가 수행됨
// 클래스 초기화 블럭은 처음 메모리에 로딩될 때 한번만 수행
// 인스턴스 초기화 블럭은 인스턴스가 생성될 때 마다 수행
```

```java
class EX6_15 {
    static int[] arr = new int[10]; // 명시적 초기화 
    
    // 클래스 초기화 블럭을 이용하여 배열의 각 요소들을 난수를 사용해 값으로 채움
    static {
        for(int i = 0; i <arr.length; i++) {
            arr[i] = (int)(Math.random()*10) +1;
        }
    }
    
    public static void main(String[] args) {
        for(int i = 0; i < arr.length; i++) {
            System.out.println("arr["+i+"] : " + arr[i]);
        }
    }
}

arr[0] : 7
arr[1] : 10
arr[2] : 7
arr[3] : 3
arr[4] : 4
arr[5] : 9
arr[6] : 1
arr[7] : 1
arr[8] : 4
arr[9] : 4
```



#### 인스턴스 초기화 블럭과 생성자의 차이점

- 생성자 : 인스턴스 변수를 초기화 시키기 위해 
- 인스턴스 초기화 블럭 : 인스턴스 변수를 초기화 시키기 위해 사용



=> 둘의 목적은 같음 .  언제 어떤걸 사용해야할까?

- 생성자와 인스턴스 초기화 블럭의 차이는 거의 없음
- 인스턴스 초기화 블럭은 잘 사용되지 않음
- 단,  여러개의 생성자가 있으면 모든 생성자에서 공통으로 수행되어야할 코드를 인스턴스 초기화 블럭에 포함하여 코드의 중복을 막을 수 있음

```java
class Car {
    private String modelName;
    private int modelYear;
    private String color;
    private int  maxSpeed;
    private int currentSpeed;
    
    { // 인스턴스 초기화 블럭
        this.currentSpeed = 0;
    }
    
    Car(){}
    Car(String modelName, int modelYear, String color, int maxSpeed) {
        this.modelName = modelName;
        this.modelYear = modelYear;
        this.color = color;
        this.maxSpeed = maxSpeed;
    }
    
    public int getSpeed(){
        return currentSpeed;
    }   
}

public class Member03{
    public static void main(String[] args){
        Car myCar = new Car(); // 인스턴스 생성
        
        System.out.println(myCar.getSpeed()); // 인스턴스 메소드의 호출 
    }
}

실행 결과 : 0 
```



---

Java의 정석 기초편 | 남궁성 | 도우출판

