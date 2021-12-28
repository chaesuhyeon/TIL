# 연산자와 피연산자 

- 연산자 : 연산을 수행하는 기호 
- 피 연산자 : 연산의 대상
- `x + 10` 에서 x와 10은 피연산자 / + 는 연산자 
- 식 : 연산자와 피연산자를 조합하여 계산하고자 하는 바를 표현 
- 평가 : 식을 계산하여 결과를 얻는 것 
- `=` : 대입 연산자 



#  연산자의 종류 

> 산술 연산자

- `+` ` -`  `*`  `/`  `%`  `<<`  `>> `        : 사칙 연산과 나머지 연산(%)



> 비교 연산자

- `>` `<` `>=` `<=` `==` `!=`             : 크고 작음과 같고 다름을 비교 



> 논리 연산자

- `&&` `||` `!` `&` `|` `^` `~` :          : 그리고(AND)와 또는(OR)으로 조건을 연결



> 대입 연산자 

- `=`                                            : 우변의 값을 좌변에 저장



> 기타

- `(type)` `?:` `instanceof`    : 형변환 연산자, 삼항 연산자, instanceof연산자



# 연산자의 우선 순위

- 단항 연산자(ex. 부호 연산자)가 이항 연산자보다 우선순위가 높다.
- 산술 연산자가 비교연산자보다 우선순위가 높다.
- 비교연산자가 논리 연산자보다 우선순위가 높다.
- 대입 연산자는 우선순위가 연산자 중에서 제일 낮다.



# 연산자의 결합 규칙

- 산술 > 비교 > 논리 > 대입 으로 우선순위
- 단항 > 이항 > 삼항 으로 우선순위
- 단항 연산자와 대입 연산자를 제외한 모든 연산의 진행 방향은 왼쪽부터 진행
  - 단항(왼쪽일 수도 오른쪽 일 수도) 
  - 대입 연산자는 오른쪽부터 (ex . x = y = 10일 경우 y=10부터 진행 후 x = 10 으로 진행)

 ```java
 class EX3_1 {
     public static void main(String[] args) {
         int x,y;
         
         x = y = 5;  // y = 5 먼저 수행 후 x에 5대입  
         System.out.println("x=" + x);
         System.out.println("y=" + y);
     }
 }
 
 x=5
 y=5
 ```



# 증감 연산자 ++ / --

- 증감 연산자는 일반 산술 변환에 의한 자동 형변환이 발생하지 않음
- 연산결과의 타입은 피연산자의 타입과 같음
- ++ / -- : 피연산자의 값을 1 증가 시킴 / 1 감소 시킴
- 왼쪽과 오른쪽에 위치 가능 
  - 왼쪽에 위치 : 전위형  ex) y = ++ x;       : 값이 참조되기 전에 증가시킴
    - ++x 
    - y = x
  - 오른쪽에 위치 : 후위형 ex) y=x++;       : 값이 참조된 후에 증가시킴
    - y = x
    - x++
  -  but , 메서드 호출에 포함되지 않는 경우라면(참조  x) 전위형이든 후위형이든 1을 증가시킬 뿐 다를 바가 없음

```java
class EX3_2 {
    public static void main(String[] args) {
        int x=7 ,y=0;
        
        y = x++;
        System.out.println("y=x++; 실행 후, x=" + x +", y=" + y );
        
        x=7;
        y=0;
        
        y = ++i;
        System.out.println("y=++x; 실행 후, x=" + x +", y=" + y );
    }
}

y=x++; 실행 후, x=8, y=7
y=++x; 실행 후, x=8, y=8
```

```java
class EX3_3 {
    public static void main(String[] args) {
        int x=7 ,y=7;
        System.out.println(x++);
        System.out.println(++y);
        System.out.println("x = " + x + ", y = " + y);
    }
}

7
8
x = 8, y = 8
```



# 부호 연산자

- 부호 연산자는 boolean형과 char형을 제외한 기본형에만 사용 가능

