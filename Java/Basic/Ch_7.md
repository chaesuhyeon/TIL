# 상속

- 코드를 공통적으로 관리할 수 있이 때문에 코드의 추가 및 변경이 매우 용이
- 코드의 재사용성을 높이고 코드의 중복을 제거하여 프로그램의 생산성과 유지보수에 크게 기여함
- 새로 작성하고자 하는 클래스 이름뒤에 상속하고자하는 클래스 이름을 `extends`와 함께 써주기만 하면 됨

```java
class Parent { }
class Child extends Parent {
    ...
}

// 새로 작성하려는 class : Child
// 상속 받으려는 class : Parent
```



- Child class에 새로운 코드가 추가되어도 조상인 Parent class는 아무런 영향 X
- 조상인 Parent class에 코드가 추가되면 Child class에 영향 O
- 자손 클래스는 조상 클래스의 모든 멤버를 상속 받으므로 항상 조상클래스보다 같거나 많은 멤버를 갖고 있음
- 모든 멤버를 상속받지만 ,**생성자와 초기화 블럭은 상속되지 않음**
- 자바에는 다중 상속 허용 x
- 자바에서는 둘 이상의 클래스로부터 상속받을 수 없음



```java
class Tv {
    boolean power; // 전원상태(on/off)
    int channel; // 채널
    
    void power() { power = !power; }
    void channelUp() { ++channel; }
    void channelDown() { --channel; }
}

class CaptionTv extends Tv { // CaptionTvsms Tv에 캡션(자막)을 보여주는 기능 추가
    boolean caption; // 캡션 상태(on/off)
    void displayCaption(String text) {
        if (caption) { // caption이 true(on)일 때만 text보여줌
            System.out.println (text);
        }
    }
}

class EX7_1 {
    public static void main(String args[]) {
        CaptionTv ctv = new CaptionTv();
        ctv.channel = 10;
        ctv.channelUp();
        System.out.println(ctv.channel);
        ctv.displayCaption("Hello, world");
        ctv.caption = true; // caption true(on)
        ctv.displayCaption("Hello, world!");
        
    }
}

11
Hello, world!
```

- 이처럼 조상클래스의 인스턴스를 따로 생성하지 않아도 조상클래스의 멤버들을 사용할 수 있음



# 클래스 간의 관계 - 포함관계

- `포함(Composite)관계` : 상속 외에도 클래스를 재사용하는 또 다른 방법
  - 한 클래스의 멤버변수로 다른 클래스 타입의 참조 변수를 선언하는 것 

```java
class Circle {
    int x;
    int y;
    int r;
}


class Point {
    int x;
    int y;
}

////////////////////////////////////

class Circle {
    Point c = new Point();
    int r;
}

```



# 클래스 간의 관계 설정하기

- 상속관계와 포함관계를 각각 언제써야할지 고려해봐야 함
- `~은 ~이다(is - a)`와 `~은 ~을 가지고 있다(has-a)`를 넣어서 문장을 만들어봐야 함

> 원(Circle) 은 점(Point)이다. - Circle is a Point (**상속**)
>
> 원은 점을 가지고 있다. - Circle has a Point (**포함**)



> **~은 ~이다(is - a) : 상속 관계**
>
> **~은 ~을 가지고 있다(has-a) : 포함 관계**



# Object 클래스  - 모든 클래스의 조상

- Object 클래스는 모든 클래스 상속계층도의 최상위에 있는 조상클래스 
- 다른 클래스로부터 상속받지 않는 모든 클래스들은 자동적으로  Object클래스로부터 상속받게 함
- 그동안 toString이나 equals와 같은 메서드를 따로 정의하지 않고 사용할 수 있었던 것은 이 메서드들이 Object클래스에 정의된 것들이기 때문



# 오버라이딩(overriding)

- **오버라이딩** : 조상 클래스로부터 상속받은 메서드의 내용을 변경하는 것

```java
class Point {
    int x;
    int y;
    
    String getLocation() {
        return "x:" + x + "y: "+ y;
    }
}

class Point3D extends Point {
    int z;
  
    String getLocation() {
        return "x:" + x + "y: "+ y + "z: "+ z; // z부분 추가 
    }
}
```



##### **오버라이딩의 조건**

1. 선언부(메서드 이름, 메개변수, 반환타입) 가 조상 클래스의 메서드와 일치해야함
   - 접근 제어자(access modifier)와 예외(exception)는 제한된 조건 하에서만 다르게 변경할 수 있음
2. 접근 제어자는 조상 클래스의 메서드보다 좁은 범위로 변경할 수 없다.
   - 접근 제어자의 접근범위 넓은 ~ 좁은 순 : public , protected, (defualt), private
3. 조상 클래스의 메서드보다 많은 수의 예외를 선언할 수 없다



# 오버로딩 vs 오버라이딩

- 오버로딩 : 기존에 없는 새로운 메서드를 정의하는 것(new)
- 오버라이딩 : 상속받은 메서드의 내용을 변경하는 것 (change, modify)

```java
class Parent {
    void parentMethod(){}
}

class Child extends Parent{ //상속
    void parentMethod(){} // 오버라이딩 (상속만 받음 끝인데 또 써줘서 오버라이딩)
    void parentMethod(int i) {} // new // 오버로딩
    
    void childMethod(){}
    void childMethod(int i){} // 오버로딩
    void childMethod(){} // 에러. 중복정의 됨 

}
```



# 참조변수 super

- **super** : 자손 클래스에서 조상 클래스로부터 상속받은 멤버를 참조하는데 사용되는 참조변수

