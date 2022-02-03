- java.lang 패키지는 import문 없이도 사용 가능

# Object 클래스

- Object 클래스는 모든 클래스의 최고 조상이기 때문에 Object 클래스의 멤버들은 모든 클래스에서 바로 사용 가능

---

### - Object 클래스의 메서드 - equals()

- 매개변수로 객체의 참조변수를 받아서 비교하여 그 결과를 boolean값으로 알려주는 역할을 함

```java
class EX9_1 {
    public static void main(String[] args) {
        Value v1 = new Value(10);
        Value v2 = new Value(10);
        
        if (v1.equals(v2)) {
            System.out.println("v1과 v2는 같습니다.");
        } else {
            System.out.println("v1과 v2는 다릅니다.");
        }
    }
}

class Value {
    int value;
    
    Value(int value) {
        this.value = value;
    }
}

v1과 v2는 다릅니다.
// equals 메서드는 주소값으로 비교를 하기 때문에 false가 나옴 
```



- equals 메서드는 결국 두개의 참조변수가 같은 객체를 참조하고 있는지, 즉 두 참조변수에 저장된 값(주소값)이 같은지 판단하는 기능만 할 수 있음
- equals 메서드로 Value 인스턴스가 가지고 있는 value값을 비교하도록 하려면 Value클래스에서 equals메서드를 오버라이딩하여 주소가 아닌 객체에 저장된 내용을 비교하도록 변경하면 됨 

```java
class Person {
    long id;
    public boolean equals(Object obj) {
        if (obj instanceof Person)
            return id == ((Person)obj).id; 
        // obj가 Object타입이므로 id값을 참조하기 위해서는 Person 타입의 형변환 필요 
        else
            return false;
    }
    Person(long id) {
        this.id = id;
    }
}

class EX9_2 {
    public static void main(String[] args) {
        Person p1 = new Person(8011081111222L);
        Person p2 = new Person(8011081111222L);
        
        if (p1.equals(p2)) {
            System.out.println("p1과 p2는 같습니다.");
        } else {
            System.out.println("p1과 p2는 다릅니다.");
        }
    }
}
```



---

### - Object 클래스의 메서드 - hashCode()

- 해싱 기법에 사용되는 `해시함수(hash function)`을 구현
- 해싱 : 데이터관리기법 중 하나로 다량의 데이터를 저장하고 검색하는데 유용
- 해시 함수는 찾고자 하는 값을 입력하면 , 그 값이 저장된 위치를 알려주는 해시코드를 반환
- hashCode 메서드에서는 객체의 주소값을 이용해서 해시코드를 만들어 반환하기 때문에 서로 다른 두 객체는 결코 같은 해시코드를 가질 수 없음



```java
class EX9_3 {
    public static void main(String[] args) {
        String str1 = new String("abc");
        String str2 = new String("abc");
        
        System.out.println(str1.equals(str2));
        System.out.println(str1.hashCode());
        System.out.println(str2.hashCode());
        System.out.println(System.identityHashCode(str1));
        System.out.println(System.identityHashCode(str2));
        
    }
}
true
96354
96354
27134973
1284693
```

- String 클래스는 문자열의 내용이 같으면, 동일한 해시코드를 반환하도록 hashCode메서드가 오버라이딩 되어 있기 때문에 문자열의 내용이 같은 str1과 str2에 대해 hashCode()를 호출하면 항상 동일한 해시코드 값을 얻음

- `System.identityHashCode(Object x)`는 Object 클래스의 hashCode메서드처럼 객체의 주소값으로 해시코드를 생성하기 때문에 모든 객체에 대해 항상 다른 해시코드값을 반환할 것을 보장
- str1과  str2가 해시코드는 같지만 서로 다른 객체라는 것을 알 수 있음



---

### -  Object 클래스의 메서드 - toString()

