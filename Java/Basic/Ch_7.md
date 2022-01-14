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
   - 접근 제어자의 접근범위 좁은 순 : public , protected, (defualt), private
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













---

Java의 정석 기초편 | 남궁성 | 도우출판