```java
class EX7_2 {
    public static void main(String args[]) {
        Child c = new Child();
        c.method();
    }
}

class Parent {
    int x = 10;
    // super.x
}

class Child extends Parent{
    int x = 20; // this.x
    
    void method(){
        System.out.println("x = "+ x);
        System.out.println("this.x = "+ this.x);
        System.out.println("super.x = "+ super.x);
    }
}

x = 20
this.x = 20
super.x = 10

// Child 클래스는 조상인 Parent클래스로부터 x를 상속받는데 멤버인 x와 이름이 같아서 둘을 구분할 방법이 필요함

// 조상 멤버 : super
// 자손 멤버 : this
```

```java
class EX7_3 {
    public static void main(String args[]) {
		Child2 c = new Child2();
        c.method();
    }
}

class Parent2 {
    int x = 10;
    // super.x와 this.x 둘다 가능
}

class Child2 extends Parent2{ 
    void method(){
        System.out.println("x = "+ x);
        System.out.println("this.x = "+ this.x);
        System.out.println("super.x = "+ super.x);
    }
}

x = 10
this.x = 10
super.x = 10
    
// 모든 인스턴스 메서드에는 this와 super가 지역변수로 존재하는데 이 들에게는 자신이 속한 인스턴스의 주소가 자동으로 저장됨
```



# super() - 조상의 생성자

- this()처럼 super()도 생성자
- this() : 같은 클래스의 다른 생성자를 호출하는데 사용
- super() : 조상의 생성자를 호출하는데 사용 

```java
class Point {
    int x,y;
    
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

class Point3D extends Point {
    int z;
    
    Point3D(int x, int y, int z) {
        this.x = x; // 조상의 멤버를 초기화
        this.y = y; // 조상의 멤버를 초기화 
        this.z = z;
    }
}
// 위 코드로 x,y를 초기화 했는데, 틀린 코드는 아니지만 바람직하지는 않음


// 아래의 코드가 더 바람직함
Point3D(int x, int y, int z) {
    super(x,y) ; // 조상클래스의 생성자 Point(int x, int y) 호출
    this.z = z // 자신의 멤버를 초기화 
        
}
// 이처럼 클래스 자신에 선언된 변수는 자신의 생성자가 초기화를 책임지도록 하는 것이 바람직 함
// 생성자는 상속되지 않음
```

```java
public class EX7_4 {
    public static void main(String[] args) {
        Point3D p = new Point3D(1,2,3);
        System.out.println("x=" + p.x + ", y=" + p.y + ", z=" + p.z);
    }
}

class Point {
    int x, y;
    
    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
}

class Point3D extends Point {
    int z;
    
    Point3D(int x, int y, int z) {
        super(x,y); // Point(int x, int y) 호출 
        this.z = z;
    }
}

x=1, y=2, z=3
```



# 패키지

- 클래스의 묶음
- 패키지는 물리적으로 하나의 디렉토리
- 패키지도 다른 패키지를 포함할 수 있으며 `.`으로 구분



# 패키지의 선언

- 클래스나 인터페이스 소스파일의 맨 위에 `package 패키지명;` 적어주면 됨
- 하나의 소스파일에 단 한번만 선언될 수 있음
- 패키지명은 클래스명과 구분하기위해 소문자로 함
- 소스파일을 작성할 때 패키지를 선언하지 않고도 문제가 없었던 이유는 자바에서 기본적으로 제공하는 `이름없는 패키지`때문

```java
// EX7_5
package com.codechobo.book; // PackageTest클래스가 속할 패키지의 선언

class PackageTest {
    public static void main(String[] args){
        System.out.println("Hello world!");
    }
}
```



# 클래스 패스(classpath)

- 위의 코드를 실행하면, 클래스 파일인 PackageTest.class는 com폴더 안의 codechobo폴더 안의 book폴더 안에 존재
- 패키지의 상위 디렉토리를 클래스패스에 포함시켜야만 실행 시 JVM이 PackageTest클래스를 찾을 수 있음
- `환경변수 -> 새로만들기` 에서 `변수이름 : CLASSPATH` / `변수 값: .;상위 디렉토리 경로` 
  - 앞에다가 `.;`써줌(현재 디렉토리 `.`를 클래스패스에 포함시키기 위해) ,
  - `;`를 구분자로하여 여러 개의 경로를 클래스패스에 지정할 수 있음



# import문

- 소스코드를 작성할 때 다른 패키지의 클래스를 사용하려면 패키지명이 포함된 클래스 이름을 사용해야함
- 클래스의 코드를 작성하기 전에 import문으로 사용하고자 하는 클래스의 패키지를 미리 명시해주면 소스코드에 사용되는 클래스 이름에서 패키지명은 생략할 수 있음

```java
java.util.Date Today = new java.util.Date();  // 번거로움

// import를 사용하면 클래스 이름에서 패키지명 생략 가능
import java.util.Date;
Today = new Date();
```

- import문은 `package문 다음에`, `클래스 선언문 이전`에 위치해야함

```java
import 패키지명.클래스명;

또는
    
import 패키지명.*; // 같은 패키지에서 여러개의 클래스가 사용될 때
```



# static import문

- static import문을 사용하면 static멤버를 호출할 때 클래스 이름을 생략할 수 있음
- 특정 클래스의 static 멤버를 자주사용할 때 편리

```java
import static java.lang.Integer.*; // Integer 클래스의 모든 static 메서드
import static java.lang.Math.random; // Math.ramdom()에만 괄호 안붙임
import static java.lang.System.out; // System.out을 out만으로 참조 가능 

//
System.out.println(Math.random());을 위처럼 import문을 써서 선언해주면
out.println(random());으로 간략히 할 수 있음
```

```java
import static java.lang.System.out;
import static java.lang.Math.*;

class EX7_6 {
    public static void main(String[] args) {
        out.println(random()); // System.out.println(Math.random());
        
        out.println("Math.PI: " + PI) // System.out.println("Math.PI : " + Math.PI);
    }
}
```



# 제어자(modifier)

