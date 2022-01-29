# 프로그램 오류

- **컴파일 에러** : 컴파일 할 때 발생하는 에러
- **런타임 에러** : 프로그램의 실행 도중에 발생하는 에러
- **논리적 에러** : 컴파일도 잘되고 실행도 잘 되지만 의도한 것과 다르게 동작하는 것 
- 소스코드를 컴파일 하면 컴파일러가 소스코드(*.java)에 대해 오타나 잘못된 구문, 자료형 체크 등의 기본적인 검사를 수행하여 오류가 있는지 알려줌
  - 컴파일러가 알려준 에러들을 모두 수정해서 컴파일을 성공적으로 마치면 클래스 파일(*.class)이 생성됨
- **에러**(error) : 프로그램 코드에 의해서 수습될 수 없는 심각한 오류
- **예외**(exception) : 프로그램 코드에서 수습될 수 있는 다소 미약한 오류 



# 예외 클래스의 계층적 구조

- 자바에서는 실행 시 발생할 수 있는 오류(Exception과 Error)를 클래스로 정의
- 모든 클래스의 조상은 Object 클래스이므로  Exception과 Error 클래스 역시 Object클래스의 자손들임
- 모든 예외의 최고 조상은 Exception 클래스
  - 예외 클래스는 두 그룹으로 나뉨
  - Exception클래스와 그 자손들（RuntimeException과 자손들 제외）
  - RuntimeException클래스와 그 자손들



# Exception과 RuntimeException

- **Exception 클래스 들** : 사용자의 실수와 같은 외적인 요인에 의해 발생하는 예외(외부의 영향으로 발생하는 것들로서 사용자의 동작에 의해서 발생하는 경우가 많음)

  - 존재하지 않는 파일의 이름을 입력（FileNotFoundException)
  - 클래스의 이름을 잘못 적음 (ClassNotFoundException)
  - 입력한 데이터 형식이 잘못된 경우（DataFormatException) 

  

- **RuntimeException** : 프로그래머의 실수로 발생하는 예외

  - 배열의 범위를 벗어남（ArraylndexOutOfBoundsException ) 
  - 값이 null인 참조변수의 멤버를 호출함 ( NullPointerException ) 
  - 정수를 0으로 나누려고 하는 경우（ArithmeticException）
  - 클래스간 형변환을 잘못한 경우 （ClassCastException ) 



# 예외 처리하기-  try - catch문

- 예외처리(exception handling) : 프로그램 실행 시 발생할 수 있는 예기치 못한 예외의 발생에 대비한 코드를 작성하는 것 
  - 목적 : 예외의 발생으로 인한 실행중인 프로그램의 갑작스런 비정상 종료를 막고, 정상적인 실행상태를 유지할 수 있도록 함
- 예외처리를 하지 못하면 프로그램은 비정상적으로 종료되며, JVM의 예외처리기가 받아서 예외의 원인을 화면에 출력



```java
try {
    
} catch (Exception1 e1) {
    // Exception1이 발생했을 경우, 이를 처리하기 위한 문장을 적음
} catch (Exception2 e2) {
    // Exception2이 발생했을 경우, 이를 처리하기 위한 문장을 적음
} catch (ExceptionN eN) {
    // ExceptionN이 발생했을 경우, 이를 처리하기 위한 문장을 적음
}
```

- 하나의 try 블럭 다음에는 여러 종류의 예외를 처리할 수 있도록 하나 이상의 catch 블럭이 올 수 있음
  - 이 중 발생한 예외의 종류와 일치하는 단 한개의 catch블럭만 수행됨
  - 발생한 예외의 종류와 일치하는 catch블럭이 없으면 예외는 처리되지 않음

- `{ }` 생략 절대 불가 !!



# try-catch문에서의 흐름

- try 블럭 내에서 예외가 발생한 경우

  - 발생한 예외와 일치하는 catch블럭이 있는지 확인함
  - 일치하는 catch블럭을 찾게되면 그 catch블럭 내의 문장을 수행하고 전체 try-catch문을 빠져나가서 그 다음 문장을  계속해서 수행. 만일 일치하는 catch블럭을 찾지 못하면 예외는 처리되지 못함

- try 블럭 내에서 예외가 발생하지 않은 경우

  - catch블럭을 거치지 않고 전에 try - catch문을 빠져나가서 수행을 계속 함

  

