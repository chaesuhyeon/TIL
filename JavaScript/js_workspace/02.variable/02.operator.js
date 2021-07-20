/* 

산술연산자    Operator	Description
+	            Addition
-	            Subtraction
*	            Multiplication
**	          Exponentiation (ES2016)
/	            Division
%	            Modulus (Division Remainder)
++	          Increment
--	          Decrement

*/

/* 대입 연산자
Operator	Example	    Same As
=	        x = y	      x = y
+=	      x += y      x = x + y
-=	      x -= y	    x = x - y
*=	      x *= y	    x = x * y
/=	      x /= y	    x = x / y
%=	      x %= y	    x = x % y
**=	      x **= y	    x = x ** y


*/

let x, y, z;
x = 10;
y = 20;
z = x + y ;
console.log(" x + y = ",z);

z = x - y;
console.log(" x - y = ",z);

z = x * y;
console.log(" x * y = ",z);

z = x ** 2;
console.log(" x ** 2 = ",z);

z = x / y;
console.log(" x / y = ",z);

z = x % y;
console.log(" x % y = ",z);

z = ++x;
console.log(" ++x  = ", x ,z);

z = x++;
console.log(" x++ = ", x ,z);

z = --x; 
console.log(" --x = ", x,z);

z = x-- ;
console.log(" x-- = ",x,z);

console.log(" x +=y" , x+=y);

// add to String Number
let xx = 5 + 5;
let yy = "5" + 5;
let zz = "Hello" + 5;
console.log("숫자연산 : ",xx, "숫자 문자 연산 - 문자로 변환됨",yy,zz)
// 숫자연산 :  10 숫자 문자 연산 - 문자로 변환됨 55 Hello5

/* 비교연산자

Operator      	Description

==	            equal to
===	            equal value and equal type
!=	            not equal
!==	            not equal value or not equal type
>	              greater than
<	              less than
>=	            greater than or equal to
<=	            less than or equal to
?	              ternary operator (변수 = 조건 ? 참일때 값 : 거짓일 때 값)

*/

/* 논리 연산자

Operator	    Description
&&	          logical and  참&&참 --> 참
||	          logical or   거짓 || 거짓 -> 거짓 , 나머지는 다 참(true) 
!	            logical not  거짓 ==> 참 , 참 ==> 거짓

*/

/* 타입 연산자

Operator	    Description
typeof      	Returns the type of a variable  / 타입 알고싶을 때 
instanceof	  Returns true if an object is an instance of an object type

*/

//타입변환 (type casting)
//Number : 문자열을 숫자로 변환 , 빈 문자열은 0으로 변환, 다른 모든 것은 NaN(숫자가 아님)
console.log(Number("3.14")); // returns 3.14
console.log(Number(" ")); // returns 0
console.log(Number("")); // returns 0
console.log(Number("99 88")); // returns NaN



/* 비트 연산자

Operator	Description	              Example	    Same as	      Result	Decimal
&	        AND	                      5 & 1	      0101 & 0001	  0001	  1
|	        OR	                      5 | 1	      0101 | 0001	  0101	  5
~	        NOT	                    ~ 5	         ~0101	        1010	  10
^	        XOR	                      5 ^ 1	      0101 ^ 0001	  0100	  4
<<	      Zero fill left shift	    5 << 1	    0101 << 1	    1010	  10
>>	      Signed right shift	      5 >> 1	    0101 >> 1	    0010	  2
>>>	      Zero fill right shift	    5 >>> 1	    0101 >>> 1	  0010	  2


*/













