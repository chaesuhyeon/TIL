# if문

- 제어문 : 프로그램의 흐름을 바꾸는 역할을 하는 문장
  - 조건문과 반복문이 있음
  - 조건문 : 조건에 따라 다른 문장이 수행되도록 함
  - 반복문 : 특정 문장들을 반복해서 수행



> if문

- `조건식`과 `괄호{}`로 이루어져 있음
- 조건식이 참(true)이면 괄호 { }안의 문장들을 수행함
- 조건식의 결과는 반드시 `true` 또는 `false`여야함

```java
if (조건식) {
    //조건식이 참이면 수행될 문장들을 적음
}
```

``` java
class EX4_1 {
    public static void main(String args[]) {
        int score = 80;
        
        if (score > 60) {
            System.out.println("합격입니다.");
        }
    }
}

합격입니다.
```

```java
class EX4_2 {
    public static void main(String args[]) {
		int x = 0;
        System.out.printf("x=%d 일 때, 참인 것은%n", x);
        
        if(x==0) System.out.println("x==0");
        if(x!=0) System.out.println("x!=0");
        if(!(x==0)) System.out.println("!(x==0)");
        if(!(x!=0)) System.out.println("!(x!=0)");
            
        x = 1;
        System.out.printf("x=%d 일 때, 참인 것은%n", x);
        
        if(x==0) System.out.println("x==0");
        if(x!=0) System.out.println("x!=0");
        if(!(x==0)) System.out.println("!(x==0)");
        if(!(x!=0)) System.out.println("!(x!=0)");
        }
    }

x=0 일 때, 참인 것은
x==0
!(x!=0)
x=1 일 때, 참인 것은
x!=0
!(x==0)
```

- `{ }`다음에 `;` 붙이지 않음
- 블럭안에 문장이 한문장이라면 `{ }`생략 가능하고 위 예제처럼 한줄에 작성 가능(가능하면 생략하지 않고 사용하는 것이 바람직함)



# if - else문

```java
if (조건식) {
    //조건식이 참이면 수행될 문장들을 적음
} else {
    // 조건식이 거짓일 때 수행될 문장들을 적음
}
```

```java
import java.util.Scanner;

class EX4_3 {
    public static void main(String args[]) {
		System.out.print("숫자를 입력하세요 : ");
        Scanner scanner = new Scanner(System.in);
        int input = scanner.nextInt();
        
        if (input == 0) {
            System.out.println("입력하신 숫자는 0입니다.");
        } else {
            System.out.println("입력하신 숫자는 0이 아닙니다.");
        }
     } // main 끝
  }

숫자를 입력하세요 : 5
입력하신 숫자는 0이 아닙니다.
```



# if - else if문

```java
if (조건식1) {
    //조건식1이 참이면 수행될 문장들을 적음
} else if (조건식2) {
    //조건식2의 연산결과가 참이면 수행될 문장들을 적음
} else if (조건식3) {
    //조건식3의 연산결과가 참이면 수행될 문장들을 적음
} else {
    // else블럭은 생략 가능하며, 위의 어느 조건식도 만족하지 않을 때 수행될 문장들을 적음
}
```

```java
import java.util.Scanner;

class EX4_4 {
    public static void main(String args[]) {
        int score = 0;
        char grade = ' '; // 학점을 저장하기 위한 변수로 공백으로 초기화 
        
		System.out.print("점수를 입력하세요 : ");
        Scanner scanner = new Scanner(System.in);
        score = scanner.nextInt();
        
        if (score  >=90) {
            grade = 'A';
        } else if (score >=80) {
            grade = 'B';
        } else if (score >=70) {
            grade = 'C';
        }  else {
            grade = 'D';
        }
        System.out.println("당신의 학점은 " + grade + "입니다.");
     } 
  }

점수를 입력하세요 : 90
당신의 학점은 A입니다.
```



# 중첩 if문

- if문의 블럭 내에 또 다른 if문을 포함시키는 것
- 중첩의 횟수에는 제한이 없음

```java
if (조건식1) {
    //조건식1의 연산결과가 true일 때 수행될 문장들을 적음
    if (조건식2) {
        // 조건식1과 조건식2가 모두 true일 때 수행될 문장들
    } else {
        // 조건식1은 true이고 , 조건식2는 false일 때 수행될 문장들
    } 
} else {
    // 조건식1이 false일 때 수행되는 문장들
}
```