```java
class EX8_1 {
    public static void main(String[] args) {
        System.out.println(1);
        
        try {
            System.out.println(2);
            System.out.println(3);
        } catch (Exception e) {
            System.out.println(4); // 실행 x
        } // try-catch 끝
        System.out.println(5);
    }
}
1
2
3
5
// 예외가 발생하지 않았으므로 catch블럭의 문장이 실행되지 않음
```



```java
class EX8_2 {
    public static void main(String[] args) {
        System.out.println(1);
        
        try {
            System.out.println(0/0); // 0으로 나눠서 ArithmeticException 발생
            System.out.println(2); // 실행 x
        } catch (ArithmeticException ae) {
            System.out.println(3); // 실행 o
        } // try-catch 끝
        System.out.println(4);
    } // main 메서드 끝 
}

1
3
4
    
// try 블럭에서 예외가 발생했기 때문에 try블럭을 바로 벗어나서 2는 출력되지 않음
// 발생한 예외는 해당하는 catch블럭으로 이동하여 문장들을 수행한 후에 전체 try-catch문을 벗어나서 그 다음 문장을 실행하여 4를 출력
```



# 예외의 발생과 catch블럭

- catch블럭의 `()`에는 처리하고자 하는 예외와 같은 타입의 참조변수를 하나 선언해줘야 함
- 예외가 발생하면, 발생한 예외에 해당하는 클래스의 인스턴스가 만들어짐
- 위의 예제에선 ArithmeticException이 발생했으므로 ArithmeticException인스턴스가 생성 됨
- catch블럭의 괄호`()` 내에 선언된 참조변수의 종류와 생성된 예외크래스의 인스턴스에 `instanceof 연산자`를 이용해서 검사하게 되는데, 검사결과가 true인 catch블럭을 만날 때 까지 검사는 계속 됨
- 검사결과가 true인 catch블럭을 찾게되면 블럭안에 문장들을 모두 수행한 후에 try-catch문을 빠져나가고 예외 처리 됨

- 모든 예외 클래스는 Exception 클래스의 자손이므로, catch블럭의 괄호()에 Exception 클래스 타입의 참조변수를 선언해 놓으면 어떤 종류의 예외가 발생하더라도 이 catch블럭에 의해서 처리 됨



```java
class EX8_3 {
    public static void main(String[] args) {
        System.out.println(1);
        System.out.println(2);
        
        try {
            System.out.println(3);
            System.out.println(0/0); // 0으로 나눠서 ArithmeticException 발생
            System.out.println(4); // 실행 x
        } catch (Exception e) {
            System.out.println(5); // 실행 o
        } // try-catch 끝
        System.out.println(6);
    } // main 메서드 끝 
}


1
2
3
5
6    
// ArithmeticException 클래스는 Exception 클래스의 자손이므로 ArithmeticException 인스턴스와Exception 클래스와의 instanceof 연산 결과가 true가 되어 Exception 클래스 타입의 참조변수를 선언한 catch블럭의 문장들이 수행되고 예외 처리가 됨 
```

```java
class EX8_4 {
    public static void main(String[] args) {
        System.out.println(1);
        System.out.println(2);
        
        try {
            System.out.println(3);
            System.out.println(0/0); // 0으로 나눠서 ArithmeticException 발생
            System.out.println(4); // 실행 x
        } catch (ArithmeticException ae) {
            if (ae instanceof ArithmeticException) {
                System.out.println("true");
            }
            System.out.println("ArithmeticException")
        } catch (Exception e) {
            System.out.println("Exception"); // ArithmeticException를 제외한 모든 예외 처리
        } // try-catch 끝
        System.out.println(6);
    } // main 메서드 끝 
}
                               
1
2
3
true
ArithmeticException
6    
```

 

# printStackTrace()와 getMessage()

- 예외가 발생했을 때 생성되는 예외 클래스의 인스턴스에는 발생한 예외에 대한 정보가 담겨있음
  - getMessage() 와 printStackTrace()를 통해서 정보들을 얻을 수 있음
  - catch블럭의 괄호()에 선언된 참조변수를 통해 이 인스턴스에 접근할 수 있음
    - 이 참조변수는 선언된 catch블럭 내에서만 사용 가능



- printStackTrace() : 예외발생 당시의 호출스택(Call Stack)에 있었던 메서드 정보와 예외 메세지를 화면에 출력함
- getMessage() : 발생한 예외클래스의 인스턴스에 저장된 메세지를 얻을 수 있음

