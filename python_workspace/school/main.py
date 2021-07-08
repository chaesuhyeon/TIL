# from school.templates import menu_select

from school.exception import * # DuplicateError , NotFoundError
from school.models import * # Student, Instructor, Employee
from school.templates import * # imput_display, ;ist_display, menu_display, menu_select etc..
from school import views
views.init_data_load()

while True:
    menu_display()
    menu = menu_select()
    if menu == "1" :
     # 목록 보기 -> views.py의 getAllPersons() 인사목록 리턴받아서 templates의 list_display()
        personList = views.getAllPersons()
        list_display(personList)
    elif menu == "2" :
        # 등록 - subemenu로 학생, 강사, 직원인지 입력받고 views.py의 register(객체) 호출
             # DuplicateError 처리
        while True:
            submenu_display()
            sub_menu = menu_select()
            if sub_menu == "1" or sub_menu == "2" or sub_menu== "3":
                person = input_display(sub_menu)
                try:
                    views.register(person)
                    message_display(person.id+" 등록성공")
                except DuplicateError as error :
                    message_display(error)
                    
                break
            elif sub_menu == "4":
                break
            else :
                print("sub menu 1,2,3,4 중 선택")

    elif menu == "3" :
         # 수정 - 수정할 id 입력받고 view의 getPerson(id)로 검색한 후 
         # 해당되는 person타입에 따라서 수정정보를 입력받은 후 views의 update(객체)
         id = id_input_display("수정")
         try:
            person = views.getPerson(id)

            type = ""
            if  isinstance (person, Student):
                type = "1"
            elif isinstance(person, Instructor):
                type ="2"
            elif isinstance(person, Employee):
                type = "3"
            new_person = update_input_display(type, id)
            views.update(new_person)
            message_display(id +"수정성공")
         except NotFoundError as error :   # NotFoundError 처리
            message_display(error)


    elif menu == "4" :
        # 삭제할 id 입력받고 views의 remove(id) 호출
             # # NotFoundError 처리
        id = id_input_display("삭제")
        try :
            views.remove(id)
            message_display(id +" 삭제성공")
        except NotFoundError as error:
            message_display(error)

    elif menu == "5" :
        # 상세보기 - 상세보기할 id 입력받고 views의 getPerson(id) 호출
             # templates의 person_display(person) 호출
        id = id_input_display("검색")
        try :
            person = views.getPerson(id)
            person_display(person)
        except NotFoundError as error:
            message_display(error)

    elif menu == "0" :
        views.save_list()
        message_display("인사 시스템을 종료합니다.")
        break;
    
    else :
        print( )
        message_display("1,2,3,4,5,0번 중 선택하세요.")