```java
class EX3_4 {
    public static void main(String[] args) {
		int x = -100;
        x = +x;
        System.out.println(x);
        
        x = -100;
        x = -x;
        System.out.println(x);
    }
}

-100
100
```



# 형변환 연산자

- 연산을 수행하기 전 타입을 일치 시켜야 함 
- 형변환(casting) : 변수나 리터럴의 타입을 다른 타입으로 변환하는 것

- 방법 : 형변환하고자 하는 변수나 리터럴의 앞에 변환하고자 하는 타입을 괄호와 함께 붙여주면 됨
  - (타입)피연산자
  - 괄호 : 캐스트 연산자 또는 형변환 연산자

```java
double d = 75.3;
int num = (int)d;

// int num =  (int)75.3; -> int num  = 75;
```

```java
class EX3_5 {
    public static void main(String[] args) {
		double d = 75.3;
		int num = (int)d;
        
        System.out.println("num=" + num);
        System.out.println("d=" +d); // d에는 아무런 변화 x
    }
}

num=75
d=75.3
```



# 자동 형변환

- 경우에 따라 편의상의 이유로 형변환을 생략할 수 있음
- 컴파일러가 생략된 형변환을 자동적으로 추가해줌
  - float f = 1234;
  - 원래는 float f = (float)1234;
  - 우변은 int타입 , 저장하려는 변수의 타입은 float
  - (float)생략됨
- 큰 타입에서 작은 타입으로의 변환은 값 손실 발생
  - byte b = 2000;
  - 에러 메세지 발생
  - byte b = (byte)2000; 이라고 명시를 해주면 프로그래머가 의도적으로 변환하려는 것인줄 알고 에러 발생시키지 않음
- `표현 범위가 좁은 타입에서 넓은 타입으로 형 변환` 하는 경우에는 값 손실이 없으므로 두 타입 중에서 `표현 범위가 더 넓은 쪽으로 자동 형변환`됨
  
  - byte -> short(or char) -> int -
  
  - > long -> float -> double 순으로는 자동 형변환 해줌
  
  - 반대 방향으로는 반드시 형변환 연산자를 사용해야함 



# 사칙 연산자

```java
class EX3_6 {
    public static void main(String[] args) {
		int x = 10;
        int y = 4;
        
        System.out.printf("%d + %d = %d%n", x, y, x + y);
        System.out.printf("%d - %d = %d%n", x, y, x - y);
        System.out.printf("%d * %d = %d%n", x, y, x * y);
        System.out.printf("%d / %d = %d%n", x, y, x / y);
        System.out.printf("%d / %f = %f%n", x, (float)y, x / (float)y);
    }
}


10 + 4 = 14
10 - 4 = 6
10 * 4 = 40
10 / 4 = 2
10 / 4.000000 = 2.500000
```

- 피연산자가 정수이면 0으로 나눌 시에 에러 발생
- `피연산자가 정수(int)`이면 `연산결과 역시 int`타입이다. 따라서 10 / 4 = 2가 나옴 (연산결과는 2.5일지라도)
  - 소숫점 이하는 버려지고 반올림역시 발생하지 않음
- 올바른 연산결과를 얻기 위해서는 두 피연산자중 어느 한 쪽을 실수형으로 형변환해야함
  - 다른 한쪽도 실수형으로 자동 형변환되어 실수형 값을 결과로 얻을 수 있음(int타입보다 float타입이 표현범위가 넓으므로 float타입으로 자동 변환)



# 산술 변환

- 이항 연산자는 두 피연산자의 타입이 일치해야 연산 가능
  - 피 연산자의 타입이 서로 다르다면 연사전에 형변환 연산자로 타입을 일치시켜야함
- `산술 변환` 또는 `일반 산술 변환` : 연산 전에 피연산자 타입의 일치를 위해 자동형변환되는 것
- `1.` 두 피연산자의 타입을 같게 일치시킴 (보다 큰 타입으로 일치)
- `2.` 피연산자의 타입이 int보다 작은 타입이면 int로 변환
  - char나 short의 표현 범위가 좁아서 연산중에 오버플로우가 발생할 가능성이 높기 때문에 int로 변환