```java
class EX8_5 {
    public static void main(String[] args) {
        System.out.println(1);
        System.out.println(2);
        
        try {
            System.out.println(3);
            System.out.println(0/0); // 예외 발생 !!! / 0으로 나눠서 ArithmeticException 발생
            System.out.println(4); // 실행 x
        } catch (ArithmeticException ae) {
          	ae.printStackTrace();
            System.out.println("예외메시지 : " + ae.getMessage());
        } // try-catch 끝
        System.out.println(6);
    } // main 메서드 끝 
}

1
2
3
java.lang.ArithmeticException: / by zero 
at Ex8_5.main(Ex8_5.java:8) 
예외메시지 : / by zero 
6 
```



# 멀티 catch 블럭

- catch블럭을 `|`기호를 이용해서 하나의 catch블럭으로 합칠 수 있게 됨  --> 멀티 catch블럭
- 멀티 catch블럭을 이용하면 중복된 코드를 줄일 수 있음
- `|`(논리 연산자 x)로 연결할 수 있는 예외클래스의 개수에는 제한이 없음

```java
try {
    
   ...
} catch (ExceptionA e) {
    e.printStackTrace();
} catch (ExceptionB e2) {
    e2.printStackTrace();
}


// 멀티 catch블럭 이용
try {
    ...
} catch (ExceptionA | ExceptionB e) {
    e.printStackTrace();
}
```

- 만일 멀티 catch블럭의 `|`기호로 연결된 예외클래스가 조상과 자손의 관계에 있다면 `컴파일 에러`발생
  - 두 예외 클래스가 조상과 자손의 관계에 있다면, 그냥 조상 클래스만 써주는 것과 똑같기 때문
- 멀티 catch블럭은 하나의 catch블럭으로 여러 예외를 처리하는 것이기 때문에 어떤 예외가 발생한건지 알 수 없음. 그래서 참조변수 e로 멀티 catch블럭에 `|`기호로 연결된 예외 클래스들의 공통 분모인 조상 예외 클래스에 선언된 멤버만 사용할 수 있음 



# 예외 발생 시키기

- 키워드 `throw`를 사용하여  프로그래머가 고의로 예외를 발생시킬 수 있음

```java
1. 연산자 new를 이용해서 발생시키려는 예외 클래스의 객체를 만든 다음
    Exception e = new Exception("고의로 발생시켰음");

2. 키워드 throw를 이용해서 예외를 발생시킴
    throw e;
```

```java
class EX8_5 {
        
        try {
            Exception e = new Exception("고의로 발생시켰음.");
            throw e; // 예외를 발생시킴
            // throw new Exception("고의로 발생시켰음.") 위 두문장을 한문장으로
            
        } catch (Exception e) {
            System.out.println("예외메시지 : " + e.getMessage());
            e.printStackTrace();
        } // try-catch 끝
        System.out.println("프로그램이 정상 종료 되었음.");
    } // main 메서드 끝 
}

에러 메시지 : 고의로 발생시켰음. 
java. lang. Exception: 고의로 발생시켰음． 
at Ex8_6.main(Ex8_6.java:4) 
프로그램이 정상 종료되었음． 
```

- Exception 인스턴스를 생성할 때 , 생성자에 String을 넣어주면 이 String이 Exception 인스턴스에 메세지로 저장되고, getMessage()를 이용해서 메세지 내용을 얻을 수 있음 



# checked예외, unchecked예외

- **checked 예외** : 컴파일러가 예외처리 여부를 체크(예외 처리 필수)

```java
class EX8_7 {
    public static void main(String[] args) {
        throw new Exception(); // Exception을 고의로 발생시킴
    }
}

 Ex8_7.java:3: unreported exception java.lang.Exception; must be caught or declared
to be thrown  throw new Exception();
^
1 error
```

- 이 예제는  예외처리를 해주지 않아서 컴파일 에러가 발생
- 따라서 Exception 클래스와 그 자손들(checked예외)이 발생할 가능성이 있는 문장들에 대해 예외처리를 해줘야 함



- **unchecked예외** : 컴파일러가 예외 처리 여부를 체크 안함(예외 처리 선택 )

```java
class EX8_8 {
    public static void main(String[] args) {
        throw new RuntimeException(); // RuntimeException을 고의로 발생시킴
    }
}
Exception in thread " main" java.lang.RuntimeException 
at  Ex8_7.main(Ex8_7.java:3)
```

