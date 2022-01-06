# 배열

- `같은 타입`의 여러 변수를 `하나의 묶음`으로 다루는 것을 `배열`이라고 함
- `같은타입` 이어야 한다는거 매우 중요!!

```java
int score1, score2, score3, score4, score5 //학생 5명의 점수를 저장
    
int[] score = new int[5] // 위에 코드를 배열로 / 5개의 int 값을 저장할 수 있는 배열을 생성
```

-  score[0］부터 score[4］까지 모두 5개이며 , 변수 score는 배열을 다루는데 필요한  참조변수일 뿐 값을 저장하기 위한 공간은 아님
- 배열은 각 저장공간이 연속적으로 배치되어 있다는  특징



#### 변수의 타입에 따른 기본값

|      자료형      |    기본값     |
| :--------------: | :-----------: |
|     boolean      |     false     |
|       char       |   '\u0000'    |
| byte, short, int |       0       |
|       long       |      0L       |
|      float       |     0.0f      |
|      double      | 0.0d 또는 0.0 |
|      참조형      |     null      |



# 배열의 선언과 생성

> 배열 생성 방법

- 원하는 타입의 변수를 선언하고 변수 또는 타입에 배열임을 의미하는 `[]`를 붙이면 됨
  - `[]`는 타입 뒤에 붙여도 되고 , 변수 이름 뒤에 붙여도 됨
- 배열을 선언한 다음에는 배열을 생성해야함
- 배열을 생성하기 위해서는 연산자 `new`와 함께 배열의 타입과 길이를 지정해 주면 됨

```java
타입[] 변수 이름; // 배열 선언 (배열을 다루기 위한 참조변수 선언)
변수이름 = new 타입[길이]; // 배열을 생성(실제 저장공간을 생성)
    
    
// 간단하게
타입[] 변수이름 = new 타입[길이];
```



# 배열의 인덱스

- 배열의 각 저장 공간을 `배열의 요소` 라고 함
- `배열이름[인덱스]`로 배열의 요소에 접근



> 인덱스 범위

- `0`부터 `배열길이-1`까지

- int[] score = new int[5]     -> 인덱스 범위 : 0~4 (0,1,2,3,4)

```java
int[] score = new int[5];
score[3] = 100; // 배열 score의 4번째 요소에 100을 저장
int value = score[3]; // 배열 score의 4번째 요소의 값을 읽어서 value에 저장
```

```java
score[0] = 0; 
score[1] = 10; 
score[2] = 20; 
score[3] = 30; 

// 위에 식을 바꿔서
for (int i=0; i <= 3; i++) { 
	score[i] = i * 10; 
} 
```



# 배열의 길이(배열이름.length)

- 배열이름.length를 통해 배열의 길이 구할 수 있음

```java
int[] score = new int[5];
int   tmp   = score.length; // score.length = 5
```

- 배열은 한번 생성하면 `길이를 변경할 수 없음` --> 이미 생성된 배열의 길이는 변경할 수 없음
  - 배열의 길이는 변하지 않는 수 , 즉 `상수`임 // 상수 : 값을 읽을 수만 있을 뿐 변경x



```java
int[] score = new int[6];  // index 범위 0~5
for (int i=0; i < 6; i++)  // i의 범위 0~5
	System. out. println (score[i]);

///////////////////////////////////////////

int[] score = new int[5];  // index 범위 0~4
for (int i=0; i < 6; i++) // i범위와(0~5) index범위 안맞음 --> 에러 발생
	System. out. println (score[i]);
```

- 범위를 그냥 적어주는 것 보다 배열이름.length를 이용하여 적어주는 것이 나음

```java
int[] score = new int[5];  
for (int i=0; i < score.length; i++) // 길이를 범위로
	System. out. println (score[i]);
```



# 배열의 초기화

- 배열은 생성과 동시에 자동적으로 기본값(0)으로 초기화 됨. 따라서 사용하기 전에 초기화를 안해줘도 됨

```java
for (int i=0; i <= 3; i++) { 
	score[i] = i * 10; 
} 

// 위처럼 for문으로 값들을 초기화할 경우 , 저장하는 값에 일정한 규칙이 있어야 하므로 아래처럼 값들을 초기화 함

int[] score = new int[]{ 50, 60, 70, 80, 90} ; 
int[] score = { 50, 60, 70, 80, 90}; // new int[]를 생략할 수 있음

// 단, 아래의 경우처럼 배열의 선언과 생성을 따로하는 경우에는 new int[]를 생략할 수 없음

int[] score
score = { 50, 60, 70, 80, 90} ; // 에러 발생!!!
score = new int[]{ 50, 60, 70, 80, 90} ; // 정상 작동!! 
```



# 배열의 출력

```java
int[] score = { 50, 60, 70, 80, 90} ;
for(int i=0; i<score.length; i++){
    System.out.println(score[i]);  // println사용으로 여러줄에 출력될 것
}

// 한줄에 출력 
int[] score = { 50, 60, 70, 80, 90} ;
for(int i=0; i<score.length; i++){
    System.out.print(score[i]); 
}
System.out.println();
```



#### `Arrays.toString(배열이름)`사용

- [첫번째 요소, 두번째 요소, ...]으로 출력

```java
int[] score = { 50, 60, 70, 80, 90} ;
System.out.println(Arrays.toString(score));
// [50, 60, 70, 80, 90]
```



- `System.out.println(score)`; 라고 바로 배열을 가리키는 참조변수를 출력하면 

  `타입@주소`의 형식으로 출력됨 ex) `[I@14318bb` 와 같은 형식의 문자열이 출력



```java
char[] chArr = { 'a', 'b', 'c', 'd' }; 
System. out. println(chArr); // abcd가출력

// 예외적으로 char배열은 println으로 출력하면 각 요소가 구분자 없이 그대로 출력
```

```java
import java.util.Arrays; // Arrays.toString() 사용하기 위해 추가
class EX5_1 {
    public static void main(String args[]) {
		int[] iArr1 = new int[10]; // index 0 ~ 9
        int[] iArr2 = new int[10];
 //     int[] iArr3 = new int[]{100,95,80,70,60};
        int[] iArr3 = {100,95,80,70,60};
        char[] chArr = {'a', 'b', 'c', 'd'};
        
        for(int i=0; i < iArr1.length; i++){
            iArr1[i] = i+1; // i = 1 ~ 10
        }
        
        for(int i=0; i < iArr2.length; i++){
            iArr2[i] = (int)(Math.random()*10) +1 ;
                // 1 ~ 10의 난수 값을 배열에 저장 
        }
        
        for(int i = 0; i < iArr1.length; i++){
            System.out.print(iArr[i] + ",");
        }
        System.out.println();
        
        System.out.println(Arrays.toString(iArr2));
        System.out.println(Arrays.toString(iArr3));
        System.out.println(Arrays.toString(chArr));
        System.out.println(iArr3); // 실행할 때 마다 달라질 수 있음
        System.out.println(chArr); 
    } // main 끝
}

1,2,3,4,5,6,7,8,9,10,
[2, 3, 10, 9, 5, 2, 9, 7, 10, 6]
[100, 95, 80, 70, 60]
[a, b, c, d]
[I@75b84c92
abcd
```



# 배열의 활용 - 총합과 평균

- 배열의 모든 요소를 더해서 총합과 평균을 구함

```java
class EX5_2 {
    public static void main(String args[]) {
		int sum = 0;
        float average = 0f;
        
        int[] score = {100,88,100,100,90};
        
        for(int i = 0; i < score.length; i++){
            sum += score[i];
        }
        average = sum /(float)score.length ; //결과값을 float형태로 얻기 위해 형변환
        System.out.println("총합 : " + sum);
        System.out.println("평균 : " + average); 
    } // main 끝
}

총합 : 478
평균 : 95.6
    
//
478 / 5 → 95 
478 / (float) 5 - 478 / 5.0f → 478.0f / 5.0f → 95.6f
```



# 배열의 활용 - 최댓값과 최솟값

- 배열의 요소 중에서 제일 큰 값과 제일 작은 값을 찾는 예제

```java
class EX5_3 {
    public static void main(String args[]) {
		int[] score = {79,88,91,33,100,55,95};
        
        int max = score[0]; // 배열의 첫번째 값으로 값을 초기화 
        int min = score[0];
        
        for(int i = 1; i < score.length; i++){
            if(score[i] > max){
                max = score[i];
            } else if(score[i] < min) {
                min = score[i];
            }
        } // end of for문
        System.out.println("최댓값 : " + max );
        System.out.println("최솟값 : " + min) ;  
    } // main 끝
} // end of class

최댓값 : 100
최솟값 : 33
```



# 배열의 활용 - 섞기（shuffle) 

- 배열의 요소의 순서를 반복해서 바꿈

```java
import java.util.Arrays;

class EX5_4 {
    public static void main(String args[]) {
		int[] numArr = {0,1,2,3,4,4,5,6,7,8,9};
        System.out.println(Arrays.toString(numArr));
        
        for(int i=0; i < 100; i++){
            int n = (int)(Math.random()*10); // 0~9사이의 난수
            int tmp = numArr[0];
            numArr[0] = numArr[n];
            numArr[n] = tmp;
            // numArr[0]값과 numArr[n]값을 서로 바꿈
        } // end of for문
        System.out.println(Arrays.toString(numArr));
    } // main 끝
} // end of class

[0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9]
[0, 5, 4, 7, 6, 8, 4, 2, 1, 3, 9]
```



# 배열의 활용 - 로또 번호 만들기

- 배열의 요소의 순서를 반복해서 바꿈

```java
class EX5_5 {
    public static void main(String args[]) {
		int[] ball = new int[45]; // 45개의 정수 값을 저장하기 위한 배열 생성
        
        for(int i = 0; i < ball.length; i++){
            ball[i] = i+1 ;// 1~45 까지 저장
        }
        
        int tmp = 0; // 두 값을 바꾸는데 사용할 임시변수
        int j = 0; // 임의의 값을 얻어서 저장할 변수 
        
        for(int i = 0; i < 6; i++){
            j = (int)(Math.random()*45); // 0~44사이의 난수 값 
            tmp = ball[i];
            ball[i] = ball[j]; // ball[i]와 ball[j]의 값을 서로 바꿈
            ball[j] = tmp;
        }
        
        for(int i = 0; i<6; i++){
            System.out.printf("ball[%d]=%d%n", i, ball[i]);
        }
        
    } // main 끝
} // end of clas

ball[0]=4
ball[1]=41
ball[2]=29
ball[3]=30
ball[4]=25
ball[5]=43
```



# String배열의 선언과 생성

- ```java
  String[] name = new String[5] // 5개의 문자열을 담을 수 있는 배열 생성
  ```

- 참조형 변수의 기본 값은 `null`이므로 각 요소의 값은 `null`로 초기화 



# String배열의 초기화

```java
String[] name = new String[]{"lee", "park", "kim"}; //초기화 

String[] name ={"lee", "park", "kim"}; // new String[] 생략 가능
```



```java
String[] name = new String[3]; 
name[O] = new String("lee"); 
name[1] = new String("park"); 
name[2] = new String("kim");

// 원래 String은 class이므로 위 처럼 new연산자를 통해 객체를 생성해야하지만 특별히 String클래스만 아래처럼 따옴표로만 간략히 표현하는 것이 허용
String[] name = new String[3]; 
name[O] = "lee"; 
name[1] = "park"; 
name[2] = "kim";
```

```java
class EX5_6 {
    public static void main(String args[]) {
		String[] name = {"lee", "park", "kim"};
        
        for(int i=0; i < names.length; i++){
            System.out.println("name["+i+"] : " + name[i]);
        }
        
        String tmp = name[2];
        System.out.println("tmp : "+ tmp);
        name[0] = "choi";
        
        for(int i = 0; i < names.length; i++){
            System.out.println(names[i]);
        }
    } // main 끝
} // end of class

name[0] : lee
name[1] : park
name[2] : kim
tmp : kim
choi
park
kim
```



# String 클래스

- 문자열이라 는 용어는 ' 문자를 연이어 늘어놓은 것 ' 을 의미하므로 문자배열인 char배열과 같은 뜻
- String클래스는 char배열에 여러 가지 기능을 추가하여 확장한 것
-  char배열을 사용하는 것보다 String클래스를 사용하는 것이 문자열을 다루기 더 편리함



#### String 클래스와 char배열의 중요한 차이

- String객체는(문자열) 읽을 수만 있을 뿐 내용을 변경할 수는 없음

```java
String str = "Java"; 
str = str + "8" ; // "Java8 " 이라는 새로운 문자열이 str에 저장된다. 
System.out.println(str); // "Java8" 
```

- 위의 예제에서 str의 값이 변경되는 것 처럼 보이지만, 문자열은 변경할 수 없기 때문에 변경된 것이 아닌 새로운 내용의  문자열이 생성된 것임



# String 클래스의 주요 메서드

|            메서드(기능)            |                          설명                          |
| :--------------------------------: | :----------------------------------------------------: |
|       char charAt(int index)       |     문자열에서 해당위치(index)에 있는 문자를 반환      |
|            int length()            |                  문자열의 길이를 반환                  |
| String substring(int from, int to) |   문자열에서 해당 범위의 문자열을 반환 (to는 포함x)    |
|     boolean equals(Object obj)     | 문자열의 내용이 같은지 확인. 같으면 true, 다르면 false |
|       char[ ] toCharArray()        |       문자열을 문자배열(char[ ])로 변환해서 반환       |

- `charAt()`메서드의 index값은 0부터 시작

```java
String str = "ABCDE"; 
char ch = str.charAt(3); // 문자열 str의 4번째 문자 ' D ' 를 ch에 저장함
```



- `substring()`은 문자열의 일부를 추출
  - 범위의 끝은 포함되지 않음 

```java
String str = "ABCDEF"; 
String ch  = str.substring(1,4); // 1,2,3,4 중에서 4는 포함되지않음
System.out.println(ch); // "BCD"; index1 ~ index3 까지  
```



- 문자열의 내용을 비교할 때는 `equals()`사용 (대소문자 구분x : `equalsIgnoreCase()`)

```java
String str = "ABCDEF"; 
if(str.equals("ABCDEF")) {
    ... // 같으면 true , 다르면 false반환
}
```



# 커맨드 라인을 통해 입력받기

- Scanner 클래스의 nextLine()외에도 화면을 통해 사용자로부터 값을 입력받을 수 있는 방법이 존재
  - `커맨드 라인을 이용하는 방법`: 프로그램을 실행할 때 클래스 이름 뒤에 공백문자로 구분하여 여러개의 문자열을 프로그램에 전달 할 수 있음

```java
C:\java-1.8.0-openjdk ..... > java MainTest abc 123 
    
// 여기서 MainTest는 main메서드가 담긴 클래스의 이름
// 입력된 두 문자열은 String배열에 담겨서 MainTest클래스의 main메서드의 매개변수(args)에 전달됨
// main메서드 내에서 args[0], args[1]과 같은 방식으로 전달받은 문자열에 접근할 수 있음
// args[0] : "abc"
// args[1] : "123"
```

```java
class EX5_7 {
    public static void main(String args[]) {
 		System.out.println("매개변수의 개수 : " + args.length);
        for(int i = 0; i < args.length; i++){
            System.out.println("args["+i+"] = \""+ args[i]+ "\"");
        }
    } // main 끝
} // end of class

C:\java-1.8.0-openjdk ..... > java EX5_7 abc 123 "Hello world" 
매개변수의 개수＝ 3 
args[0] = "abc" 
args[1] = "123' 
args[2] = "Hello world" // 커맨드 라인에 입력된 매개변수는 공백문자로 구분하기 때문에 입력될 값에 공백이 있는 경우 "Hello world"처럼 " "로 감싸줘야함

 
```



#### intelliJ에서 커맨드 라인 매개변수 입력하기

![image-20220104085328734](Ch_5.assets/image-20220104085328734.png)

- 오른쪽 상단의 망치모양 옆에 클릭 -> Edit Configurations 클릭 

![image-20220104085436326](Ch_5.assets/image-20220104085436326.png)

- Build and run에서 Program arguments에 abc 123 "Hello world" 작성
- OK버튼 누르고 ctrl + shift + F10 눌러서 run실행



# 2차원 배열의 선언

> 선언방법

|              선언 방법              |     선언 예      |
| :---------------------------------: | :--------------: |
| `타입[][] 변수이름` (선호하는 방법) | `int [][]score;` |
|         `타입 변수이름[][]`         | `int score[][]`  |
|         `타입[] 변수이름[]`         | `int[] score[]`  |

- `[ ]`를 차원의 수만큼 추가해 주면 됨

- 2차원 배열은 주로 테이블 형태의 데이터를 담는데 사용됨

  - ex ) 4행 3열을 담기위한 배열 : `int[][] score= new int[4][3]`

  - | int  | int  | int  |
    | :--: | :--: | :--: |
    | int  | int  | int  |
    | int  | int  | int  |
    | int  | int  | int  |

  - 저장공간의 타입을 적어놓은 것이고, 실제로는 int의 기본값인 0이 저장됨

  