- 인스턴스에 대한 정보를 문자열(String)로 제공할 목적
  - 인스턴스의 정보를 제공한다는 것은 , 대부분의 경우 인스턴스 변수에 저장된 값들을 문자열로 표현한다는 뜻

```java
class Card {
    String kind;
    int number;
    
    Card() {
        this("SPADE", 1);
    }
    
    Card(String kind, int number){
        this.kind = kind;
        this.number = number;
    }
}

class EX9_4 {
    public static void main(String[] args) {
        Card c1 = new Card();
        Card c2 = new Card();
        
        System.out.println(c1.toSting());
        System.out.println(c2.toSting());
    
    }
}
Card@19e0bfd
Card@139a55
// Card클래스에서 Object클래스로부터 상속받은 toString을 오버라이딩 하지 않아 
// Card인스턴스에 toString을 호출하면 Object클래스의 toString()이 호출되어 '클래스이름@16진수의 해시코드'를 얻게 됨
```



---

### - toString()의 오버라이딩

- String클래스의 toString()은 String인스턴스가 갖고있는 문자열을 반환하도록 오버라이딩 되어 있음
- Date 클래스인경우 Date 인스턴스가 갖고있는 날짜와 시간을 문자열로 변환하여 반환하도록 오버라이딩 되어 있음

```java
class Card2 {
    String kind;
    int number;
    
    Card2(){
        this("SPADE", 1);
    }
    
    Card2(String kind, int number) {
        this.kind = kind;
        this.number = number;
    }
    
    public String toString() {
        return "kind : " + kind +", number : " + number;
    }
}

class EX9_5 {
    public static void main(String[] args) {
        Card2 c1 = new Card2();
        Card2 c2 = new Card2("Heart", 10);
        
        System.out.println(c1.toSting());
        System.out.println(c2.toSting());
    
    }
}

kind : SPADE, number : 1 
kind : HEART, number : 10
```

- Card2 인스턴스의 toString()을 호출하면 인스턴스가 갖고 있는 인스턴스변수 kind와 number의 값을 문자열로 변환하여 반환하도록 toString을 오버라이딩 함
- Object 클래스에 정의된 toString()의 접근제어자가 public이므로 Card2클래스의 toString()의 접근제어자도 public으로 함



# - String 클래스

- 문자열을 저장하고 이를 다루는데 필요한 메서드를 함께 제공

- String 클래스는 앞에 final이 붙어 있으므로 다른 클래스의 조상이 될 수 없음 

---

### - 변경 불가능한(immutable) 클래스 

- 한번 생성된 String 인스턴스가 갖고 있는 문자열은 읽어올 수 만 있고 변경할 수 없음
- `+`연산자로 문자열을 결합하는 경우 , 인스턴스 내의 문자열이 변경되는 것이 아니라 새로운 문자열이 담긴 String 인스턴스가 생성되는 것
  - `+`연산자로 문자열을 결합하는 것은 연산 시 새로운 문자열을 가진 String 인스턴스가 생성되어 메모리 공간을 차지하게 되므로 가능한 한 결합 횟수를 줄이는 것이 좋음
- 문자열 간의 결합니다 추출 등 문자열을 다루는 작업이 많이 필요한 경우 `StringBuffer`클래스를 사용하는 것이 좋음
  - `StringBuffer`인스턴스에 저장된 문자열은 변경이 가능하고, 하나의 인스턴스만으로도 문자열을 다루는 것이 가능



### - 문자열(String)의 비교

- `String str1 = "abc" ` : 문자열 리터럴 "abc"의 주소가 str1에 저장됨
  - 이미 존재하는 것을 재사용
- `String str2 = new String("abc")` : 새로운 String인스턴스를 생성
  - 생성자를 이용한 경우에는 new 연산자에 의해서 메모리 할당이 이루어지기 때문에 항상 새로운 String 인스턴스가 생성됨