- 위의 예제와는 다르게 컴파일 오류는 안나지만(컴파일은 성공적),  RuntimeException이 발생하여 비정상적으로 종료될 것임
- RuntimeException 클래스와 그 자손(unchecked예외)에 해당하는 예외는 프로그래머가 실수로 발생하는 것이기 때문에 예외처리를 강제하지는 않음 
- 만일 RuntimeException 클래스들에 속하는 예외가 발생할 가능성이 있는 코드에도 예외처리를 해야한다면, 참조 변수와 배열이 사용되는 모든 곳에 예외처리를 해줘야 함 



# 메서드에 예외 선언하기

- 메서드 호출시 발생가능한 예외를 호출하는 쪽에 알리는 것 
- 메서드의 선언부에 `throws`를 사용해서 메서드 내에서 발생할 수 있는 예외를 적어주면 됨 (예외 발생 키워드 `throw`와 헷갈리지 x)
- checked예외만 적어주는 것이 정석임 (unchecked예외를 적어도 되긴 함)
- 예외가 여러개일 경우 `,`로 구분

```java
void method() throws Exception1, Exception2, ... , ExceptionN {
    // 메서드 내용
}


//
void method() throws Exception {
    // 메서드 내용
}
위와 같이 예외를 선언하면(모든 예외의 최고 조상인 Exception 클래스를 메서드에 선언), 이 메서드는 모든 종류의 예외가 발생할 가능성이 있다는 뜻
```

```java
class EX8_9 {
    public static void main(String[] args) throws Exception {
        method1(); // 같은 클래스 내의 static 멤버 이므로 객체 생성없이 직접 호출 가능 
        
    } // main 메서드의 끝 
    
    static void method1() throws Exception {
        method2();
    } // method1의 끝
    
      static void method2() throws Exception {
        throw new Exception();
    } // method2의 끝  
}

 
Exception in thread "main" java.lang.Exception 
at Ex8_9.method2(Ex8_9.java: 11) 
at Ex8_9.methodl(Ex8_9.java :7) 
at Ex8-9.main(Ex8_9.java:3) 
```

- 예외가 발생한 메서드에서 예외처리를 하지 않고 자신을 호출한 메서드에게 예외를 넘겨줄 수있지만 , 예외 처리가 된 것은 아니기 때문에 반드시 어느 한 곳에서는 try-catch문으로 예외 처리를 해줘야 함 
- 예외가 선언되어 있으면 Exception과 같은 checked예외를  try-catch문으로 처리를 하지 않아도 컴파일 오류는 발생 안됨 



```java
import java.io.*;

class EX8_10 {
    public static void main(String[] args) {
        try {
            File f = createFile(args[0]);
            System.out.println(f.getName() + "파일이 성공적으로 생성되었습니다.");
        } catch (Exception e) {
            System.out.println(f.getMessage() + "다시 입력해 주시기 바랍니다.");
        }
    } // main 메서드 끝 
    
    static File createFile(String fileName) thorws Exception {
        if (fileName == null || fileName.equals("")) {
            throw new Exception("파일 이름이 유요하지 않습니다.");
        }
        File f = new File(fileName); // File 클래스의 객체를 만든다.
        f.createNewFile(); // File객체의 createNewFile 메서드를 이용해서 실제 파일을 생성한다.
        return f; // 생성된 객체의 참조를 반환한다.
    } // createFile메서드의 끝
} // 클래스의 끝 
```



# finally 블럭

- 예외의 발생 여부와 상관없이 실행되어야할 코드
- 코드의 중복을 없앨 수 있음

```java
try {
    // 예외가 발생할 가능성이 있는 문장
} catch (Exception1 e1) {
    // 예외 처리를 위한 문장
} finally {
    // 예외의 발생여부에 관계없이 항상 수행되어야 하는 문장들을 넣음
}
```

- 예외가 발생한 경우 : try - catch - finally 순으로 실행
- 예외가 발생 하지 않은 경우 : try - finally 순으로 실행   



# 사용자 정의 예외 만들기

- 프로그래머는 새로운 예외 클래스를 정의하여  사용할 수 있음
- 보통 Exception 클래스 또는 RuntimeException 클래스로부터 상속받는 클래스를 만들지만 필요에 따라서 알맞은 예외 클래스를 선택할 수 있음
- 사용자 정의 예외 클래스도 메세지를 저장할 수 있으려면 String을 매개변수롤 받는 생성자를 추가해줘야 함

