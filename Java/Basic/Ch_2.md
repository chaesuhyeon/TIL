# 글자 출력 print() , println()

- 화면에 글자를 출력할 때는 System.out.print() 사용 -> ()안에 출력하고자 하는 내용 넣기

```java
System.out.print("Hello, world")
System.out.print(2+2) // 화면에4출력
System.out.print("2+2") // 화면에 2+2 출력
```

#### print() , println()의 차이

```java
System.out.print() // 괄호 안의 내용을 출력하고 줄바꿈을 하지 않는다.
System.out.println() // 괄호 안의 내용을 출력하고 줄바꿈을 한다.
```

 ※ 자바는 대소문자 구분 하기 때문에 System을 system이라고 적으면 안됨



```java
class Ex2_1 {
    public static void main(String[] args){
        System.out.println("Hello, world");
        System.out.print("Hello");
        System.out.println("World");
    }
}

Hello, world
HelloWorld

```

 ※ 문장 끝에 ;(세미콜론) 꼭 넣기 !!



```java
class Ex2_2 {
    public static void main(String[] args){
        System.out.println("Hello, world");
        System.out.print("2+2=");
        System.out.println(2+2);
    }
}

Hello, world
2+2=4

```



---

# 덧셈 뺄셈 계산하기

- 괄호 안에 사칙연산 기호만 넣어주면 됨

```java
System.out.println(2+2);

class Ex2_3 {
    public static void main(String[] args){
        System.out.println(6+2);
        System.out.println(6-2);
        System.out.println(6*2);
        System.out.println(6/2);  // 정수 나누기 정수 = 정수 
    }
}

8
4
12
3
```



---

# 변수의 선언과 저장

- 변수 : 하나의 값을 저장할 수 있는 저장공간

```java
변수타입 변수이름; // 변수 선언하는 방법

// 변수는 변수에 저장할 값이 어떤 것이냐에 따라 달라지며, 
// 변수의 이름은 저장공간이 서로 구별될 수 있어야 하기 때문에 필요

EX)
int x; // 정수(integer)를 저장하기 위한 변수 x를 선언
x = 6; // 변수 x에 5를 저장
x = 2; // 변수 x에 3을 저장 , 기존 값은 지워짐

int x = 6; // 간단히 작성 

```



```java
class Ex2_4 {
    public static void main(String[] args){
        int x = 6;
        System.out.println(x);
        
        x = 2;  //기존의 6은 지워짐
        System.out.println(x);
        
    }
}

6
2
```

```java
class Ex2_5 {
    public static void main(String[] args){
        int x = 6;
        int y = 2;
        System.out.println(x+y);
        System.out.println(x-y);
        System.out.println(x*y);
        System.out.println(x/y);
        
    }
}


8
4
12
3
```



---

# 변수의 타입

```java
숫자 :int   -> 정수(integer)를 저장하기 위한 타입(20억이 넘을 땐 long)
숫자 :float/double -> 실수(floating-point number)를 저장하기 위한 타입. float는 오차없이 7자리, 
															double은 15자리

문자 :char  -> 문자(character)를 저장하기 위한 타입
문자 :String -> 여러 문자(문자열, string)를 저장하기 위한 타입

int x = 100;
double pi = 3.14; // 실수를 저장할 변수의 타입은 double로 함
char ch = 'a'; // 문자(1)개를 저장할 변수의 타입은 char로 함
String str = "abc"; // 여러 문자(0~n개)를 저장할 변수의 타입은 String으로 함
```

```java
class Ex2_6 {
    public static void main(String[] args){
        int x = 100;
		double pi = 3.14; 
		char ch = 'a'; 
		String str = "abc";
        System.out.println(x);
        System.out.println(pi);
        System.out.println(ch);
        System.out.println(str);
        
    }
}


100
3.14
a
abc
```



---

# 상수와 리터럴

- 상수는 변수와 마찬가지로 값을 저장할 수 있는 공간이지만, 변수와 달리 한번 값을 저장하면 다른 값으로 변경할 수 없음
- 상수를 선언하는 방법은 변수와 동일하며 변수의 타입 앞에 `final`을 붙여주면 됨

`final int MAX_SPEED = 10;` : 정수형 상수 선언

```java
final int MAX_SPEED
MAX_SPEED = 100;
MAX_SPEED = 200; // Error 발생 . 상수는 한번 선언하면 값 변경 x
```

- 상수의 이름은 모두 `대문자`로 하는 것이 관례

  - 여러 단어로 이루어져있는 경우 `_`로 구분

  