```java
class EX9_6 {
    public static void main(String[] args) {
        String str1 = "abc";
        String str2 = "abc";
        System.out.println("String str1 = \"abc\";");
        System.out.println("String str2 = \"abc\";");
        
        System.out.println("str1 == str2 ? " + (str1 == str2)); // true
		System.out.println("str1.equals(str2) ? " + str1.equals(str2)); // true
        System.out.println();
        
        String str3 = new String("abc");
        String str4 = new String("abc");
        
        System.out.println("String str3 = new String(\"abc\");");
        System.out.println("String str4 = new String(\"abc\");");
        
        System.out.println("str3 == str4 ? " + (str3 == str4)); // false
		System.out.println("str3.equals(str4) ? " + str3.equals(str4)); // true     
    }
}
```



### - 문자열 리터럴(String 리터럴)

- 자바 소스파일에 포함된 모든 문자열 리터럴은 컴파일 시에 클래스 파일에 저장됨
- 같은 내용의 문자열은 한번만 저장됨

```java
class EX9_7 {
    public static void main(String[] args) {
    	String s1 = "AAA";
        String s2 = "AAA";
        String s3 = "AAA";
        String s4 = "BBB";
    }
}
```



### - 빈 문자열(empty string)

- `String s = "";`과 같은 문장이 있을 때 참조 변수 s가 참조하고 있는 String 인스턴스는 내부에 `new char[0]`과 같이 길이가 0인 char형 배열을 저장하고 있는 것
- `char [] chArr = new char[0]` : 길이가 0인 char 배열
- `int[] iArr = {}` : 길이가 0인 int 배열 

```java
class EX9_8 {
    public static void main(String[] args) {
        char[] cArr = new char[0]; // char[] cArr = {}와 같음
        String s = new String(cArr); // String s = new String("")와 같음 
        
        System.out.println("cArr.length=" + cArr.length);
        System.out.println("@@@"+s+"@@@");
    }
}
```

- 길이가 0인 배열을 생성해서 char형 배열 참조변수 cArr을 초기화 해줌
- 생성된 배열의 주소값이 참조변수 cArr에 저장됨



# join()과 StringJoiner

- join() : 여러 문자열 사이에 구분자를 넣어서 결합

```java
import java.util.StringJoiner;

class EX9_9 {
    public static void main(String[] args) {
        String animals = "dog,cat,bear";
        String[] arr = animals.split(",");
        
        System.out.println(String.join("-", arr));
        
        StringJoiner sj = new StringJoiner("/", "[" , "]");
        for(String s : arr)
            sj.add(s);
        System.out.println(sj.toString());
    }
}

dog-cat-bear
[dog/cat/bear]
```



# 문자열과 기본형 간의 변환

- 기본형을 문자열로 변경하려면 빈 문자열 `""`을 더해주기만 하면 됨
- 위 방법 외에도 valueOf()를 사용 하면 됨 (성능은 더 좋음)

```java
int i = 100;
String str1 = i + ""; // 100을 "100"으로 변환
String str2 = String.valueof(i); // 100을 "100"으로 변환
```



- 문자열을 기본형으로 변경하려면 `valueOf()`를 사용하거나 `parseInt`를 사용하면 됨

```java
int i = Integer.parseInt("100");
int i2 = Integer.valueOf("100") // 원래는 반환타입이 Innteger인데, 오토박싱에 의해 Integer가 자동으로 int로  자동변환됨
```



```java
class EX9_10 {
    public static void main(String[] args) {
        int iVal = 100;
        String strVal = String.valueOf(iVal); 
        
        double dVal = 200.0;
        String strVal2 = dVal + "";
        
        double sum = Integer.parseInt("+" + strVal) + Double.parseDdouble(strVal2);
        double sum2 = Integer.valueOf(strVal) + Double.valueOf(strVal2);
        
        System.out.println(String.join("", strVal, "+", strVal2, "=") + sum);
        System.out.println(strVal+ "+" + strVal12 + "=" + sum2);
    }
}
```