- 접근 제어자 : public, protected, default, private
- 그 외 : static, final, abstract, native, transient, synchronized, volatile, strictfp
- 제어자는 클래스나 멤버 변수와 메서드에 주로 사용
- 하나의 대상에 대해서 여러 제어자를 조합해서 사용하는 것이 가능
- 접근 제어자는 4개 중에서 하나만 선택해서 사용할 수 있음



# static - 클래스의, 공통적인

- static이 사용될 수 있는 곳 : `멤버변수`, `메서드`, `초기화 블럭`

| 제어자 |   대상    |                             의미                             |
| :----: | :-------: | :----------------------------------------------------------: |
| static | 멤버 변수 | 모든 인스턴스에 공통적으로 사용되는 클래스 변수가 됨 / 클래스 변수는 인스턴스를 생성하지 않고도 사용 가능 / 클래스가 메모리에 로드될 때 생성 |
|        |  메서드   | 인스턴스를 생성하지 않고도 호출이 가능한 static 메서드가 됨 / static메서드 내에서는 인스턴스 멤버들을 직접 사용할 수 없음 |



# final - 마지막의, 변경될 수 없는

- 거의 모든 대상에 사용될 수 있음
- 변수에 사용되면 값을 변경할 수 없는 `상수`가 됨
- 메서드에 사용되면 `오버라이딩 할 수 없음`
- 클래스에 사용되면 `자손클래스를 정의하지 못함`

- final이 사용될 수 있는 곳 : `클래스` ,`메서드`, `멤버변수` ,`지역변수`

| 제어자 |      대상       |                             의미                             |
| :----: | :-------------: | :----------------------------------------------------------: |
| final  |     클래스      | 변경될 수 없는 클래스, 확장될 수 없는 클래스가 됨 / fianl로 지정된 클래스는 다른 클래스의 조상이 될 수 없음 |
|        |     메서드      | 변경될 수 없는 메서드 / final로 지정된 메서드는 오버라이딩을 통해 재정의 될 수 없음 |
|        | 멤버 / 지역변수 |    변수 앞에 final이 붙으면 값을 변경할 수 없는 상수가 됨    |



# abstract - 추상의, 미완성의

- 메서드의 선언부만 작성하고 실제 수행내용은 구현하지 않은 추상 메서드를 선언하는데 사용됨
- 클래스에 사용되어 클래스 내에 추상메서드가 존재한다는 것을 쉽게 알 수 있게 함

- abstract가 사용될 수 있는 곳 : `클래스`, `메서드`
- 추상 클래스는 미완성 설계도 이므로 인스턴스를 생성할 수 없음

|  제어자  |  대상  |                             의미                             |
| :------: | :----: | :----------------------------------------------------------: |
| abstract | 클래스 |        클래스 내에 추상 메서드가 선언되어 있음을 의미        |
|          | 메서드 | 선언부만 작성하고 구현부는 작성하지 않은 추상 메서드임을 알림 |



# 접근 제어자(access modifier)

- 멤버 또는 클래스에 사용되어 해당하는 멤버 또는 클래스를 외부에서 접근하지 못하도록 제한하는 역할을 함
- 접근제어자가 default임을 알리기위해서 default를 붙이지는 않음
- 클래스나 멤버변수, 메서드, 생성자에 접근 제어자가 지정되어 있지 않다면 접근제어자가 default임을 뜻함

> - 접근 제어자가 사용될 수 있는 곳 
>
> -->  클래스, 멤버변수, 메서드, 생성자

| 접근 제어자 |                                                              |
| :---------: | :----------------------------------------------------------: |
|   private   |                같은 클래스 내에서만 접근 가능                |
|   default   |                같은 패키지 내에서만 접근 가능                |
|  protected  | 같은 패키지 내에서, 그리고 다른 패키지의 자손 클래스에서 접근이 가능 |
|   public    |                    접근 제한이 전혀 없음                     |



> - 범위 넓은 쪽에서 좁은 쪽 순서
>
> **public**(접근 제한 x) > **protected**(같은 패키지 + 자손)  > (**default**)(같은 패키지) > **private**(같은 클래스)



# 다형성(polymorphism)

- 클래스들이 서로 상속관계에 있을 경우 조상 클래스 타입의 참조변수로 자손 클래스의 인스턴스를 참조하도록 하는 것도 가능

```java
Tv t = new CaptionTv(); // 인스턴스 타입 불일치. 조상 타입의 참조변수로 자손 인스턴스 참조 
```

- 위와 같이 사용할 경우 차마조변수 t로는 CaptionTv 인스턴스의 모든 멤버를 사용할 수 없음
- Tv 타입의 참조변수로는 CaptionTv인스턴스 중에서 Tv클래스의 멤버들(상속 받은 멤버 포함)만 사용할 수 있음
- 생성된 CaptionTv인스턴스 멤버 중에서 Tv클래스에 정의되지 않은 멤버 text와 caption()은 참조변수 t로 사용 불가능함

- 자손타입의 참조 변수로 조상 타입의 인스턴스 참조는 불가능

```java
CaptionTv c = new Tv(); // 에러 발생 

// 실제 인스턴스인 Tv멤버 개수 보다 참조 변수 c가 사용할 수 있는 멤버 개수가 더 많기 때문
```



# 참조변수의 형변환

- 서로 상속관계에 있는 클래스 사이에서만 참조변수 형변환 가능
- 자손 타입의 참조변수를 조상타입의 참조변수로 형변환 가능
- 조상타입의 참조변수를 자손타입의 참조변수로 형변환 가능
- 모든 참소변수는 모든 클래스의 조상인 Object클래스 타입으로 형변환 가능
- 서로 상속관계에 있는 타입간의 형변환은 양방향으로 자유롭게 수행될 수 있으나, 참조변수가 가리키는 인스턴스의 자손 타입으로 형변환은 허용되지 않음.  따라서 참조변수가 가리키는 인스턴스의 타입이 무엇인지 먼저 확인하는 것이 중요함