```java
class MyException extends Exception {
    // 에러 코드 값을 저장하기 위한 필드 추가
    private final int ERR_CODE; 
    
    // 생성자를 통해 초기화
    MyException(String msg, int errCode) {
        super(msg)
            ERR_CODE = errCode;
    }
    
    MyException(Sting msg) { // 생성자
        this(msg, 100); // ERR_CODE를 100으로 초기화 (기본값)
    }
    public int getErrCode() { // 에러코드를 얻을 수 있는 메서드 추가 
        return ERR_CODE;
    }
}
```



```java
class EX8_11 {
    public static void main(String args[]) {
        try {
            startInstall(); // 프로그램 설치에 필요한 준비를 한다.
            copyFiles(); // 파일들을 복사한다.
        } catch (SpaceException e) {
            System.out.println("에러 메세지 : " + e.getMessage());
            e.printStackTrace();
            System.out.println("공간을 확보한 후에 다시 설치하시기 바랍니다.");
        } catch (MemoryException me) {
            System.out.println("에러 메세지 : " + me.getMessage());
            me.printStackTrace();
            System.out.gc(); // Garbage Collection을 수행하여 메모리를 늘려준다.
            System.out.println("다시 설치를 시도하세요.");
        } finally {
            deleteTempFiles(); // 프로그램 설치에 사용된 임시파일들을 삭제한다
        } // try 끝 
    } // main 끝 
    
    static void startInstall() throws SpaceExceptionn, MemoryException {
        if (!enoughSpace())  // 충분한 설치 공간이 없으면...
            throw new SpaceException("설치할 공간이 부족합니다.");
        if (!enoughMemory())
            throw new MemoryException("메모리가 부족합니다.");
    } // startInstall 메서드 끝 
    
    static void copyFiles() {/* 파일들을 복하사는 코드를 적는다. */}
    static void deleteTempFiles() {/* 임시파일들을 삭제하는 코드를 적는다. */}
    static boolean enoughSpace() {
        //설치하는데 필요한 공간이 있는지 확인하는 코드를 적는다.
        return true;
    }
} // ExceptionTest 클래스의 끝

class SpaceException extends Exception {
    SpaceException(String msg) {
        super(msg);
    }
}

class MemoryException extends Exception {
    MemoryException(String msg) {
        super(msg);
    }
}
```

- SpaceException , MemoryException  : 사용자 정의 클래스
  - 두 예외는 startInstall을 수행하는 동안에 발생할 수 있음



# 예외 되던지기(exception re-throwing)

- 한 메서드에서 발생할 수 있는 예외가 여러개인경우, 몇개는 try-catch문을 통해서 메서드 내에서 자체적으로 처리하고, 나머지는 선언부에 지정하여 호출한 메서드에서 처리하도록 함으로써 양쪽에서 나눠서 처리할 수있도록 할 수있음
- 단 하나의 예외에 대해서도 예외가 발생한 메서드와 호출한 메서드, 양쪽에서 처리하도록 할 수 있음
- 예외를 처리한 후에 인위적으로 다시 발생시키는 방법을 통해서 가능한 것인데, 이것을 **예외 되던지기** 라고 함 
  - 예외가 발생할 가능성이 있는 메서드에서 try - catch문을 사용해서 예외 처리를 해주고
  - catch문에서 필요한 작업을 행한 후에 throw문을 사용해서 예외를 다시 발생시킴
  - 다시 발생한 예외는 이 메서드를 호출한 메서드에게 전달되고 호출한 메서드의 try - catch문에서 예외를 또 다시 처리 함
- 주의해야할 점 : **예외가 발생할 메서드에서는 try - catch문**을 사용해서 예외 처리를 해주고, 동시에 **메서드의 선언부에 발생할 예외를  thorws 에 지정**해 줘야 함



```java
class EX8_12 {
    public static void main(String[] args) {
        try {
            method1();
        } catch (Exception e) {
            System.out.println("main메서드에서 예외가 처리되었습니다.")
        }
    } // main의 끝
    
    static void method1() throws Exception {
        try {
            throw new Exception();
        } catch (Exception e) {
            System.out.println("method1메서드에서 예외 처리가 되었습니다.");
            throw e; // 다시 예외 발생 시킴 
        }
    } // method1 메서드의 끝 
}
method1메서드에서 예외가 처리되었습니다.
main메서드에서 예외가 처리되었습니다.
```

- 반환값이 있는 return문의 경우 catch 블럭에도 return문이 있어야 함. 예외가 발생했을 경우에도 값을 반환해야하기 때문

