## 8.1 테이블

### 8.1.1 테이블 만들기

```sql
CREATE TABLE test (num INT);
```



### 8.1.2 제약조건

- 데이터의 무결성을 지키기 위한 제한된 조건을 의미
- 특정 데이터를 입력할 때 무조건적으로 입력되는 것이 아닌, 어떠한 조건을 만족했을 때 입력되도록 제약할 수있다.



##### PRIMARY KEY 제약 조건

- 기본 키 제약 조건
- '기본 키' : 테이블에 존재하는 많은 행의 데이터를 구분할 수 있는 식별자
- '기본 키' 예로 회원테이블의 회원아이디, 학생 테이블의 학번 등
- '기본 키'에 입력되는 값은 중복될 수 없다.
- '기본 키'에는 NULL 값이 입력될 수 없다.
- '기본 키'로 생성한 것은 자동으로 클러스터형 인덱스가 생성된다.
- 테이블에서는 '기본 키'를 하나 이상의 열에 설정할 수 있다. (두개의 열을 합쳐서 기본키로 할 수 있다.)
- 대부분의 테이블은 '기본 키'를 가져야한다.

```sql
CREATE TABLE 문에 PRIMARY KEY라는 예약어만 넣어주면 된다.

# EX)
CREATE TABLE userTBL 
(userID CHAR(8) NOT NULL PRIMAARY KEY, 
 name VARCHAR(10) NOT NULL, 
 birthYear INT NOT NULL);
 
 # 회원아이디(userID)는 회원테이블(userTBL)의 기본 키가 되었으며,
 # 앞으로 입력되는 회원 아이디는 당연히 중복될 수도 없고, 비어(NULL)있을 수도 없다.
```

- PRIMARY KEY를 지정하면서 키의 이름까지 지어줄 수 있다.

```sql
# EX)
CREATE TABLE userTBL 
(userID CHAR(8) NOT NULL, 
 name VARCHAR(10) NOT NULL, 
 birthYear INT NOT NULL
CONSTRAINT PRIMARY KEY PK_userTBL_userID (userID)
);

# PK_userTBL_userID (userID) 같은 이름을 붙여주면 , 이름만으로도
# PK가 userTBL테이블의 userID열에 지정된 것으로 읽을 수 있다.
# 하나 이상의 열에 '기본 키'를 지정하고 싶으면 PRIMARY KEY (userID, $%^) 이렇게
# 콤마로 구분하여 주면된다.
```



- 테이블의 정보를 보기 위해서는

```sql
DESCRIBE 테이블명;
```



##### FOREIGN KEY 제약 조건

- 두 테이블 사이의 관계를 선언함으로써, 데이터의 무결성을 보장해 주는 역할울 한다.
- '외래 키' 관계를 설정하면 하나의 테이블이 다른 테이블에 의존하게 된다.
- '외래 키' 테이블에 데이터를 입력할 때는 꼭 기준 테이블을 참조해서 입력하므로, 기준 테이블에 이미 데이터가 존재해야한다. 
- '외래 키' 테이블이 참조하는 기준 테이블의 열은 반드시 Primary Key거나, Unique 제약 조건이 설정되어 있어야 한다. 

```sql
CREATE TABLE 문에 FOREIGN KEY라는 예약어만 넣어주면 된다.
```



```sql
# EX)
CREATE TABLE userTBL 
(userID CHAR(8) NOT NULL PRIMARY KEY, 
 name VARCHAR(10) NOT NULL, 
 birthYear INT NOT NULL
 );
 
 CREATE buyTBL
 (num INT AUTO_INCREAMENT NOT NULL PRIMARY KEY,
 userID CHAR(8) NOT NULL,
 prodName CHAT(6) NOT NULL,
 FOREIGN KEY(userID) REFERENCES userTBL(userID)
 );

# '외래 키' 테이블(buyTBL)의 열이 참조(references)하는 기준 테이블(userTBL)의 열(userID)은 기본 키로 설정되어 있는 것이 확인된다. 
```



##### UNIQUE 제약 조건

- '중복되지 않는 유일한 값'을 입력해야 하는 조건이다.
- PRIMARY KEY와 거의 비슷하며 차이점은 UNIQUE는 NULL값을 허용한다.
- NULL은 여러 개가 입력되어도 상관 없다. 

```sql
# EX)
CREATE TABLE userTBL 
(userID CHAR(8) NOT NULL PRIMARY KEY, 
 name VARCHAR(10) NOT NULL, 
 birthYear INT NOT NULL
 email CHAR(30) NULL UNIQUE
 );
 
 # 회원 테이블에 E-Mail열을 추가한 경우인데, Email 주소를 Unique로 설정한 경우이다.
```



##### CHECK 제약 조건

- 입력되는 데이터를 점검하는 기능
- 값으로 마이너스 값이 들어올 수 없게 한다던지 등의 조건을 지정한다.
- CHECK 제약 조건을 설정한 후에는, 제약 조건에 위배되는 값은 입력이 안된다.
- CHECK에서 사용할 수 있는 조건은 SELECT문의 WHERE 구문에 들어오는 조건과 거의 비슷한 것이 들어오면 된다.
- CHECK 제약 조건을 무시하려면 시스템 변수 중에서 check_constraint_checks 값을 0으로 설정하면 된다.