```java
class Car { }
class FireEngine extends Car { }
class Ambulance extends Car { }
```

```java
FireEngine f = new FireEngine();Car c = (Car)f; // 조상인 Car타입으로 형변환(생략가능)FireEngine f2 = (FireEngine)c ; // 자손인 FireEngine타입으로 형변환(생략불가)Ambulance a = (Ambulance)f; // 에러. 서로 상속관계가 아닌 클래스 간의 형변환 불가
```

```java
class EX7_7 {    public static void main(String args[]) {        Car car = null;        FireEngine fe = new FireEngine();        FireEngine fe2 = null;                fe.water();        car = fe; // car = (Car)fe;에서 형변환이 생략됨 / fe의 값을 Car에 저장        //car.water();        fe2 = (FireEngine)car; // 자손타입 <- 조상타입. 형변환 생략불가         fe2.water();    }}class Car {    String color;    int door;        void drive() { // 운전하는 기능        Syetem.out.println("drivie,  Brrrr~");    }        void stop() { // 멈추는 기능        System.out.println("stop!!!");    }}class FireEngine extends Car { // 소방차    void water(){ // 물을 뿌리는 기능        System.out.println("Water!!!");    }}water!!!water!!!
```



# instanceof 연산자

- 참조변수가 참조하고 있는 인스턴스의 실제 타입을 보기위해 사용하는 연산자
- 주로 조건문에 사용됨
- 왼쪽에는 참조변수, 오른쪽에는 타입(클래스명)이 피연산자로 위치
- 연산의 결과로 boolean값인 true / false중의 하나를 반환
- true : 참조변수가 검사한 타입으로 형변환이 가능하다는 뜻
- 값이 null인 참조변수에 대해 instanceof 연산을 수행하면 false를 결과로 얻음

```java
void doWork(Car c) {    if (c instanceof FireEngine) { // 1. 형변환이 가능한지 확인                FireEngine fe = (FireEngine)c; // 2. 형변환         fe.water();    }}
```



# 매개변수의 다형성

```java
class Product {    int  price; // 제품 구매 가격    int bonusPoint; // 제품 구매 시 제공하는 보너스 점수        Product(int price) {        this.price = price;        bonusPoint = (int)(price/10.0);    }}class Tv1 extends Product {    Tv1(){        //조상 클래스의 생성자 Product(int price)를 호출        super(100); // Tv의 가격을 100만원으로 초기화    }    //Object class의 toString을 오버라이딩    public String toString() { return "TV";}}class Computer extends Product {    Computer() { super(200); }    public String toString() { return "Computer"; }}class Buyer { //고객, 물건 사는사람	int money = 1000;    int bonusPoint = 0;       void buy(Product p) {       if(money < p.price) {           System.out.println("잔액이 부족하여 물건을 살 수 없습니다");           return;       }              money -= p.price; // 가진 돈에서 구입한 제품의 가격을 뺌       bonusPoint += p.bonusPoint; // 제품의 보너스 점수를 추가       System.out.println(p + "을/를 구입하셨습니다");   }}class EX7_8 {    public static void main(String args[]) {        Buyer b = new Buyer();                b.buy(new Tv1());         //Tv t = new Tv(); b.buy(t)；를 한 문장으로 줄이면 b.buy (new Tv()）가 됨        b.buy(new Computer());                System.out.println("현재 남은 돈은 " + b.money +"만원입니다" );        System.out.println("현재 보너스 점수는 " + b.bonusPoint +"점입니다" );    }}Tv을／를 구입하셨습니다． Computer을／를 구입하셨습니다． 현재 남은 돈은 700만원입니다． 현재 보너스점수는 30점입니다.
```



# 여러종류의 객체를 배열로 다루기

```java
Product p[] = new Product[3];p[0] = new Tv();p[1] = new Computer();p[2] = new Audio();
```

- 조상타입의 참조변수 배열을 사용하면, 공통의 조상을 가진 서로 다른 종류의 객체를 배열로 묶어서 다룰 수 있음
- 묶어서 다루고 싶은 객체들의 상속관계를 따져서 가장 가까운 공통조상 클래스 타입의 참조변수 배열을 생성해서 객체들을 저장하면 됨

```java
class Buyer { //고객, 물건 사는사람	int money = 1000;    int bonusPoint = 0;    Product[] cart = new Product[10];    int i = 0;       void but(Product p) {       if(money < p.price) {           System.out.println("잔액이 부족하여 물건을 살 수 없습니다");           return;       }              money -= p.price; // 가진 돈에서 구입한 제품의 가격을 뺌       bonusPoint += p.bonusPoint; // 제품의 보너스 점수를 추가       cart[i++] = p; // 제품을 Product[] cart에 저장       System.out.println(p + "을/를 구입하셨습니다");   }}
```