```java
class EX3_7 {
    public static void main(String[] args) {
        System.out.println(7/2);
        System.out.println(7/(float)2);
    }
}

3
3.5

```

```java
class EX3_8 {
    public static void main(String[] args) {
		byte x = 10;
        byte y = 40;
        byte z = (byte)(x*y);
        System.out.println(z);
    }
}

-112
// 10 * 40 의 결과 값은 원래는 400이지만 큰 자료형 (여기서는 int타입의 10 , 40)에서 작은 자료형(여기서는 byte)로 형변환하면 데이터의 손실이 발생하므로 값이 바뀔 수 있음
```

```java
class EX3_9 {
    public static void main(String[] args) {
		int x = 1_000_000;
        int y = 2_000_000;
        long z = x * y;
        
        System.out.println(z);
    }
}

-1454759936
// int와 int의 결과 값은 int이므로 이미 x*y의 결과가 int값이므로 long형으로 자동변환 해줘도 값은 변하지 않음
```

```java
class EX3_10 {
    public static void main(String[] args) {
        long x = 1_000_000 * 1_000_000;
        long y = 1_000_000 * 1_000_000L;
        
        System.out.println("x="+x);
        System.out.println("y="+y);
    }
}

x=-727379968
y=1000000000000
```



# Math.round()로 반올림하기

- 반올림을 하려면 Math.round()를 사용하면 됨 
  - 소수점 첫째 자리에서 반올림한 결과를 정수로 반환 

```java
class EX3_11 {
    public static void main(String[] args) {
		double pi = 3.141592;
        double shortPi = Math.round(pi * 1000) / 1000.0; // 실수로 나눠줘서 소숫점까지 표현됨
        System.out.println(shortPi);
    }
}

// 만약 1000.0이 아니라 1000으로 나누었으면 3이 나옴 (int와 int의 나눗셈은 int로 나옴) 

3.142
```

```java
class EX3_12 {
    public static void main(String[] args) {
		int a = 10;
        int b = 8;
        System.out.printf("%d를 %d로 나누면, %n" , a,b);
        System.out.printf("몫은 %d이고, 나머지는 %d입니다.%n" , a/b , a%b);
        
    }
}

10를 8로 나누면, 
몫은 1이고, 나머지는 2입니다.
```

```java
class EX3_13 {
    public static void main(String[] args) {
        System.out.println(-10%8);
        System.out.println(10%-8);
        System.out.println(-10%-8);   
    }
}

// 부호는 왼쪽 피연산자의 부호를 따름

-2
2
-2
```



# 비교 연산자

- 연산 결과는 오직 `true`와 `false`
- 비교 연산자는 이항 연산자이므로 비교하는 피연산자의 타입이 서로 다른 경우에는 자료형의 범위가 큰 쪽으로 자동 형변환 하여 피연산자의 타입을 일치시킨 후에 비교함



> 대소비교 연산자 `> < <= >=`

- boolean을 제외한 나머지 자료형에 사용 가능, 참조형에는 사용불가

- `>` : 좌변의 값이 `크면` `true`  / `아니면` `false`
- `< `:  좌변의 값이 `작으면` `true`  / `아니면` `false`
- `>= `: 좌변의 값이 `크거나 같으면` `true`  / `아니면` `false`

- `<=` : 좌변의 값이 `작거나 같으면` `true`  / `아니면` `false`



> 등가비교 연산자 `== !=`

- 모든 자료형(기본형, 참조형)에 사용가능
  - 기본형일경우 변수에 저장되어있는 값이 같은지 확인 가능
  - 참조형일 경우 객체의 주소값을 저장하기 때문에 두 개의 피연산자(참조변수)가 같은 객체를 가리치고 있는지(주소값이 같은지) 확인 가능
  - 기본형과 참조형을 서로 비교할 순 없음