```java
변수 : 하나의 값을 저장하기 위한 공간
상수 : 값을 한번만 저장할 수 있는 공간
리터럴 : 그 자체로 값을 의미 

int year(변수) = 2021(리터럴); 
final int MAX_SPEED(상수) = 500(리터럴);
```



## 리터럴의 타입과 접미사

- 변수에 타입이 있는 것 처럼 리터럴에도 타입이 있음
- 리터럴 타입은 `저장될 값의 타입`에 의해 결정

|  종류  | 리터럴                       | 접미사 |
| :----: | ---------------------------- | ------ |
| 논리형 | false, true                  | 없음   |
| 정수형 | 123, 0b0101, 077, oxFF, 100L | L      |
| 실수형 | 3.14, 3.0e7, 1.5f, 0x1.0p-1  | f,d    |
| 문자형 | 'A', '2', '\n'               | 없음   |
| 문자열 | "ABC", "1234", "B", "true"   | 없음   |

- 정수형과 실수형에는 여러 타입이 존재하므로 리터럴에 접미사를 붙여서 타입을 구분
- 정수형의 경우 `long 타입`의 리터럴에 접미사 `l` 또는 `L`을 붙이고, 접미사가 없으면 `int`타입의 리터럴임
- 10진수 외에도 2,8,16진수로 표현된 리터럴을 변수에 저장할 수 있으며 `16진수`라는 것을 표시하기 위해 리터럴 앞에 접두사 `0x` 또는 `0X`를  , `8진수`의 경우에는 `0`을 붙임

```java
int octNum = 010; // 8진수 10 , 10진수로 8
int hexNum = 0x10; // 16진수로 10, 10진수로 16

// JDK1.7부터 정수형 리터럴의 중간에 구분자'_'넣을 수 있게 되어 큰 숫자를 편하게 읽을 수 있음
long big = 200_000_000_000L; // long big = 2000000000000L;
long hex =  0xGGGG_GGGG_GGGG_GGGGL // long hex = 0xGGGGGGGGGGGGGGGGL;
```



- 실수형에서는 `float`타입의 리터럴에 접미사 `f`또는 `F`를 붙이고  `double`타입의 리터럴에는 `d`또는 `D`를 붙인다.

```java
float pi = 3.14f; // 접미사 f대신 F사용가능. 생략 불가 
double rate = 1.618d; // 접미사 d대신 D사용 가능. 생략 가능
```

- int가 정수형의 기본 자료형 인것 처럼 실수형에서는 double이 기본 자료형이라서 접미사 생략 가능



## 문자 리터럴과 문자열 리터럴 

- 'A'와 같이 `작은 따옴표`로 문자 하나를 감싼 것이 `문자 리터럴 `
- `두 문자 이상`은 `큰 따옴표`로 감싸야 하며 , `문자열 리터럴`

```java
char ch = 'K';  // char ch 'JAVA' 불가능
String name = "JAVA";   
```

- `문자열 리터럴`은 ""안에 아무것도 안적는거 허용 : `빈 문자열`
- `문자 리터럴`은 '' 안에 아무것도 안적는거 허용 x : `반드시 ' ' 안에 하나의 문자가 있어야 함`
  - 공백은 허용



```java
String str = "" // 빈 문자열
char ch = '' // error 발생 . 빈 문자열 허용 x
char ch = ' ' // 공백문자는 허용 . 공백 문자로 변수 초기화 
```

- 원래 String은 class이므로 객체 생성 연산자 new를 사용해야 하지만  `String name = new String("JAVA")`;, `String name = "JAVA";` 같은 표현도 허용 함



# 문자열 결합

- 문자 열에 대해 덧셈 사용가능

```java
String name = "JA" + "VA";
String str = name + 5.0; 

// 피연산자 중 어느 한 쪽이 String이면 나머지 한 쪽을 먼저 String으로 변환 한 다음 두 String을 결합
// 어떤 타입의 변수도 문자열과 덧셈연산을 수행하면 그 결과가 문자열이 됨

문자열 + any type -> 문자열 + 문자열 = 문자열
any type + 문자열 -> 문자열 + 문자열 = 문자열
    
    
class EX2_7 {
    public static void main(String[] args){
        String name = "JA" + "VA";
        String str = name + 5.0;
        
        System.out.println(name);
        System.out.println(str);
        System.out.println(5+" ");
        System.out.println(" " + 5);
        System.out.println(5+"");
        System.out.println("" + 5);
        System.out.println("" + "");
        System.out.println(5 + 5 + ""); // 10연산 후에 문자열로 변환 됨  10
        System.out.println("" + 5 + 5); // 5가 문자열로 변환 된 후 나머지 5도 문자열로 변환 55
    }
}

JAVA
JAVA5.0
5 
 5
5
5

10
55
```