# 2차원 배열의 인덱스

- 각 요소에 접근하는 방법 : `배열이름[행index][열index]`
  - 각 index의 범위 : `0 ~ (길이-1)`

- `int[][] score= new int[4][3]`

  - | `score[0][0]` | `score[0][1]` | `score[0][2]` |
    | :-----------: | :-----------: | :-----------: |
    | `score[1][0]` | `score[1][1]` | `score[1][2]` |
    | `score[2][0]` | `score[2][1]` | `score[2][2]` |
    | `score[3][0]` | `score[3][1]` | `score[3][2]` |

    

# 2차원 배열의 초기화 

- `{ }`를 써서 초기화 가능
- `int[][] arr = new int[][]{ {1,2,3}, {4,5,6} }`
  - `int[][] arr = { {1,2,3}, {4,5,6} }`   // `new int[][]`생략
  - 1차원 배열보다 `{ }`를 한번 더 써줘서 `행별로 구분`

```java
int[][] arr = {
    {1,2,3},
    {4,5,6}
};

// 위처럼 줄바꿈을 하여 알아보기 쉽게 해주는 것이 좋음

int[][] score = {
    {100,100,100},
    {20,20,20},
    {30,30,30},
    {40,40,40}
};
```

```java
class EX5_8 {
    public static void main(String[] args) {
        int[][] score = {
            {100,100,100},
            {20,20,20},
            {30,30,30},
            {40,40,40}
		};
		int sum = 0;
        
        for(int i = 0; i < score.length; i++) {
            for(int j = 0; j < score[i].length; j++) {
                System.out.printf("score[%d][%d] = %d%n", i, j, score[i][j]);
                sum += score[i][j];
            } // end of for j
        } // end of for i
        
        System.out.println("sum = " + sum);
    }
}

score[0][0] = 100
score[0][1] = 100
score[0][2] = 100
score[1][0] = 20
score[1][1] = 20
score[1][2] = 20
score[2][0] = 30
score[2][1] = 30
score[2][2] = 30
score[3][0] = 40
score[3][1] = 40
score[3][2] = 40
sum = 570
```