- `==` :  두 값이 `같으면` `true` / `아니면` `false` 
- `!=` :  두 값이 `다르면 ` `true` / `아니면` `false` 



# 문자열의 비교

- 두 문자열을 비교할 때는 `==` 대신 `equals()`라는 메서드 사용
-  `equals()`는 두 문자열이 `같으면` `true` / `다르면 `false`를 반환

```java
String str = new String("ABC"); // String은 원래 class이므로 new를 사용해서 객체를 사용해야함
// String str = "ABC"; // 특별히 String만 왼쪽과 같이 간단하게 쓰는거 허용
boolean result = str.equals("ABC"); // result에 true저장
```

```java
class EX3_14 {
    public static void main(String[] args) {
        String str1 = "ABC";
        String str2 =  new String("ABC");

        System.out.printf("\"ABC\" ==\"ABC\" ? %b%n", "ABC" == "ABC");
        System.out.printf(" str1 ==\"ABC\" ? %b%n", str1 == "ABC");
        System.out.printf(" str2 ==\"ABC\" ? %b%n", str2 == "ABC");
        System.out.printf(" str1.equals(\"ABC\") ? %b%n", str1.equals("ABC"));
        System.out.printf(" str2.equals(\"ABC\") ? %b%n", str2.equals("ABC"));
        System.out.printf(" str2.equals(\"abc\") ? %b%n", str2.equals("abc"));
        System.out.printf(" str2.equalsIgnoreCase(\"abc\") ? %b%n", str2.equalsIgnoreCase("abc"));
    }
}

"ABC" =="ABC" ? true
 str1 =="ABC" ? true
 str2 =="ABC" ? false
 str1.equals("ABC") ? true
 str2.equals("ABC") ? true
 str2.equals("abc") ? false
 str2.equalsIgnoreCase("abc") ? true
```

- `System.out.printf(" str2 ==\"ABC\" ? %b&n", str2 == "ABC");`에서  str2와 "ABC"의 내용이 같은데도 false가 나옴  -> 내용은 같지만 다른 객체라서 false 나옴
- `equals`는 객체가 달라도 내용이 같으면 true 반환
- 대소문자를 구별하지 않고 비교하고 싶으면 `equalsIgnoreCase()`사용



# 논리 연산자

- 논리 연산자는 둘 이상의 조건을 `그리고(AND)`나 `또는(OR)`으로 연결하여 하나의 식으로 표현할 수 있게 해줌
- 논리 연산자는 피연산자로 boolean형 또는 boolean형 값을 결과로 하는 조건식만 허용
- `&&`  : 그리고(AND)에 해당 / 두 피연산자가 모두 true 일 때만 true 반환
- `||` : 또는 (OR)에 해당 /  두 피연산자 중 한 쪽만 true일 때만 true 반환



> x는 2의 배수 또는 3의 배수지만 6의 배수는 아니다.

```java
(x%2==0 || x%3 ==0) && x%6 !=0;
```



> 문자 ch는 숫자('0'~'9')이다.

```java
'0' <= ch && ch <= '9'
    
// 유니코드에서 문자 '0'부터 '9'까지 연속적으로 배치되어 있기 때문에 가능한 식
// 유니코드 '0'~'9' : 48~57
```



> 문자 ch는 대문자 또는 소문자이다.

 ```java
 ('a' <= ch && ch <= 'z') || ('A' <= ch && ch <= 'Z')
 
 // 문자 'a'부터 'z'까지 그리고 'A'부터 'Z'까지 연속적으로 배치되어 있기 때문에 가능한 식
 ```



```java
import java.util.Scanner;

class EX3_15 {
    public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        char ch = ' ';
        
        System.out.printf("문자를 하나 입력하세요 : ");
        
        String input = scanner.nextLine();
        ch = input.charAt(0);
        
        if('0' <= ch && ch <= '9') {
            System.out.printf("입력하신 문자는 숫자입니다.%n");
        }
        