```java
class Product2 {    int  price; // 제품 구매 가격    int bonusPoint; // 제품 구매 시 제공하는 보너스 점수        Product(int price) {        this.price = price;        bonusPoint = (int)(price/10.0);    }        Product() {} //기본 생성자}class Tv2 extends Product2 {    Tv2(){        //조상 클래스의 생성자 Product(int price)를 호출        super(100); // Tv의 가격을 100만원으로 초기화    }    //Object class의 toString을 오버라이딩    public String toString() { return "TV";}}class Computer2 extends Product2 {    Computer2() { super(200); }    public String toString() { return "Computer"; }}class Audio2 extends Product2 {    Audio2(){ super(50); }    public String toString() { return "Audio"; }}class Buyer { //고객, 물건 사는사람	int money = 1000;    int bonusPoint = 0;    Product2[] cart = new Product2[10]; // 구입한 제품을 저장하기 위한 배열    int i = 0;       void buy(Produc2 p) {       if(money < p.price) {           System.out.println("잔액이 부족하여 물건을 살 수 없습니다");           return;       }              money -= p.price; // 가진 돈에서 구입한 제품의 가격을 뺌       bonusPoint += p.bonusPoint; // 제품의 보너스 점수를 추가       cart[i++] = p;       System.out.println(p + "을/를 구입하셨습니다");   }        void summart(){ // 구매한 물품에 대한 정보를 요약해서 보여줌        int sum = 0; // 구입한 물품의 가격 합계        String itemList=""; // 구입한 물품목록                // 반복문을 이용해서 궁비한 물품의 총 가격과 목록을 만듦        for(int i=0; i<cart.length; i++){            if(cart[i]==null) break;            sum += cart[i].price;            itemList += cart[i] + ", ";        }                System.out.println("구입하신 물품의 총금액은 "+sum+"만원입니다.");        System.out.println("구입하신 제품은 "+itemList+"입니다.");                }}class EX7_9 {    public static void main(String args[]) {        Buyer2 b = new Buyer2();                b.buy(new Tv2());        b.buy(new Computer2());        b.buy(new Audio2());        b.summary();        //Tv t = new Tv(); b.buy(t)；를 한 문장으로 줄이면 b.buy (new Tv()）가 됨    }}
```

- 근데, 위 코드처럼 하게되면 배열의 크기를 10개로 했기 때문에 11개 이상의 제품을 구입할 수 없음. 이럴때 `Vector 클래스`사용하면 됨
- Vector클래스는 내부적으로 Object타입의 배열을 가지고 있어서 이 배열에 객체를 추가하거나 제거할 수 있게 작성되어 있음
- Vector클래스는 배열의 크기를 알아서 관리해주기 때문에 저장할 인스턴스의 개수에 신경안써도 됨
- Vector클래스는 동적으로 크기가 관리되는 객체배열일 뿐임 (클래스 기능x)

```java
public class Vector extends AbstractList implements List, Cloneable, java.io.Serializable {    protected Object elementData[];    ...}
```



# 추상 클래스(abstract class)

- 추상클래스는 인스턴스를 생성할 수 없음
- 추상클래스는 상속을 통해서 자손 클래스에 의해서만 완성될 수 있음
- 추상클래스 자체로는 클래스로서 역할을 다 못하지만, 새로운 클래스를 작성하는데 있어서 바탕이되는 조상클래스로서 중요한 의미를 갖음
- 키워드 `abstract`을 붙이기만 하면 됨
- 클래스 선언부의 `abstract`를 보고 추상메서드가 있으니 상속을 통해서 구현해줘야 한다는 것을 생각할 수 있음

- 추상클래스에도 생성자가 있고 멤버변수와 메서드도 가질 수 있음

```java
abstract class 클래스 이름 {    ...}
```



# 추상메서드

- 추상메서드 : 선언부만 작성하고 구현부는 작성하지 않은채로 남겨둔 것
- 구현부를 남겨둔 이유는 , 메서드의 내용이 상속받는 클래스에 따라 달라질 수 있기 때문에 조상 클래스에서는 선언부만 작성하고, 주석을 덧붙여 어떤 기능을 수행할 목적으로 작성되었는지 아라려주고, 실제 내용은 상속받은 클래스에서 구현하도록 비워두는 것
- 추상메서드도 추상 클래스와 마찬가지로 키워드 `abstract`만 적어주면 됨
- 추상메서드는 구현부가 없으므로 괄호 `{}`대신 문장의 끝을 알리는 `;`를 적어줌

```java
abstract 리턴타입 메서드이름();
```

- 추상클래스로부터 상속받은 자손클래스는 오버라이딩을 통해 조상인 추상클래스의 추상메서드를 모두 구현해줘야 하며, 상속받은 추상메서드 중 하나라도 구현하지 않는다면 자손클래스도 abstract를 사용하여 추상클래스로 지정해줘야 함

```java
abstract class Player { // 추상클래스    abstract void play(int pos); //추상메서드    abstract void stop(); // 추상메서드}class AudioPlayer extends Player {    void play(int pos) { /* 내용생략 */ } // 추상메서드를 구현    void stop() { /* 내용생략 */ } // 추상메서드를 구현}abstract class AbstractPlayer extends Player {    void play(int pos) { /* 내용생략 */ } // 추상메서드를 구현}
```



# 추상클래스의 작성

- 기존 클래스의 공통부분을 뽑아내서 조상클래스를 만드는 것

```java
//추상 클래스 이용 xclass Marine { // 보병    int x, y; // 현재 위치    void move(int x, int y) { /* 지정된 위치로 이동 */ }    void stop() { /* 현재 위치에 정지 */ }     void stimPack() { /* 스팀팩을 사용 */ } }class Tanck { // 탱크    int x, y ; // 현재 위치    void move(int x, int y) { /* 지정된 위치로 이동 */ }     void stop() { /* 현재 위치에 정지 */ }     void changeMode() { /* 공격모드를 변환 */ } }class Dropship {    int x, y;    void move(int x, int y) { /* 지정된 위치로 이동 */ }    void stop() { /* 현재 위치에 정지 */ }    void stop() { /* 현재 위치에 정지 */ }     void load() { /* 선택된 대상을 태움 */ }     void unload() { /* 선택된 대상을 내림 */ } }
```

```java
// 위의 코드를 추상 클래스 사용함abstract class Unit {    int x, y;    abstract void move(int x, int y);    void stop()}class Marine extends Unit {    void move(int x, int y){ /* 지정된 위치로 이동 */ }    void  stimPack() { /* 스팀팩을 사용 */ }}class Tanck extends Unit {    void move(int x, int y){ /* 지정된 위치로 이동 */ }    void changeMode() { /* 공격모드를 변환 */ }}class Dropship extends Unit {    void move(int x, int y){ /* 지정된 위치로 이동 */ }    void load() { /* 선택된 대상을 태움 */ }     void unload() { /* 선택된 대상을 내림 */ } }
```

