class Person :
    def __init__(self, name, age) :
        self.name = name
        self.age = age
    
    def info(self) :
        return "이름 : " +self.name+ " 나이 : "+str(self.age)  # 문자 + 숫자가 안돼서 숫자를 문자열로 변환 (str사용)

class Student(Person) :
    def __init__(self, name, age, major):
        super().__init__(name, age) 
        self.major = major
    
    # override
    def info(self):
        return super().info()+" 전공 : "+self.major

class Instructor(Person) :
    def __init__(self, name, age, subject) :
        super().__init__(name, age) 
        self.subject = subject
    
    # override
    def info(self) :
        return super().info()+" 과목 : "+self.subject

class Employee(Person) :
    def __init__(self, name, age, department) :
        super().__init__(name, age) 
        self.department = department
    
    # override
    def info(self) :
        return super().info()+" 부서 : "+self.department



# 학생등록
#s1 = Student("송민주", 31, "조리외식경영")
#s2 = Student("김한비", 24, "러시아어")

# 강사등록
#i1 = Instructor("최현진", 25 , "클라우드")
#i2 = Instructor("허승일", 28 , "클라우드")

# 직원등록
#e1 = Employee("김현주", 25, "클라우드 개발팀")
#e2 = Employee("송현진", 26, "클라우드 개발팀")

persons = [Student("송민주", 31, "조리외식경영"), Student("김한비", 24, "러시아어")
,Instructor("최현진", 25 , "클라우드"), Instructor("허승일", 28 , "클라우드")
, Employee("김현주", 25, "클라우드 개발팀"),Employee("송현진", 26, "클라우드 개발팀")]


# 정보출력
for person in persons :
    print("정보 출력 : {0}".format(person.info()))