# StringBuffer 클래스 

- StringBuffer클래스는 인스턴스를 생성할 때 지정된 문자열을 변경할 수 있음
- StringBuffer클래스는 인스턴스를 생성할 때 문자열 편집을 위한 버퍼의 크기를 지정할 수 있음
  - 크기를 지정해주지 않으면 16개의 문자를 저장할 수 있는 크기의 버퍼를 생성
- `append()`는 반환 타입이 StringBuffer이고 자신의 주소를 반환 함
- String 클래스에서는 `equals`메서드를 오버라이딩해서 문자열의 내용을 비교하도록 구현되어 있는데, StringBuffer에서는 equals메서드를 오버라이딩 하지 않아서 `==`와 비교한 것과 같은 결과를 얻음
  - StringBuffer 인스턴스에 담긴 문자열을 비교하기 위해서는 StringBuffer 인스턴스에 toString()을 호출해서 String 인스턴스를 얻은 다음 , 여기에 equals메서드를 사용해서 비교해야함

- toString()은 오버라이딩되어 있어서 StringBuffer 인스턴스에 toString()을 호출하면 담고 있는 문자열을 String으로 반환

```java
class EX9_11 {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("abc");
        StringBuffer sb2 = new StringBuffer("abc");
        
        System.out.println("sb == sb2 ? " + (sb == sb1));
        System.out.println("sb.equals(sb2) ? " + sb.equals(sb2));
        
        String s = sb.toString(); // StringBuffer의 내용을 String으로 변환
        // String s = new String(sb); 와 같음 
        String s2 = sb2.toString(); // StringBuffer의 내용을 String으로 변환
        System.out.println("s.equals(s2) ? " + s.equals(s2));
    }
}

sb = sb2 ? false
sb.equals(sb2) ? false
s.equals(s2) ? true
```

```java
class EX9_12 {
    public static void main(String[] args) {
        StringBuffer sb = new StringBuffer("01");
        StringBuffer sb2 = new StringBuffer(23);
        sb.append('4').append(56);
        
        StringBuffer sb3 = sb.append(78);
        sb3.append(9.0);
        
        System.out.println("sb=" + sb);
        System.out.println("sb2=" + sb2);
        System.out.println("sb3=" + sb3);
        
        System.out.println("sb=" + sb.deleteCharAt(10));
        System.out.println("sb=" + sb.delete(3,6));
        System.out.println("sb=" + sb.insert(3,"abc"));
        System.out.println("sb=" + sb.replace(6, sb.length(), "END"));
        
        System.out.println("capacity=" + sb.capacity());
        System.out.println("length=" + sb.length());
    }
}
```



# String Buiilder

- 멀티 쓰레드로 작성된 프로그램이 아닌경우 StringBuffer의 동기화는 불필요하게 성능만 떨어뜨림
- StringBuffer에서 쓰레드의 동기화만 뺀 StringBuilder가 나옴
- StringBuffer자리에 StringBuilder만 작성하면 됨 (StringBuffer타입의 참조 변수를 선언한 부분과 StringBuffer의 생성자만 바꾸면 됨)



# Math 메서드