- score[i].length;    // score[3]이 참조하고 있는 배열의 길이 
  - `score[3][0], score[3][1],  score[3][2]` // 3



```java
class EX5_9 {
    public static void main(String[] args) {
		int[][] score = {
            {100,100,100}
            , {20,20,20}
            , {30,30,30}
            , {40,40,40}
            , {50,50,50}
        };
        
        // 과목별 총점
        int korTotal = 0, engTotal = 0, mathTotal = 0;
        
        System.out.println("번호  국어  영어  수학  총점  평균 ");
        System.out.println("==============================");
        
        for(int i=0; i < score.length; i++) {
            int sum = 0;
            float avg = 0.0f;
            
            korTotal += score[i][0];
            engTotal += score[i][1];
            mathTotal += score[i][2];
            System.out.printf("%3d", i+1);
            
            for(int j=0; j < score[i].length; j++) {
                sum += score[i][j];
                System.out.printf("%5d", score[i][j]);
                
            }
            
            avg = sum/(float)score[i].length; //평균계산
            System.out.printf("%5d %5.1f%n", sum, avg );
        } // end of for i
        
        System.out.println("==============================");
        System.out.printf("총점:%3d %4d %4d%n", korTotal, engTotal, mathTotal);
    }
}

번호  국어  영어  수학  총점  평균 
==============================
  1  100  100  100  300 100.0
  2   20   20   20   60  20.0
  3   30   30   30   90  30.0
  4   40   40   40  120  40.0
  5   50   50   50  150  50.0
==============================
총점:240  240  240
```