- move 메서드는 구현 부분은 달라질 수 있지만, 선언부는 공통적이므로 추상메서드로 정의할 수있음



```java
public class EX7_10 {    public static void main(String[] args) {        Unit[] group = { new Marine(), new Tank(), new DropShip() };               /*        Unit[] group = new Unit[3]; 		group[0] = new Marine(); 		group[l] = new Tank(); 		group[2] = new DropShip();         */                for(int i=0; i <group.length; i++){            group[i].move(100,200); // Unit배열의 모든 유닛을 좌표（100. 200）의 위치로 이동        }    }}abstract class Unit {    int x, y;    abstract void move(int x, int y);    void stop()}class Marine extends Unit {    void move(int x, int y){         System.out.println("Marin[x=" + x +", y=" + y+"]");     }        void  stimPack() { /* 스팀팩을 사용 */ }}class Tanck extends Unit {    void move(int x, int y){         System.out.println("Tank[x=" + x + ", y=" + y +"]");    }        void changeMode() { /* 공격모드를 변환 */ }}class Dropship extends Unit {    void move(int x, int y){     	System.out.println("Dropship[x=" + x + ", y=" + y +"]");    }        void load() { /* 선택된 대상을 태움 */ }     void unload() { /* 선택된 대상을 내림 */ } }
```



# 인터페이스

- 일종의 추상클래스 
- 인터페이스는 추상클래스보다 추상화 정도가 높아서 일반 메서드 또는 멤버 변수를 구성원으로 가질 수 없음
- 오직 추상메서드와 상수만을 멤버로 가질 수 있음
- 키워드로 `interface`사용
- 접근 제어자로 `public`과 `default`사용
- 모든 멤버변수는 `public static final`이어야 하고 이를 생략할 수 있음
- 모든 메서드는 `public abstract`이어야 하고 이를 생략할 수 있음(단, static메서드와 디폴트 메서드는 예외  jdk1.8부터) 

```java
interface 인터페이스이름 {    public static final 타입 상수이름 = 값;    public abstract 메서드 이름(매개변수 목록);}
```



# 인터페이스 상속

- 인터페이스는 인터페이스로부터만 상속받을 수 있음
- 클래스와 달리 다중상속 가능

```java
interface Movable {    void move(int x, int y);}interface Attackable {    void attack(Unit u);}interface Fightable extends Movable, Attackable {}
```



# 인터페이스의 구현

- 추상클래스처럼 그 자체로는 인스턴스 생성 불가능
- 인터페이스도 자신에 정의된 추상메서드의 몸통을 만들어주는 클래스를 작성해야하는데, 확장한다는 의미인 `extends`를 사용하지 않고 구현한다는 의미인`implements`를 사용함

```java
class 클래스이름 implements 인터페이스이름 {    // 인터페이스에 정의된 추상메서드를 모두 구현해야함}class Fighter implements Fightable {    public void move(int x, int y){ /* 내용 생략 */ }    public void attack(Unit u) { /* 내용 생략 */ }}
```

- 만일 구현하는 인터페이스의 메서드 중 일부만 구현한다면, abstract를 붙여서 추상클래스로 선언해야함

```java
abstract class Fighter implements Fightable {    public void move(int x, int y){ /* 내용 생략 */ }}
```

```java
// 상속과 구현을 동시에 하는 것도 가능class Fighter extends Unit implements Fightable {    public void move(int x, int y){ /* 내용 생략 */ }    public void attack(Unit u) { /* 내용 생략 */ }}
```



# 인터페이스를 이용한 다형성

- 자손클래스의 인스턴스를 조상타입의 참조변수로 참조하는 것이 가능함(앞에 다형성 부분 참고)
- 인터페이스 역시 구현한 클래스의 조상이라고 할 수 있으므로 인터페이스 타입의 참조변수로 이를 구현한 클래스의 인스턴스를 참조할 수 있으며, 인터페이스 타입으로의 형변환도 가능함

```java
// 인터페이스 Fightable을 클래스 Fighter가 구현했을 때, 다음과 같이 Fighter인스턴스를 Fightable타입의 참조변수로 참조하는 것이 가능Fightable f = (Fightable)new Fighter();또는  Fightable f = new Fighter();
```



- 인터페이스는 다음과 같이 메서드의 매개변수 타입으로도 사용될 수 있음

```java
void attack(Fightable f) {    //...}
```



- 메서드의 리턴 타입으로 인터페이스를 지정하는 것도 가능

```java
Fightable method() { // 리턴 타입으로 인터페이스 지정(Fightable)    ...    Fighter f = new Fighter();    return f;}// 리턴 타입이 인터페이스라는 것은 메서드가 해당 인터페이스를 구현한 클래스의 인스턴스를 반환한다는 것을 의미 !! 꼭 외우기 !! 
```



# 인터페이스의 장점

1. 개발시간을 단축시킬 수 있다.
2. 표준화가 가능하다.
3. 서로 관계없는 클래스들에게 관계를 맺어줄 수 있다.
4. 독립적인 프로그래밍이 가능하다.



# 디폴트 메서드와  static 메서드

- 원래는 인터페이스에 추상 메서드만 선언할 수 있는데 JDK 1.8부터 디폴트 메서드와 static메서드도 추가할 수 있게 됨
- **디폴트 메서드** : 추상메서드의 기본적인 구현을 제공하는 메서드.  추상메서드가 아니기 때문에 디폴트 메서드가 새로 추가되어도 해당 인터페이스를 구현한 클래스를 변경하지 않아도 됨
  - 키워드 `default`사용 
  - 추상 메서드와 달리 몸통 `{}`있어야함
  - 디폴트 메서드 역시 접근제어자는 `public` 이며 생략 가능함
  - 새로 추가된 디폴트 메서드가 기존의 메서드와 이름이 중복되어 충돌하는 경우가 발생함
    - 1. 여러 인터페이스의 디폴트 메서드 간의 충돌 : 인터페이스를 구현한 클래스에서 디폴트 메서드를 오버라이딩 해야함
      2. 디폴트 메서드와 조상 클래스의 메서드간 충돌 : 조상클래스의 메서드가 상속되고 디폴트 메서드는 무시됨