```java
import java.util.Scanner;

class EX4_5 {
    public static void main(String args[]) {
        int score = 0;
        char grade = ' ' , opt = '0';
        
		System.out.print("점수를 입력하세요 : ");
        Scanner scanner = new Scanner(System.in);
        score = scanner.nextInt();
        
        System.out.printf("당신의 점수는 %d입니다.%n", score);
        
   		if (score >= 90) {
            grade = 'A';
            if (score >= 98) {
                opt = '+';
            } else if (score < 94) {
                opt = '-';
            } 
        } else if (score >= 80) {
            grade = 'B';
            if (score >= 88) {
                opt = '+';
            } else if (score < 84) {
                opt = '-';
            }
        } else {
            grade = 'C';
        }
        
        System.out.printf("당신의 학점은 %c%c입니다.%n", grade,opt);
     } 
  }

점수를 입력하세요 : 87
당신의 점수는 87입니다.
당신의 학점은 B0입니다.
    
점수를 입력하세요 : 98
당신의 점수는 98입니다.
당신의 학점은 A+입니다.    
```



# switch문

- 단 하나의 조건식으로 많은 경우의 수를 처리할 수 있음
- 처리할 경우의 수가 많은 경우 if문보다 switch문으로 작성하는 것이 좋음
- switch문은 제약조건이 있기 때문에 경우의 수가 많아도 어쩔수 없이 if문으로 작성해야하는 경우가 있음
- switch문은 `조건식을 먼저 계산`한 다음, 그 `결과와 일치하는 case문으로 이동` , `이동한 case문 아래에 있는 문장들을 수행`하며 `break문을 만나면 전체 switch문을 빠져나가게 됨`
- default문의 위치는 상관없으나 보통 마지막에 넣기 때문에 break문은 안써도 됨
- break문은 각 case문의 영역을 구분하는 역할을 함
  - 생략할 시 case문 사이의 구분이 없어지므로 다른 break문을 만나거나 switch문 블럭 { }의 끝을 만날 때 까지 나오는 모든 문장들을 수행함

```java
switch (조건식) {
    case 값1:
        // 조건식의 결과가 1의 값과 같을 경우 수행될 문장들
        // ...
        break; // switch문을 빠져나감
    case 값2:
         // 조건식의 결과가 2의 값과 같을 경우 수행될 문장들
        // ...
        break; // switch문을 빠져나감
     // ...
     default :
        // 조건식의 결과와 일치하는 case문이 없을 때 수행될 문장들
        // ...
}
```

###  

### switch문의 제약 조건

- switch문의 조건식은 결과 값이 반드시 `정수`여야 함
- 조건식의 결과 값과 일치하는 case문으로 이동하기 때문에 case문의 값 역시 `정수`여야 하며 중복되지 않아야 함
  - case문의 값은 반드시 상수여야함 
  - 변수나 실수는 case문의 값으로 사용할 수 없음

> switch문의 제약 조건
>
> 1. switch문의 조건식의 결과는 정수 또는 문자열이어야함
> 2. case문의 값은 정수, 상수(문자 포함), 문자열만 가능하며 중복되지 않아야 한다.



```java
import java.util.Scanner;

class EX4_6 {
    public static void main(String args[]) {

		System.out.print("현재 월을 입력하세요 : ");
        Scanner scanner = new Scanner(System.in);
        int month = scanner.nextInt();
        
        switch(month) {
            case 3:
            case 4:
            case 5:
                System.out.println("현재의 계절은 봄입니다.");
                break;
            case 6: case 7: case 8:
                System.out.println("현재의 계절은 여름입니다.");
                break;
            case 9: case 10: case 11:
                System.out.println("현재의 계절은 가을입니다.");
                break;
            default: // case 12: case 1: case 2:
                System.out.println("현재의 계절은 겨울입니다.");
        }
     } // main 끝
  }

현재 월을 입력하세요 : 7
현재의 계절은 여름입니다.
```



# 임의의 정수만들기 Math.random()

- Math.random() : 난수를 얻기 위해 사용하는 것
  - 0.0과 1.0의 범위에 속하는 하나의 double값을 반환
  - 0.0은 범위에 포함되고 1.0은 포함되지 않음
  - `0.0 <= Math.random() < 1.0`



```java
class EX4_7 {
    public static void main(String args[]) {
        int num = 0;
        
        for (int i = 1; i <= 5; i++) {
            num = (int) (Math.random() * 6) + 1;
            System.out.println(num);
        }
     } // main 끝
  }

// 1과 6사이의 난수를 출력하는 일을 5번 반복함
// 1 <= Math.random() < 7

4
3
6
5
6
```