```java
import static java.lang.Math.*;
import static java.lang.System.*;

class EX9_13 {
    public static void main(String[] args) {
		double val = 90.7552;
        out.println("round(" + val + ")=" + round(val)); //반올림
        
        val *= 100;
        out.println("round(" + val + ")=" + round(val)); // 반올림
        
        out.println("round(" + val + ")/100 =" + round(val)/100); // 반올림
        out.println("round(" + val + ")/100.0 =" + round(val)/100.0); // 반올림
        out.println();
        out.printf("ceil(%3.1f)=%3.1f%n", 1.1, ceil(1.1)); // 올림
        out.printf("floor(%3.1f)=%3.1f%n", 1.5, floor(1.5)); // 버림
        out.printf("round(%3.1f)=%d%n", 1.1, round(1.1)); // 반올림 , 반환값 int형
        out.printf("round(%3.1f)=%d%n", 1.5, round(1.5)); // 반올림
        out.printf("rint(%3.1f)=%f%n", 1.5, rint(1.5)); // 반올림 , 반환값 double형
        out.printf("round(%3.1f)=%d%n", -1.5, round(-1.5)); // 반올림
        out.printf("rint(%3.1f)=%f%n", -1.5, rint(-1.5)); // 반올림
        out.printf("ceil(%3.1f)=%f%n", -1.5, ceil(-1.5)); // 올림
        out.printf("floor(%3.1f)=%f%n", -1.5, floor(-1.5); // 버림 
    }
}
```

- rint도 첫째 자리에서 반올림 하지만, 반환값이 `double`형
- rint는 -1.5를 반올림 하면 -2.0 같이 가까운 정수 중에 짝수 정수를 결과로 반환 (round는 -1)
- 음수에서는 양수와 달리 -1.5를 버림하면 -2.0이 됨 



# 래퍼(wrapper) 클래스

- 기본형 값들을 객체로 변환하여 작업을 수행해야할 때 `wrapper 클래스`를 사용함
- 8개의 래퍼클래스가 있고, 이 클래스들을 이용하면 기본형 값을 객체로 다룰 수 있음
- 래퍼 클래스의 생성자는 매개변수로 문자열이나 각 자료형의 값들을 인자로 받음

```java
class EX9_14 {
    public static void main(String[] args) {
		Integer i = new Integer(100);
        Integer i2 = new Integer(100);
        
        System.out.println("i==i2 ? " + (i==i2));
        System.out.println("i.equals(i2) ? " + i.equals(i2));
        System.out.println("i.compareTo(i2)=" + i.compareTo(i2));
        System.out.println("i.toString()=" + i.toString());
        
        System.out.println("MAX_VALUE=" + Integer.MAX_VALUE);
        System.out.println("MIN_VALUE=" + Integer.MIN_VALUE);
        System.out.println("SIZE=" + Integer.SIZE +"bits");
        System.out.println("BYTES=" + Integer.BYTES+ "bytes");
        System.out.println("TYPE=" + Integer.TYPE);
    }
}
```

-  래퍼 클래스들은 모두 `equals`가 오버라이딩 되어 있어서 주소값이 아닌 객체가 가지고 있는 값을 비교함
- `toString()`도 오버라이딩 되어 있어서 객체가 가지고 있는 값을 문자열로 변환하여 반환

- 래퍼 클래스들은 MAX_VALUE, MIN_VALUE, SIZE, BYTES, TYPE  등의 static상수를 공통적으로 가지고 있음



# Number 클래스

- 추상클래스로 내부적으로 숫자를 멤버변수로 갖는 래퍼 클래스들의 조상
- 기본형 중에서 숫자와 관련된 래퍼 클래스들은 모두 Number클래스의 자손임
- BigInteger : long으로도 다룰 수 없는 큰 범위의 정수를 처리하기 위한 것으로 연산자의 역할을 대신하는 다양한 메서드를 제공
- BigDecimal :  double로도 다룰 수 없는 큰 범위의 부동 소수점수를 처리하기 위한 것으로 연산자의 역할을 대신하는 다양한 메서드를 제공



# 문자열을 숫자로 변환하기

```java
// 이 방법중 하나 선택해서 문자열을 숫자로 변환하면 됨
int i = new  Integer("100").intValue(); // floatValue(), longValue(),,,,
int i2 = Integer.parseInt("100"); // 주로 이 방법을 많이 사용 , 반환값이 기본형
int i3 = Integer.valueOf("100"); // 반환 값이 래퍼 클래스 타입 
```



- 문자열이 10진수가 아닌 다른 진법(radix)의 숫자일 때도 변환이 가능하도록 메서드 제공