```java
static int method1() {
    try {
        System.out.println("method1()이 호출되었습니다.");
        return 0; // 현재 실행중인 메서드 종료 
    } catch (Exception e) {
        e.printStackTrace();
        return 1; // catch블럭 내에도 return문이 필요
    } finally {
        System.out.println("method4()의 finally블럭이 실행되었습니다.");
    }
} // method1 메서드 끝 
```



# 연결된 예외(chained exception)

- 한 예외가 다른 예외를 발생시킬 수 있음
  - 예외 A가 예외 B를 발생시켰다면, A를 B의 `원인 예외(cause exception)`라고 함 
- 여러가지 예외를 하나의 큰 분류의 예외로 다루기 위해서 원인 예외로 등록하여 다시 예외를 발생 시킴
- 두 예외는 상속관계가 아니여도 상관 없음

```java
try {
    startInstall(); // SpaceException예외 발생
    copyFiles();
} catch (SpaceException e) {
    InstallException ie  = new InstallException("설치중 예외 발생"); // 예외 생성
    ie.initCause(e); // InstallException의 원인 예외를 SpaceException으로 지정
    throw ie; // InstallException을 발생시킨다.
} catch (MemoryException me) {
    ...
}
```

- 먼저 InstallException을 생성한 후에 `initCause()로 원인예외를 등록`하고, `throw`로 예외를 발생 시킴

```java
Throwable initCause(Trowable cause) // 지정한 예외를 원인 예외로 등록
Throwable getCause() // 원인 예외를 반환
```



- checked예외를 unchecked예외로 바꿀 수 있도록 하기 위해서도 원인예외를 사용 

```java
static void startInstall() throws SpaceException ,MemoryException {
    if(!enoughSpace())
        throw new SpaceException("설치할 공간이 부족합니다.");
    if(!enoughMemory())
        throw new MemoryException("메모리가 부족합니다.");
}

↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

static void startInstall() throws SpaceException  {
    if(!enoughSpace())
        throw new SpaceException("설치할 공간이 부족합니다.");
    if(!enoughMemory())
        throw new RuntimeException(new MemoryException("메모리가 부족합니다."));
} // startInstall메서드 끝 

// initCause 대신에 RuntimeException의 생성자 이용
// startInstall() 선언부에 MemoryException을 선언하지 않아도 됨
```

```java
RuntimeException(Throwable cause) // 원인 예외를 등록하는 생성자
```



```java
class EX8_13 {
    public static void main(String args[]) {
        try {
            install();
        } catch(InstallException e) {
            e.printStackTrace();
        } catch(Exception e) {
            e.printStackTrace();
        }
    } // main 메서드 끝 
    
    static void install() throws InstallException {
        try {
            startInstall(); // 프로그램 설치에 필요한 준비를 한다.
            copyFiles(); // 파일들을 복사한다.
        } catch (SpaceException2 e) {
            InstallException ie = new InstallException("설치 중 예외 발생");
            ie.initCause(e);
            throw ie;
            
        } catch (MemoryException2 me) {
            InstallException ie = new InstallException("설치 중 예외 발생");
            ie.initCause(me);
            throw ie;
        } finally {
            deleteTempFiles(); // 프로그램 설치에 사용된 임시파일들을 삭제한다
        } // try 끝 
    }
    
    static void startInstall() throws SpaceException2 ,MemoryException2 {
        if(!enoughSpace()) {
        	throw new SpaceException2("설치할 공간이 부족합니다.");
        }
        
    	if(!enoughMemory()) {
        	throw new MemoryException2("메모리가 부족합니다.");
        	// throw new RuntimeException(new MemoryException("메모리가 부족합니다."));
		}
	} // startInstall 메서드 끝 
    
	static void copyFiles() {/* 파일들을 복사하는 코드를 적는다. */}
	static void deleteTempFiles() {/* 임시파일들을 삭제하는 코드를 적는다. */}
	static boolean enoughSpace() {
        // 설치하는데 필요한 공간이 있는지 확인하는 코드를 적는다.
        return false;
    }

	static boolean enoughMemory() {
        // 설치하는데 필요한 메모리 공간이 있는지 확인하는 코드를 적는다.
        return true;
    }
} // ExceptionTest 클래스 끝 

class InstallException extends Exception {
    InstallException(String msg) {
        super(msg);
    }
}

class SpaceException2 extends Exception {
    SpaceException2(String msg) {
        super(msg);
    }
}

class MemoryException2 extends Exception {
    MemoryException2(String msg) {
        super(msg);
    }
}
```



---

Java의 정석 기초편 | 남궁성 | 도우출판