# for문

- 반복문
  - 어떤 작업이 반복적으로 수행되도록 할 때 사용
  - 종류 : for , while, do-while문
- 반복문의 횟수를 알고 있을 때는 for문을, 그렇지 않은 경우에는 while문을 사용

```java
for (int i=1; i<=5; i++) {
    System.out.println("hello");
}

// i= 1; -> 1부터
// i <= 5; -> 5까지
// i++ -> 1씩 증가
// hello가 5번 출력

for (초기화; 조건식; 증감식) {
    // 조건식이 참인 동안만 수행되는 문장들
}
```

```java
class EX4_8 {
    public static void main(String args[]) {
		for (int i = 1; i <= 3; i++ ){
           System.out.println("hello"); 
        }
     } // main 끝
  }

hello
hello
hello
```

```java
class EX4_9 {
    public static void main(String args[]) {
		for (int i = 1; i <= 5; i++ )
           System.out.println(i);
        
        for (int i = 1; i<=5; i++)
           System.out.print(i);
        System.out.println();
     } // main 끝
  }

1
2
3
4
5
12345
```

```java
class EX4_10 {
    public static void main(String args[]) {
		int sum = 0;
        
        for (int i=1; i <=5; i++){
            sum +=i;
            System.out.printf("1부터 %2d 까지의 합: %2d%n", i, sum);
        }
     } // main 끝
  }

1부터  1 까지의 합:  1
1부터  2 까지의 합:  3
1부터  3 까지의 합:  6
1부터  4 까지의 합: 10
1부터  5 까지의 합: 15
```



# 중첩 for문

- for문안에 for문 포함

```java
class EX4_11 {
    public static void main(String args[]) {
        
        for (int i=1; i <=5; i++){
           for (int j=1; j<=i; j++) {
               System.out.print("*");
           }
            System.out.println();
        }
     } // main 끝
  }

*
**
***
****
*****
```



# while문

- 조건식이 참일 동안, 즉 조건이 거짓이 될 때 까지 블럭 { } 내의 문장을 반복

```java
while (조건식) {
    // 조건식의 연산결과가 참인 동안 반복될 문장들
}
```

```java
// 1부터 10까지 정수를 순서대로 출력

//for문
for (int i=1;i<=10;i++) {
    System.out.println(i);
}

//while문
int i=1;
while(i<=10) {
    System.out.println(i);
    i++;
}
```

```java
class EX4_12 {
    public static void main(String args[]) {
        int i=5;
        
        while(i--!=0) {
            System.out.println(i + "- I can do it");
        }
     } // main 끝
  }

// i--가 후위형이기 때문에 조건식이 평가된 후에 1의 값이 감소되어 0이 된다. 그래서 5~1이 아닌 4~0으로 출력
// 같은 코드
while(i!=0) {
    i--
    System.out.println(i + "- I can do it");
}

4- I can do it
3- I can do it
2- I can do it
1- I can do it
0- I can do it
```

```java
class EX4_13 {
    public static void main(String args[]) {
        int sum=0;
        int i=0;
        
        while (sum <= 100) {
            System.out.printf("%d - %d%n", i,sum);
            sum += ++i; // i를 1씩 증가시켜서 sum에 더해나감
        }
     } // main 끝
  }

0 - 0
1 - 1
2 - 3
3 - 6
4 - 10
5 - 15
6 - 21
7 - 28
8 - 36
9 - 45
10 - 55
11 - 66
12 - 78
13 - 91
```

```java
import java.util.*;

class EX4_14 {
    public static void main(String args[]) {
        int num=0, sum=0;
        System.out.print("숫자를 입력하세요(예:12345) : ");
        
        Scanner scanner = new Scanner(System.in);
        String tmp = scanner.nextLine();
        num = Integer.parseInt(tmp);
        
        while(num!=0) {
            sum += num%10; // num을 10으로 나눈 나머지를 sum에 더함
            System.out.printf("sum=%3d num=%d%n", sum, num);
            num /= 10; // num을 10으로 나눈 값을 다시 num에 저장 
        }
       		System.out.println("각 자리수의 합: " + sum );
     } // main 끝
  }

숫자를 입력하세요(예:12345) : 12345
sum=  5 num=12345
sum=  9 num=1234
sum= 12 num=123
sum= 14 num=12
sum= 15 num=1
각 자리수의 합: 15
```



# do-while문