        if(('a' <= ch && ch <= 'z') || ('A' <= ch && ch <= 'Z')) {
            System.out.printf("입력하신 문자는 영문자입니다.%n");
        }
    }  
}
```



# 논리 부정 연산자 `!`

- true 와 false를 반대로 바꾸는 것 

```java
class EX3_16 {
    public static void main(String[] args) {
		boolean b = true;
        char ch = 'C';
        System.out.printf("b=%b%n", b);
        System.out.printf("!b=%b%n", !b);
        System.out.printf("!!b=%b%n", !!b);
        System.out.printf("!!!b=%b%n", !!!b);
        System.out.println();
        System.out.printf("ch=%c%n", ch);
        System.out.printf("ch < 'a' || ch > 'z' = %b%n", ch < 'a' || ch > 'z');
        System.out.printf("!('a'<=ch && ch<='z')= %b%n",!('a'<=ch && ch<='z'));
        System.out.printf("  'a' <= ch && ch <= 'z' = %b%n", 'a' <= ch && ch <= 'z');
    }  // main 끝
}


b=true
!b=false
!!b=true
!!!b=false

ch=C
ch < 'a' || ch > 'z' = true
!('a'<=ch && ch<='z')= true
  'a' <= ch && ch <= 'z' = false
```



# 조건 연산자

- 3개의 피연산자를 필요로 하는 삼항 연산자
- `조건식 ? 식1 : 식2`
  - 식1은 조건식의 평가 결과가 true일 때 실행
  - 식2는 조건식의 평가 결과가 false일 때 실행
- 식1과 식2 , 이 두 피연산자의 타입이 다른 경우 이항 연산자처럼 산술 변환 발생

```java
result = (x > y) ? x : y;
// x > y 가 참이면 result에 x 저장
// x > y 가 거짓이면 result에 y 저장


// 조건연산자 대신 if문으로

if (x>y)
    result = x;
else
    result = y;


// if문 대신 조건 연산자를 쓰면 코드를 더 간단히 쓸 수 있음
```

```java
class EX3_17 {
    public static void main(String[] args) {
		int x, y, z;
        int absX, absY, absZ;
        char signX, signY, signZ;
        
        x = 10;
        y = -5;
        z = 0;
        
        absX = x >= 0 ? x : -x; // x값이 음수이면, 양수로 만든다
        absY = y >= 0 ? y : -y;
        absZ = z >= 0 ? z : -z;
        signX = x > 0 ? '+' : (x==0 ? ' ' : '-');
        signY = y > 0 ? '+' : (y==0 ? ' ' : '-');
        signZ = z > 0 ? '+' : (z==0 ? ' ' : '-');   
        
        System.out.printf("x=%c%d%n", signX, absX);
        System.out.printf("y=%c%d%n", signY, absY);
        System.out.printf("z=%c%d%n", signZ, absZ);
    }  // main 끝
}

x=+10
y=-5
z= 0
```





# 대입 연산자

- 연산자들 중에서 가장 낮은 우선순위를 가지고 있기 때문에 식에서 제일 나중에 수행
- 연산의 진행방향이 오른쪽에서 왼쪽으로 수행

- 대입 연산자는 다른 연산자(op)와 결합하여 `op=`와 같은 방식으로 사용될 수 있음
  - `i= i+5`는 `i +=5`로 쓸 수 있음

#### lvalue와 rvalue

- lvalue : 대입 연산자의 왼쪽 피연산자
  - 변수처럼 값을 변경할 수 있는 것이어야함
  - 리터럴이나 상수같이 값을 저장할 수 없는 것은 lvalue가 될 수 없음
- rvalue : 대입 연산자의 오른쪽 피연산자
  - 변수 뿐만 아니라 상수, 식 모두 가능
- `x = 3` 
  - x 는 lvalue
  - 3은 rvalue 

---

Java의 정석 기초편 | 남궁성 | 도우출판