```java
import java.util.Scanner;

class EX5_10 {
    public static void main(String[] args) {
  		String[][] word = {
            {"chair", "의자"},
            {"computer", "컴퓨터"},
            {"integer", "정수"}
        } ;
        
        Scanner scanner = new Scanner(System.in);
        
        for(int i=0; i < word.length; i++) {
            System.out.printf("Q%d. %s의 뜻은?", i + 1, word[i][0]);
            
            String tmp = scanner.nextLine();
            
            if(tmp.equals(word[i][1])){
                System.out.printf("정답입니다. %n%n");
            } else {
                System.out.printf("틀렸습니다. 정답은 %s입니다. %n%n", word[i][1]);
            } // end of if
        } // end of for
        
    } // end of main
} // end of class

Qi. chair의 뜻은？dmlwk 
틀렸습니다 . 정답은 의자입니다． 
Q2. computer의 뜻은？컴퓨터 
정답입니다． 
Q3. integer의 뜻은？정수 
정답입니다． 

```



# Array로 배열 다루기

- Arrays 클래스는 배열을 다루는데 유용한 메서드 제공



> toSting()

- 배열의 모든 요소를 문자열로 편하게 출력
- 일차원 배열에만 사용가능 
- 다차원 배열에서는 deepToString() 사용
  - deep ToString()은 배열의 모든 요소를 재귀적으로 접근해서 문자열을 구성하므로 2차원 뿐만이 아니라 3차원 이상의 배열에도 동작