- while문의 변형으로 조건식과 블럭 { }의 순서를 바꿔놓은 것
- while문과 반대로 블럭 { }을 먼저 수행한 후에 조건식을 평가함
- 많이 쓰이지는 않지만 반복적으로 사용자의 입력을 받아서 처리할 때 유용

```java
do {
    //조건식의 연산결과가 참일 때 수행될 문장들을 적음)처음 한 번은 무조건 실행
} while (조건식);  // 끝에 ; 꼭 써줘야함!!
```

```java
import java.util.*;

class EX4_15 {
    public static void main(String args[]) {
		int input=0, answer=0;
        
        answer= (int)(Math.random() * 100) +1 ; //1~100 사이의 난수
        Scanner scanner = new Scanner(System.in);
        
        do {
            System.out.print("1과 100사이의 정수를 입력하세요: ");
            input = scanner.nextInt();
            
            if(input > answer) {
                System.out.println("더 작은 수로 다시 시도해보세요");
            } else if(input < answer) {
                System.out.println("더 큰 수로 다시 시도해보세요");
            }
        } while (input != answer); // ; 잊지 않기
        
        System.out.println("정답입니다.");
        
    } // main 끝
  }

1과 100사이의 정수를 입력하세요: 90
더 작은 수로 다시 시도해보세요
1과 100사이의 정수를 입력하세요: 80
더 작은 수로 다시 시도해보세요
1과 100사이의 정수를 입력하세요: 50
더 작은 수로 다시 시도해보세요
1과 100사이의 정수를 입력하세요: 30
더 작은 수로 다시 시도해보세요
1과 100사이의 정수를 입력하세요: 20
더 큰 수로 다시 시도해보세요
1과 100사이의 정수를 입력하세요: 25
더 큰 수로 다시 시도해보세요
1과 100사이의 정수를 입력하세요: 27
더 작은 수로 다시 시도해보세요
1과 100사이의 정수를 입력하세요: 26
정답입니다.
```



# break문

- break문은 자신이 포함된 가장 가까운 반복문을 벗어남
- 주로 if문과 함께 사용되어 특정 조건을 만족할 때 반복문을 벗어나게 됨

```java
class EX4_16 {
    public static void main(String args[]) {
        int sum=0, i=0;
        
        while (true) {
            if(sum > 100) // sum의 값이 100을 넘으면 if문이 참이 되어 break문이 실행되고, while문을 빠져나가게 됨
                break;
            ++i;
            sum += i;
        } // while문 끝
        
        System.out.println("i=" +i);
        System.out.println("sum=" + sum);
     } // main 끝
  }

i=14
sum=105
```



# continue문

- continue문은 반복문 내에서만 사용될 수 있음
- 반복이 진행되는 도중에 continue문이 나오면 반복문의 끝으로 이동하여 다음 반복으로 넘어감
- for문의 경우 증감식으로 이동하며, while문과 do-while문의 경우 조건식으로 이동함
- 주로 if문과 함께 사용되어 특정 조건을 만족하는 경우에  continue문 이후의 문장들을 수행하지 않고 다음 반복으로 넘어가서 계속 진행하도록 함
- 전체 반복 중에 특정 조건을 만족하는 경우를 제외하고자 할 때 유용

```java
class EX4_17 {
    public static void main(String args[]) {
		for (int i=0;i<=10;i++) {
            if (i%3==0)
                continue;
           	System.out.println(i); // continue문이 실행되면 i출력 x
        } // continue문이 실행되면 여기로 이동 
     } // main 끝
  }

1
2
4
5
7
8
10
```

```java
import java.util.*;

class EX4_18 {
    public static void main(String args[]) {
        int menu=0, num=0;
        
        Scanner scanner = new Scanner(System.in);
        
        while(true) {
            System.out.println("(1) square");
            System.out.println("(2) square root");
            System.out.println("(3) log");
            System.out.print("원하는 메뉴(1~3)을 선택하세요.(종료:0) : ");
            
            String tmp = scanner.nextLine(); // 화면에서 입력받은 내용을 tmp에 저장
            menu = Integer.parseInt(tmp); // 입력받은 tmp을 숫자로 변환
            
            if (menu ==0) {
                System.out.println("프로그램을 종료합니다");
                break;
            } else if (!(1 <= menu && menu <= 3)) {
                System.out.println("메뉴를 잘못 선택하셨습니다.(종료는 0)");
                continue;
            }
            System.out.println("선택하신 메뉴는" + menu+"번 입니다.");
        }    
    } // main 끝
  }

(1) square
(2) square root
(3) log
원하는 메뉴(1~3)을 선택하세요.(종료:0) : 5
메뉴를 잘못 선택하셨습니다.(종료는 0)
    
(1) square
(2) square root
(3) log
원하는 메뉴(1~3)을 선택하세요.(종료:0) : 1
선택하신 메뉴는1번 입니다.
    
(1) square
(2) square root
(3) log
원하는 메뉴(1~3)을 선택하세요.(종료:0) : 0
프로그램을 종료합니다
```