# 두 변수의 값 바꾸기

- 두 변수의 값을 바꾸려면 값을 임시로 저장할 변수가 하나 더 필요

```java
int var;
var = x; // x의 값을 var에 저장
x = y; // y의 값을 x에 저장
y = var; // var에 저장 된 값을 y에 저장

class EX2_8 {
    public static void main(String[] args){
		int x = 15, y = 5;
        System.out.println("x="+x);
        System.out.println("y="+y);
        
        int var = x;
        x = y;
        y = var;
        System.out.println("x="+x);
        System.out.println("y="+y);       
    }
}

x=15
y=5
x=5
y=15
```



---

# 기본형과 참조형 

| 값   | 문자     | ex) 'a' ,'1', "abc" |                       |
| ---- | -------- | ------------------- | --------------------- |
|      | **숫자** | **정수**            | ex) 123, 0, -200      |
|      |          | **실수**            | ex) 3.14, -5.0 x 10^2 |



- 자료형은 크게 `기본형`과 `참조형` 두가지로 나눌 수 있음 
- `기본형` 변수는 실제 값을 저장하는 반면 `참조형` 변수는 어떤 값이 저장되어 있는 주소(memory address)를 값으로 갖음
- 자바에서 실제 연산에 사용되는 것은 모두 기본형 변수 
- `기본형`변수 : 논리형, 문자형, 정수형, 실수형



## 기본형의 종류와 범위 

| 종류\크기 | 1byte   | 2byte | 4byte | 8byte  |
| --------- | ------- | ----- | ----- | ------ |
| 논리형    | boolean |       |       |        |
| 문자형    |         | char  |       |        |
| 정수형    | byte    | short | int   | long   |
| 실수형    |         |       | float | double |

- 정수형은 int가 기본,  실수형에서는 double이 기본
- boolean은 true, false 두 값만 표현
- int타입의 변수는 대략 10자리의 값을 저장할 수 있음
- 7~9자리의 수를 계산할 때는 넉넉하게 long타입 (약 19자리)으로 변수를 선언하는 것이 좋음



# printf를 이용한 출력 

- 같은 값이라도 다른 형식으로 출력하고 싶을 때 `printf()`사용 하면 됨 
- printf()는 지시자(specifier)를 통해 변수의 값을 여러 가지 형식으로 변환하여 출력 
- 지시자 : 값을 어떻게 출력할 것인지 지시 
- 정수형 변수에 저장 된 값을 10진 정수로 출력할 때는 지시자 `%d`사용

```java
System.out.printf("age:%d year:%d" , 25, 2021);
```

- printf()는 `줄바꿈을 하지 않음`  줄바꿈을 하려면 `%n`사용

```java
System.out.printf("age:%d%n" , 25); // 출력 후 줄바꿈
```



| 지시자 |                    설명                     |
| :----: | :-----------------------------------------: |
|   %d   |          10진 정수의 형식으로 출력          |
|   %x   |          16진 정수의 형식으로 출력          |
|   %f   | 부동 소수점(floating-point)의 형식으로 출력 |
|   %c   |           문자(character)로 출력            |
|   %s   |            문자열(String)로 출력            |
|   %n   |             출력 후 줄바꿈 진행             |



```java
class EX2_9 {
    public static void main(String[] args){
        String url = "www.codechobo.com";
        float f1 = .10f;
        float f2 = 1e1f;
        float f3 = 3.14e3f;
        double d = 1.23456789; // 접미사 d생략 가능. 기본형이라서
        System.out.printf("f1=%f, %e, %g%n", f1, f1, f1); // %e : 지수형태로 출력
        System.out.printf("f2=%f, %e, %g%n", f2, f2, f2); // %g : 값을 간략하게 표현
        System.out.printf("f3=%f, %e, %g%n", f3, f3, f3); // %f : 소수점 아래 6자리까지 출력
        System.out.printf("d=%f%n", d);
        System.out.printf("d=%14.10f%n", d); // 전체 14자리 중 소수점 10자리. 빈자리 0으로 채움
        System.out.printf("[12345678901234567890]%n");
        System.out.printf("[%s]%n", url);
        System.out.printf("[%20s]%n", url);// 최소 20글자 출력 공간 확보(우측 정렬)
        System.out.printf("[%-20s]%n", url); // 최소 20글자 출력 공간 확보 (좌측 정렬)
        System.out.printf("[%.8s]%n", url); // 왼쪽에서 8글자만 출력
    }
}

f1=0.100000, 1.000000e-01, 0.100000
f2=10.000000, 1.000000e+01, 10.0000
f3=3140.000000, 3.140000e+03, 3140.00
d=1.234568
d=  1.2345678900
[12345678901234567890]
[www.codechobo.com]
[   www.codechobo.com]
[www.codechobo.com   ]
[www.code]
```

