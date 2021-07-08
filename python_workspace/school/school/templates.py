from .models import Employee, Instructor, Student

# menu display
def menu_display():
    print("======= 인사관리 시스템 ======= ")
    print("1. 전체 목록 보기 ")
    print("2. 등록 ")
    print("3. 수정 ")
    print("4. 삭제 ")
    print("5. 상세보기")
    print("0. 종료")
    
# submenu display
def submenu_display( ):
    print("1. 학생정보")
    print("2. 강사정보")
    print("3. 직원정보")
    print("4. main menu로 이동")

# menu select(메뉴 입력받기)
def menu_select( ):
    menu = input("메뉴를 선택하세요 : ")
    return menu

# message display
def message_display(message):
    print(message)

# list display # 목록 받아다가 화면에 display하기
def list_display(persons):
    print("=== 전체 목록 ===")
    for person in persons:
        print(person.info())

# register person input
def input_display(type):
    id = input("아이디 : ")
    name = input("이름 : ")
    if type == "1":
        major = input("전공 : ")
        return Student(id, name, major)
    elif type == "2":
        subject = input("과목 : ")
        return Instructor(id, name, subject)
    elif type == "3":
        department= input("부서 : ")
        return Employee(id, name, department)


# update person input
# 수정하거나 삭제또는 상세보기를 위한 id 입력
def id_input_display(command):
    id = input("{0} id는 ? ".format(command))
    return id

# person display
def person_display(person):
    print("=== 상세 정보 ===")
    print(person.info())

# 수정할 데이터 입력 화면
def update_input_display(type, id):
    name = input("이름 : ")
    if type == "1":
        major = input("전공 : ")
        return Student(id, name, major)
    elif type == "2":
        subject = input("과목 : ")
        return Instructor(id, name, subject)
    elif type == "3":
        department= input("부서 : ")
        return Employee(id, name, department)