# 이름 붙은 반복문

- break문은 근접한 단 하나의 반복문만 벗어날 수 있기 때문에, 여러 개의 반복문이 중첩된 경우에는 break문으로 중첩 반복문을 완전히 벗어날 수 없음
- 이 때는 중첩 반복문 앞에 이름을 붙이고 break문과 continue문에 이름을 지정해 줌으로써 하나 이상의 반복문을 벗어나거나 반복문을 건너뛸 수 있음

```java
class EX4_19 
{
    public static void main(String args[]) 
    {
		//for문에 Loop1라는 이름을 붙임
        Loop1 : for(int i=2; i<=9; i++) {
            for(int j=1; j <=9; j++) {
                if (j==5)
                    break Loop1;
//                	break;
//                	continue Loop1;
//                	continue;
                System.out.println(i+"*"+j+"="+ i*j);
            } // end of for i
            System.out.println();
        } // end of Loop1
        
     } // main 끝
  }

//break Loop1
2*1=2
2*2=4
2*3=6
2*4=8
    
// break (2단부터 9단까지 4줄씩 출력)
2*1=2
2*2=4
2*3=6
2*4=8
 ... ~
9*1=9
9*2=18
9*3=27
9*4=36
    
```



```java
import java.util.*;

class EX4_20 {
    public static void main(String args[]) {
        int menu=0, num=0;
        Scanner scanner = new Scanner(System.in);
        
        outer: // while문의 이름으로 outer라고 부여 
        while(true) {
            System.out.println("(1) square");
            System.out.println("(2) square root");
            System.out.println("(3) log");
            System.out.print("원하는 메뉴(1~3)을 선택하세요.(종료:0) : ");
            
            String tmp = scanner.nextLine(); // 화면에서 입력받은 내용을 tmp에 저장
            menu = Integer.parseInt(tmp); // 입력받은 tmp을 숫자로 변환
            
            if (menu ==0) {
                System.out.println("프로그램을 종료합니다");
                break;
            } else if (!(1 <= menu && menu <= 3)) {
                System.out.println("메뉴를 잘못 선택하셨습니다.(종료는 0)");
                continue;
            }
            for(;;) {
                System.out.print("계산할 값을 입력하세요.(계산종료:0, 전체종료:99) : ");
                tmp = scanner.nextLine();
                num = Integer.parseInt(tmp);
                
                if (num == 0)
                    break; // 계산 종료 for문을 벗어남
                if(num == 99)
                    break outer; // 전체 종료 for문과 while문을 모두 벗어남
                
                switch(menu) {
                    case 1:
                        System.out.println("result=" + num*num);
                        break;
                    case 2:
                        System.out.println("result=" + Math.sqrt(num));
                        break;
                    case 3:
                        System.out.println("result=" + Math.log(num));
                        break;
                }
            } // for(;;) 
        }    // while의 끝
    } // main 끝
  }

(1) square
(2) square root
(3) log
원하는 메뉴(1~3)을 선택하세요.(종료:0) : 1
계산할 값을 입력하세요.(계산종료:0, 전체종료:99) : 3
result=9
계산할 값을 입력하세요.(계산종료:0, 전체종료:99) : 0
(1) square
(2) square root
(3) log
원하는 메뉴(1~3)을 선택하세요.(종료:0) : 2
계산할 값을 입력하세요.(계산종료:0, 전체종료:99) : 4
result=2.0
계산할 값을 입력하세요.(계산종료:0, 전체종료:99) : 0
(1) square
(2) square root
(3) log
원하는 메뉴(1~3)을 선택하세요.(종료:0) : 0
프로그램을 종료합니다
```

- for(;;) : 무한 반복문
- Math.sqrt() :  특정값의 제곱근을 구하는 메소드
  - Math.sqrt() 메소드는 입력값과 출력값은 모두 double형이며 Math.sqrt(대상숫자)를 넣어주면 됨
- Math.log() : 자연로그 함수
  - Math.log10() : 밑이 10인 로그함수

# 

---

Java의 정석 기초편 | 남궁성 | 도우출판