```sql
# EX)
CREATE TABLE userTBL 
(userID CHAR(8) NOT NULL PRIMARY KEY, 
 name VARCHAR(10) NOT NULL, 
 birthYear INT CHECK (birthYear >= 1900 AND birthYear <=2000),
 mobile1 CHAR(3) NULL ,
 CONSTRAINT ck_name CHECK (name IS NOT NULL)
 );
 
# 출생연도에 제약조건을 줬다.
# 열을 정의한 후에 바로 CHECK 예약어로 조건을 지정했다.
# 두번째 CHECK 제약 조건은 열을 모두 정의한 후에, 마지막에 추가하는 방식이다.
# 두번째 방식은 CHECK 제약 조건의 이름을 직접 지정할 수 있다.
```



##### DEFAULT 정의

- 값을 입력하지 않았을 때 , 자동으로 입력되는 기본값을 정의하는 방법이다.
- 예로 출생연도를 입력하지 않으면 -1이 입력되도록 하는 것

```sql
# EX)
CREATE TABLE userTBL 
(userID CHAR(8) NOT NULL PRIMARY KEY, 
 name VARCHAR(10) NOT NULL, 
 birthYear INT NOT NULL DEFAULT -1,
 mobile1 CHAR(3) NULL ,
 );
 
```



##### NULL 값 허용

- NULL값을 허용하려면 NULL을 , 허용하지 않으려면 NOT NULL을 사용하면 된다.
- 하지만 PRIMARY KEY가 설정된 열에는 NULL값이 있을 수 없으므로, 생략하면 자동으로 NOT NULL로 인식된다.
- NULL : '아무것도 없다' 라는 의미. 즉 공백(' ')이나 0과 같은 값과는 다르다는 점에 주의



### 8.1.3 임시 테이블

- 이름처럼 임시로 잠깐 사용되는 테이블

```sql
CREATE TEMPORARY TABLE [IF NOT EXISTS] 테이블 이름 (열 정의 ...)
```

- TABLE 위치에 TEMPORARY TABLE이라고 써주는 것 외에는 테이블과 정의하는 것이 동일
- 임시 테이블은 세션 내에서만 존재하며, 세션이 닫히면 자동으로 삭제된다.
- 임시 테이블은 생성한 클라이언트에서만 접근이 가능하며, 다른 클라이언트는 접근할 수 없다.
- 임시 테이블은 데이터베이스 내의 다른 테이블과 이름을 동일하게 만들 수 있다. 그러면 기존의 테이블은 임시 테이블이 있는 동안에 접근이 불가능하고, 무조건 임시 테이블로 접근할 수 있다.

> 임시 테이블이 삭제되는 시점
>
> 1. 사용자가 DROP TABLE로 직접삭제
> 2. HeidiSQL을 종료하거나, 클라이언트 프로그램을 종료하면 삭제됨
> 3. MariaDB 서비스가 재시작되면 삭제됨



### 8.1.4 테이블 삭제

- 주의할 사항은 외래 키 제약 조건의 기준 테이블은 삭제할 수가 없다.
- 먼저, 외래 키가 생성된 외래 키 테이블을 삭제해야 한다. 

```sql
DROP TABLE 테이블 이름;

DROP TABLE 테이블1, 테이블2, 테이블3;  # 여러 개의 테이블을 동시에 삭제하고 싶을 때
```



### 8.1.5 테이블 수정

-  테이블 수정은 ALTER TABLE문을 사용한다.
- 이미 생성된 테이블에 무엇인가를 `추가/변경/수정/삭제` 할 경우에는 모두 ALTER TABLE을 사용

##### 

##### 열의 추가

- 열을 추가하면 기본적으로 가장 뒤에 추가가 된다. 
- 열을 추가하면서 순서를 지정하려면 제일 뒤에  'FIRST' 또는 'AFTER 열이름'을 지정
- 'FIRST'는 제일 앞에 열이 추가되며 'AFTER 열 이름'은 열 이름 다음에 추가한다.

```sql
USE tableDB;
ALTER TABLE userTBL
	 ADD hompage VARCHAR(30) # 열 추가
	 		DEFALT 'http:www.hanbit.co.kr' # 디폴트 값
	 		NULL; # NULL 허용함
```



##### 열의 삭제

- 제약 조건이 걸린 열을 삭제할 경우에는 제약 조건을 먼저 삭제한 수에 열을 삭제해야 한다.

```sql
ALTER TABLE userTBL
	DROP COLUMN mobile;
```



##### 열의 이름 및 데이터 형식 변경

- 제약 조건이 걸려있는 열은 주의해야한다.

```sql
ALTER TABLE userTBL
	CHANGE COLUMN name uName VARCHAR(20) NULL;
```



##### 열의 제약 조건 추가 및 삭제

- 아래의 코드를 실행시키면 오류가 발생할 것이다.
- 현재 userTBL의 기본 키긴 userID열은 buyTBL에 외래 키로 연결되어 있기 때문이다. 그러므로 외래키를 제거한 후에 다시 기본 키를 제거해야 한다.

```sql
# (X 오류발생 X)

ALTER TABLE userTBL
	DROP PRIMARY KEY;   
```



```sql
# (O - 외래 키 먼저 제거 후 기본 키 제거 )

ALTER TABLE buyTBL
	DROP FOREIGN KEY FK_userTBL_buyTBL;
	
ALTER TABLE userTBL
	DROP PRIMARY KEY;  
```



## 8.2 뷰

- 뷰는 일반 사용자 입장에서는 테이블과 동일하게 사용하는 개체이다.
- 뷰는 한번 생성해 놓으면 테이블이라고 생각하고 사용해도 될 정도로 사용자들의 입장에서는 테이블과 거의 동일한 개체로 여겨진다.



##### 뷰의 장점

- 뷰는 보안에 도움이 된다.
- 뷰는 복잡한 쿼리를 '단순화' 시켜줄 수 있다.



```sql
CREATE VIEW 뷰 이름
```