```java
int[] score = {0,1,2,3,4};
int[][] sum = { {11,12}, {21,22} };

System.out.println(Arrays.toString(score)); // [0, 1, 2, 3, 4]
System.out.println(Arrays.deepToString(sum)); // [[11, 12], [21, 22]] 
```



> equals()

- 두 배열에 저장된 모든 요소를 비교해서 같으면 true / 다르면 false 반환
- 일차열 배열에서만 사용가능
- 다차원 배열에서는 deepEquals() 사용

```java
String[][] str = new String[][]{{"aaa", "bbb"}, {"AAA", "BBB"}};
String[][] str2 = new String[][]{{"aaa", "bbb"}, {"AAA", "BBB"}};

System.out.println(Arrays.equals(str,str2)); // false
System.out.println(Arrays.deepEquals(str,str2)); //true
```



> copyOf()

- 배열 전체를 복사해서 새로운 배열을 반환



> copyOfRange()

- 배열의 일부를 복사해서 새로운 배열을 반환
- 지정된 범위의 끝은 포함되지 않음
- 마지막 index가 원래 복사한 배열의 index를 초과할 경우 0으로 생성

```java
int[] arr = {0,1,2,3,4};
int[] arr2 = Arrays.copyOf(arr, arr.length); // arr2 = [0,1,2,3,4]
int[] arr3 = Arrays.copyOf(arr, 3); // arr3 = [0,1,2] 
int[] arr4 = Arrays.copyOf(arr, 7); // arr4 = [0,1,2,3,4,0,0]
int[] arr5 = Arrays.copyOfRange(arr, 2, 4); // arr5 = [2,3]
int[] arr6 = Arrays.copyOf(arr, 0, 7); // arr6 = [0,1,2,3,4,0,0]

```





> sort()

- 배열을 정렬할 때 사용

```java
int[] arr = {4,2,1,3,0};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr)); // [0,1,2,3,4]
```







---

Java의 정석 기초편 | 남궁성 | 도우출판