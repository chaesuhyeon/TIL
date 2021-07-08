from . import views
from .models import Student, Instructor, Employee
import os.path

def save_file(persons):
    # 프로그램 종료시 views.py persons list 를 파일저장
    save_file = open("list.dat", "w")
    for index, p in enumerate(views.persons):
        if isinstance(p, Student):
            save_file.write("1, {0},{1},{2}\n".format(p.id, p.name, p.major))
        elif isinstance(p, Instructor):
            save_file.write("2, {0},{1},{2}\n".format(p.id, p.name, p.subject))
        elif isinstance(p, Employee):
            save_file.write("3, {0},{1},{2}\n".format(p.id, p.name, p.subject))

    save_file.close()
    
def init_data_load():
    persons =[]

    # 프로그램 시작시 파일읽어서 view.py persons list에 저장
    fileExist = os.path.isfile("list.dat") # os.path 패키지를 이용해서 파일 존재여부 확인
    if fileExist :
        read_file = open("list.dat", "r") # read mode로 파일 연결
        while True:
            data = read_file.readline() # 한 라인씩 읽기 / type, id, name, major 또는 subject 또는 department
                                        # type = 1 - student, type = 2 - Instructor , type = 3 - Employee
            date_list = data.split(",")  # ,을 기준으로 나눔, 쪼갬(,로 구분해서 데이터 리스트 할당)
           # 읽은 한 라인의 데이터 문자열열을 해당 타입의 객체로 생성
            person = None
            if date_list[0] == 1 :
                person = Student(date_list[1], date_list[2], date_list[3])
            elif date_list[0] == 2:
                person = Instructor(date_list[1], date_list[2], date_list[3])
            elif date_list[0] == 3:
                person = Employee(date_list[1], date_list[2], date_list[3])
            persons.append(person) # 객체 데이터 리스트에 저장 후 추가

            if not data : break # 더이상 읽어들일게 없을때 (readline 읽어드릴 데이터가 없는 경우)
                                # 무한 loop 빠져나가기
        read_file.close() # 자원 반납
    return persons # 파일의 데이터 객체로 저장한 리스트 리턴