```java
static int parseInt(String s , int radix) // 문자열 s를 radix 진법으로 인식
static Integer valueOf(String s, int radix) ;

int i4 = Integer.parseInt("100", 2);
```



```java
class EX9_15 {
    public static void main(String[] args) {
		int i = new Integer("100").intValue();
        int i2 = Integer.parseInt("100");
        Integer i3 = Integer.valueOf("100");
        
        int i4 = Integer.parseInt("100", 2);
        int i5 = Integer.parseInt("100", 8);
        int i6 = Integer.parseInt("100", 16);
        int i7 = Integer.parseInt("FF", 16);
       // int i8 = Integer.parseInt("FF"); // NumberForatException 발생 , 진법을 생략하면 10진수로 간주하기 때문
        
        Integer i9 = Integer.valueOf("100", 2);
        Integer i10 = Integer.valueOf("100",8);
        Integer i11 = Integer.valueOf("100", 16);
        Integer i12 = Integer.valueOf("FF", 16);
        // Integer i13 = Integer.valueOf("FF"); // NumberForatException 발생 
        
        System.out.println(i);
		System.out.println(i2);
        System.out.println(i3);
        System.out.println("100(2) -> " + i4);
        System.out.println("100(8) -> " + i5);
        System.out.println("100(16) -> " + i6);
        System.out.println("FF(16) -> " + i7);
        
        System.out.println("100(2) -> " + i9);
        System.out.println("100(8) -> " + i10);
        System.out.println("100(16) -> " + i11);
        System.out.println("FF(16) -> " + i12);        
    }
}
100
100
100
100(2) -> 4
100(8) -> 64
100(16) -> 256
FF(16) -> 255
100(2) -> 4
100(8) -> 64
100(16) -> 256
FF(16) -> 255
```



# 오토박싱 & 언박싱

- 기본형과 참조형 간의 연산이 불가능 했지만  이제는 가능 --> 컴파일러가 Integer 객체를 int타입의 값으로 변환해주는 intValue()를 추가해줌
- 이 외에도 내부적으로 객체 배열을 가지고 있는 Vector클래스나 ArrayList클래스에 기본형 값을 저장할 때나 형변환이 필요할 때에도 자동적으로 코드를 추가해줌
- 오토박싱 : 기본형 값을 래퍼 클래스의 객체로 자동 변환
- 언박싱 : 오토박싱을 반대로 변환하는 것

```java
class EX9_16 {
    public static void main(String[] args) {
		int i = 10;
        
        // 기본형을 참조형으로 형변환(형변환 생략 가능)
        Integer intg = (Integer)i; // Integer intg = Integer.valueOf(i);
        Object obj = (Object)i; // Object obj = (Object)Integer.valueOf(i);
        
        Long lng = 100L; // Long lng = new Long(100L);
        
        int i2 = intg + 10; // 참조형과 기본형간의 연산가능
        long l = intg + lng; // 참조형 간의 덧셈도 가능
        
        Integer intg2 = new Integer(20);
        int i3 = (int)intg2; // 참조형을 기본형으로 형변환도 가능(형변환 생략 가능)
        
        Integer intg3 = intg2 + i3;
        
        System.out.println("i = " + i);
        System.out.println("intg = " + intg);
        System.out.println("obj = " + obj);
        System.out.println("lng = " + lng);
        System.out.println("intg + 10 = " + i2);
        System.out.println("intg + lng = " + l);
        System.out.println("intg2 = " + intg2);
        System.out.println("i3 = " + i3);
        System.out.println("intg2 + i3 = " + intg3);
    }
}

i = 10
intg = 10
obg = 10
lng = 100
intg + 10 = 20
intg + lng = 100
intg2 = 20
i3 = 20
intg2 + i3 = 40
```











---

Java의 정석 기초편 | 남궁성 | 도우출판