- 소수점도 한자리 차지 
- 지정된 숫자보다 문자열읭 길이가 작으면 빈자리는 공백으로 출력. 
  - 공백이 있는 경우 기본적으로 우측 끝에붙이지만, `-`를 붙이면 좌측 끝에 붙임 
  - `.`을 붙이면 문자열의 일부만 출력할 수 있음  



# 화면으로부터 입력 받기 

```java
import java.util.Scanner; // Scanner 클래스 사용하기 위해 import시킴

class EX2_10 {
    public static void main(String[] args){
		Scanner scanner =  new Scanner(System.in); // Scanner 클래스의 객체를 생성
        
        System.out.print("두 자리 정수를 하나 입력해주세요:");
        String input = scanner.nextLine();  // 입력받은 내용을 input에 저장 
        // nextLine() 메서드 호출하면 입력 대기 상태에 있다가 입력을 마치고 엔터키를 누르면 입력한 내용이 문자열로 반환 
        int num = Integer.parseInt(input); // 입력 받은 문자열을 숫자로 변환 
        
        System.out.println("입력내용 :" + input);
        System.out.printf("num=%d%n", num);
    }
}

두 자리 정수를 하나 입력해주세요:50
입력내용 :50
num=50
```

- 입력 내용에 문자 또는 기호 또는 공백이 있으면 오류 발생



# 정수형의 오버플로우

- 오버플로우 : 타입이 표현할 수 있는 값의 범위를 넘어서는 것
- 에러발생은 하지 않지만 원하는 결과를 얻지 못함 
- 정수형 타입이 표현할 수 있는 최대값에 1을 더하면 최소값이 되고 , 최소값에서 1을 빼면 최대값이 됨



# 부호있는 정수의 오버플로우

- 부호 없는 정수는 2진수로 `0000`이 될 때 오버 플로우 발생 
- 부호 있는 정수는 부호비트가 `0에서 1`이 될 때 오버플로우  발생 

```java
class EX2_11 {
    public static void main(String[] args){
		short sMin = -32768, sMax = 32767;
        
        char cMin = 0 , cMax = 65535;
        
        System.out.println("sMin = " + sMin);
        System.out.println("sMin-1 = " + (short)(sMin-1));
        System.out.println("sMax = " + sMax);
        System.out.println("sMax+1 = " + (short)(sMax+1));
        System.out.println("cMin = " + (int)cMin);
        System.out.println("cMin-1 = " + (int)--cMin);
        System.out.println("cMax = " + (int)cMax);
        System.out.println("cMax+1 = " + (int)++cMax);
    }
}

sMin = -32768
sMin-1 = 32767 // 최솟값 -1 : 최댓값
sMax = 32767
sMax+1 = -32768 // 최댓값 +1 : 최솟값
cMin = 0
cMin-1 = 65535 // 최솟값 -1 : 최댓값
cMax = 65535 
cMax+1 = 0 // 최댓값 +1 : 최솟값
```

- short 타입(정수)과 char타입의 최댓값과 최솟값에 1을 더하거나 뺀 결과를 출력



# 타입간의 변환 방법

```java
1. 숫자를 문자로 변환 - 숫자에 '0'을 더함
(char)(3 +'0')  // '3'

2. 문자를 숫자로 변환 - 문자에서 '0'을 뺌
'3' - '0' // 3
    
3. 숫자를 문자열로 변환 - 숫자에 빈 문자열 "" 을 더함
 3 +  "" // "3"
    
4. 문자열을 숫자로 변환 - Interger.parseInt() 또는 Double.parseDouble()사용
 Interger.parseInt("3") // 3
 Double.parseDouble("3.14") // 3.14
    
5.문자열을 문자로 변환 - charAt(0)사용
 "3".charAt(0) // '3'
    
6. 문자를 문자열로 변환 - 빈문자열 ""을 더함
 '3' + "" // "3"
```

```java
class EX2_12 {
    public static void main(String[] args){
		String str = "3";
        
        System.out.println(str.charAt(0) - '0'); // '3' - '0'
        System.out.println('3' - '0' +1);
        System.out.println(Integer.parseInt("3") + 1); // 3 + 1
        System.out.println("3" + 1); // "3 + "1 "
        System.out.println((char)(3+'1')); // "3 + 1"
        
    }
}

3
4
4
31
4
```



---

Java의 정석 기초편 | 남궁성 | 도우출판