```java
interface MyInterface {    void method();    void newMethod(); // 추상메서드}↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓    interface MyInterface {    void method();    default void newMethod(){}}
```

```java
class EX7_11 {    public static void main(String[] args) {        Child3 c = new Child();        c.method1();        c.method2();        MyInterface.staticMethod();        MyInterface2.staticMethod();    }}class Child3 extends Parent3 implements MyInterface, MyInterface2 {    public void method1(){        System.out.println("method1() in Child3"); //오버라이딩    }}class Parent3 {    public void method2() {        System.out.println("method2() in Parent3");    }}interface MyInterface {    default void method1() {       System.out.println("method1() in MyInterface ");     }        default void method2() {        System.out.println("method2() in MyInterface");    }        static void staticMethod() {        System.out.println("staticMethod() in MyInterface");    }}interface MyInterface2 {    default void method1() {       System.out.println("method1() in MyInterface ");     }        static void staticMethod() {        System.out.println("staticMethod() in MyInterface2");    }}
```



# 내부 클래스(inner class)

- **내부 클래스** : 클래스 내에 선언된 클래스
  - 내부클래스에서 외부클래스의 멤버들을 쉽게 접근할 수 있음
  - 코드의 복잡성을 줄일 수 있음(캡슐화)

```java
class A {    ...}class B {    ...}↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓class A { // 외부 클래스    ...            class B { // 내부 클래스        ...    }        ...}
```



# 내부 클래스의 종류와 특징

|        내부 클래스 종류         |                             특징                             |
| :-----------------------------: | :----------------------------------------------------------: |
| 인스턴스 클래스(instance class) | 외부 클래스의 멤버변수 선언위치에 선언하며 , 외부 클래스의 인스턴스멤버처럼 다루어진다. 주로 외부 클래스의 인스턴스 멤버들과 관련된 작업에 사용될 목적으로 선언된다. |
|   스태틱 클래스(static class)   | 외부 클래스의 멤버변수 선언위치에 선언하며, 외부 클래스의 static멤버처럼 다루어진다. 주로 외부 클래스의 static멤버, 특히 static메서드에 사용될 목적으로 선언된다. |
|    지역 클래스(local class)     | 외부 클래스의 메서드나 초기화블럭 안에 선언하며, 선언된 영역 내부에서만 사용될 수 있다. |
|  익명 클래스(anonymous class)   | 클래스의 선언과 객체의 생성을 동시에 하는 이름없는 클래스(일회용) |



# 내부 클래스의 선언

```java
class Outer {    int iv = 0;    static int cv = 0;        void myMethod() {        int lv = 0;    }}// 내부 클래스 선언class Outer {    class InstanceInner {} // 인스턴스 클래스    static class StaticInner{} // 스태틱 클라스        void myMethod(){        class LocalInner{} // 지역 클래스    }}
```



# 내부 클래스의 제어자와 접근성

- 위의 코드에서 인스턴스클래스 , 스태틱 클래스는 외부클래스(Outer)의 멤버변수(인스턴스 변수, 스태틱 변수)와 같은 위치에 선언된 것을 알 수 있음
- 인스턴스 멤버와 스태틱멤버 간의 규칙이 내부클래스에도 똑같이 적용됨
- 내부 클래스도 클래스이기 때문에 abstract나 final과 같은 제어자를 사용할 수 있고, 멤버 변수들처럼 private, protected와 같은 접근 제어자도 사용가능



```java
class EX7_12 {    class InstanceInner {        int iv = 100;      //static int cv = 100;  // 에러 , static변수를 선언할 수 없음        final static int CONST = 100; // final static은 상수이므로 허용    }            static class StaticInner {        int iv = 200;        static int cv = 200; // static클래스만 static멤버를 정의할 수 있음    }        void myMethod(){        class LocalInner {            int iv = 300;          //static int cv = 300;  // 에러 , static변수를 선언할 수 없음            final static int CONST = 300; // final static은 상수이므로 허용        }    }    public static void main(String[] agrs) {        System.out.println(InstanceInner.CONST);        System.out.println(StaticInner.cv);    }}
```

- 내부 클래스 중에서 static 클래스만 static멤버를 가질 수 있음
  - final과 static이 동시에 붙은 변수는 `상수`이므로 모든 내부클래스에서 정의 가능함



```java
class EX7_13 {    class InstanceInner {}    static class StaticInner {}        InstanceInner iv = new InstanceInner(); // 인스턴스 멤버간에는 서로 직접 접근 가능    static StaticInner cv = new StaticInner(); // static멤버 간에는 서로 직접 접근 가능        static void staticMethod(){        StaticInner obj2 = new StaticInner();      //InstanceInner obj1 = new StaticInner(); // static멤버는 인스턴스 멤버에 직접 접근 x            //굳이 접근하려면 아래와 같이 객체를 생성해야함      // 인스턴스클래스는 외부 클래스를 먼저 생성해야만 생성할 수있음        EX7_13 outer = new EX7_13();        InstanceInner obj1 = Outer.new InstanceInner();    }        void intanceMethod() {        // 인스턴스메서드에서는 인스턴스 메서드와 static멤버 모두 접근 가능함        InstanceInner obj1 = new InstanceInner();        StaticInner obj2 = new StaticInner();              // 메서드 내에 지역적으로 선언된 내부 클래스는 외부에서 접근할 수 없음      //LocalInner lv = new LocalInner();    }        void myMethod(){        class LocalInner {}        LocalInner lv = new LocalInner();    }}
```

