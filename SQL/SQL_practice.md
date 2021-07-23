# DB

- 오류가 없는 무결성 매우 중요(제약 사항에 맞게) - 제약사항(타입, not null 등)
- DDL : CREATE , DROP, ALTER
- DML : INSERT , DELETE , UPDATE
- DQL : SELECT
- DCL : GRANT(권한주는 것) , REVOKE(권한 취소) 
- TCL : COMMIT , ROLLBACK(취소)

- DML 하고 나서는 COMMIT  | ROLLBACK 필수. transaction때문  (Maria DB 에서는 default auto로 해줌)
- auto로 안하고 싶으면, set autocommit = 0      <---> auto로 하고싶으면 set autocommit =1



# SQL

- SQL은 대소문자 구별이 없다.
- 여러줄의 주석은 `/*      */`로 묶기



## 6.1 SELECT 문

- 데이터베이스 내의 테이블에서 원하는 정보를 추출하는 명령어

- SELECT문을 학습하려면 먼저 사용할 데이터베이스를 지정해야 한다.

```sql
# 현재 사용하는 데이터베이스를 지정 또는 변경하는 구문형식
USE 데이터베이스_이름;
```

> EX)  USE employees;
>
> "지금부터 employees를 사용하겠으니, 모든 쿼리는 employees에서 수행"



- 원하는 데이터를 가져와 주는 기본적인 `< SELECT ... FROM >`

```sql
SELECT 열 이름
FROM 테이블 이름
```



```sql
# EX)
SELECT * FROM titles; 

# '*'는 '모든 것'을 의미 --> 따라서 *는 '모든 열'을 의미
# 'titles 테이블에서 모든열의 내용을 가져와라' 라는 의미

# EX)
SELECT first_name FROM employees; 
# '사원 테이블의 이름만 가져와라'

# EX)
SELECT first_name, last_name, gender FROM employees;
# 여러개의 열을 가져오고 싶으면 ,(콤마)로 구분하면 된다.
# 열 이름의 순서는 사용자 마음대로 바꿔도 된다.
```



- 특정한 조건의 데이터만 조회하는  `< SELECT ... FROM ... WHERE >`

```sql
SELECT 열 이름
FROM 테이블 이름
WHERE 조건
```



```sql
# EX)
SELECT * FROM userTbl WHERE name = '김경호';

# EX)
SELECT userID, Name, FROM userTbl WHERE birthYear >= 1970 AND height >= 185;
# 1970년 이후에 출생하고, 신장이 182 이상인 사람의 아이디와 이름을 조회


```

- group by로 그룹을 지정할때의 조건절은 where절이 아닌 having절 사용

- select distinct :  중복되는 데이터들은 한번만 나오게 하는 것 (distinct)



## 6.2 INSERT 문

- 데이터 삽입을 위한 SQL문

```sql
# 기본형식

INSERT [INTO] 테이블 [(열1, 열2, ...)] VALUES (값1, 값2 ...)
```

- 테이블 이름 다음에 나오는 열은 생략이 가능하다
- 하지만, 생략할 경우에 VALUE 다음에 나오는 값들의 순서 및 개수가 테이블이 정의된 열 순서 및 개수와 동일해야 한다.



```SQL
# EX)
INSERT INTO testTBL1(userName, age, id) VALUES ('초아', 26, 3);
```



## 6.3 UPDATE 문

- 데이터 수정을 위한 SQL문
- 기존에 입력되어 있는 값을 변경

```sql
UPDATE 테이블이름 SET 열1=값1 열2=값2 .... WHERE 조건;
```

- WHERE절은 생략이 가능하지만 WHERE절을 생략하면 테이블 전체의 행이 변경된다.

```SQL
# EX)
UPDATE testTBL4 SET Lname = '없음' WHERE Fname = 'Kyochi'
# 'Kyochi'의 전화번호를 '없음'으로 변경하는 예시
```

```SQL
# EX)
UPDATE buyTBL2 SET price = price * 1.5;
# 전체 테이블의 내용을 변경하고 싶어서 WHERE절 생략
# 구매 테이블에서 현재의 단가가 모두 1.5배 인상되었을 경우. 전체 행변경해야함 
```



## 6.4 DELETE 문

- 데이터 삭제를 위한 SQL문
- 행 단위로 삭제

```sql
DELETE FROM 테이블이름 WHERE 조건;
```

```sql
# EX)
USE sqlDB;
DELETE FROM testTBL4 WHERE Fname = 'Aamer';
# testTBL4에서 'Aamer'사용자가 필요 없는 경우
```

