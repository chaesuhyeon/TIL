from school.models import Person, Student, Instructor, Employee

person_list = [Student("송민주", 31, "조리외식경영"), Student("김한비", 24, "러시아어")
,Instructor("최현진", 25 , "클라우드"), Instructor("허승일", 28 , "클라우드")
, Employee("김현주", 25, "클라우드 개발팀"),Employee("송현진", 26, "클라우드 개발팀")]

print("======== 전체목록 ======== ")
for person in person_list :
    print(person.info())

# python school_test.py 로 실행