- 인스턴스멤버는 같은 클래스에 있는 인스턴스 멤버와 static멤버 모두 직접 호출이 가능
- 인스턴스 클래스는 외부 클래스의 인스턴스를 인스턴스 멤버를 객체 생성없이 바로 사용할 수 있지만, static클래스는 외부 클래스의 인스턴스 멤버를 객체 생성없이 사용할 수 없음



```java
class Outer {    private int outerIv = 0;    static int outerCv = 0;        class InstanceInner {        int iiv = outerIv; // 외부 클래스의 private멤버도 접근이 가능함        int iiv2 = outerCv;    }        static class StaticInner {        // 스태틱 클래스는 외부의 인스턴스 멤버에 접근할 수 x        // int siv = outerIv;        static int scv = outerCv;    }        void myMethod(){        int lv = 0;        final int LV = 0; // JDK1.8부터 final 생략 가능                class LocalInner {            int liv = outerIv;            int liv2 = outerCv;            //외부 클래스의 지역변수는 final이 붙은 변수(상수)만 접근 가능            //int liv3 = lv;  원래는 에러나는데, JDK1.8부터 에러 아님             int liv4 = LV;        }    }}
```

- 인스턴스 클래스는 외부 클래스(Outer)의 인스턴스 멤버이기 때문에 인스턴수변수 outerIv와 , static변수 outerCv를 모두 사용할 수 있음
  - 접근제어자가 private이라도 접근가능
- StaticInner은 외부클래스(Outer)의 static멤버이기 때문에 외부클래스의 인스턴스 멤버인 outerIv와 InstanceInner을 사용할 수 없음. static멤버인 outerCv와 StaticInner만 접근 가능(사용 가능)
- 지역 클래스(LocalInner)는 외부 클래스의 인스턴스 멤버와 static멤버를 모두 사용할 수 있으며, 지역 클래스가 포함된 메서드에 정의된 지역변수도 사용할 수 있음
  - 단, final이 붙은 지역변수만 접근 가능(JDK1.8부터 가능) (책 276p)



```java
class Outer2 {    class InstanceInner {        int iv = 100;    }        static class StaticInner {        int iv = 200;        static int cv = 300;    }        void myMethod(){        class LocalInner {            int iv = 400;        }    }}class EX7_15 {    public static void main(String[] args) {        // 인스턴스클래스의 인스턴스를 생성하려면        // 외부 클래스의 인스턴스를 먼저 생성해야함        Outer2 oc = new Outer2();        Outer2.InstanceInner ii = oc.new InstanceInner();                System.out.println("ii.iv : "+ ii.iv);        System.out.println("Outer2.StaticInner.cv : " + Outer2.StaticInner.cv );                //스태틱 내부 클래스의 인스턴스는 외부클래스를 먼저 생성하지 않아도 됨        Outer2.StaticInner si = new Outer.StaticInner();        System.out.println("si.iv : "+ si.iv);    }}
```



```java
class Outer3 {    int value = 10; // Outer3.this.value        class Inner {        int value = 20; // this.value                void method1() {            int value = 30;            System.out.println("value :" + value);            System.out.println("this.value : "+ this.value);            System.out.println("Outer3.this.value : " + Outer3.this.value);        }    } // Inner 클래스의 끝} // Outer3 클래스의 끝class EX7_16 {    public static void main(String[] agrs) {        Outer3 outer = new Outer3(); // 인스턴스클래스의 인스턴스를 생성하려면 외부 클래스의 인스턴스를 먼저 생성해야함        Outer3.Inner inner = outer.new Inner();        inner.method1();    }}
```

- 내부 클래스와 외부 클래스에 선언된 변수의 이름이 같을 때 변수 앞에 `this` 또는 `외부 클래스명.this`를 붙여서 서로 구별할 수 있음



# 익명 클래스(anonymous class)

- 클래스의 선언과 객체의 생성을 동시에 하기 때문에 단 한번만 사용될 수 있음
- 오직 하나의 객체만을 생성할 수 있는 일회용 클래스
- 이름이 없음

```java
new 조상클래스이름() {    // 멤버 선언}또는new 구현인터페이스이름() {    // 멤버 선언}
```

- 이름이 없기 때문에 생성자도 가질 수 없음
- 단 하나의 클래스를 상속받거나 단 하나의 인터페이스만 구현할 수 있음



```java
class EX7_17 {    Object iv = new Object() { void method(){} }; // 익명 클래스    static Object cv = new Object(){ void method(){} }; // 익명 클래스        void myMethod() {        Object lv = new Object() { void method() {} }; // 익명 클래스    }}
```



```java
import java.awt.*;import java.awt.event.*;class EX7_18 {    public static void main(String[] agrs) {        Button b = new Button("Start");        b.addActionListner(new EventHandnler());    }}class EventHandler implements ActionListener {    public void actionPerformed(ActionEvent e) {        System.out.println("ActionEvent occured!!!");    }}
```

- 위 예제를 실행하면 아무것도 화면에 안나타남. 단지 익명클래스로 변환하는 예를 보여줌



```java
import java.awt.*;import java.awt.event.*;class EX7_19 {    public static void main(String[] agrs) {        Button b = new Button("Start");        b.addActionListner(new EventHandnler() {            public void actionPerformed(ActionEvent e) {                System.out.println("ActionEvent occured!!!");            }         } // 익명 클래스 끝      );     } // main의 끝 }
```

- 예제 7-18을 익명클래스를 이용해서 변경한 것이 예제 7-19
  - 먼저 독립된 클래스를 작성한 다음에 익명클래스를 이용하여 변경하면 쉽게 코드를 작성할 수 있음



---

Java의 정석 기초편 | 남궁성 | 도우출판









---

Java의 정석 기초편 | 남궁성 | 도우출판