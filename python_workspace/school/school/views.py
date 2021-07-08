from .exception import DuplicateError, NotFoundError
from .file_registry import init_data_load, save_file
#원래는 __init__.py가 school 폴더 밑에 존재해야 페키지로 인식하지만, 
#파이썬 지금버전에선 자동으로 인식해줌

persons=[]

def register(person):
    #id 중복 check  - 중복될 경우 DuplicateError 발생시킴
    index = is_exist(person.id)
    if index > -1:  # 1-보다 크면 id 존재한다는 뜻(중복된다는 뜻)
        raise DuplicateError(person.id)
    persons.append(person) # 중복되는게 아니라면 아이디 추가해라

def update(person):
    # id check - 존재하지 않는 경우 NorFoundError 발생시킴
    index = is_exist(person.id)
    if index == -1: # -1은 존재하지 않는다는 뜻
        raise NotFoundError(person.id)
    persons[index] = person # 존재하면 업데이트 시켜라

def remove(id):
    # id check - 존재하지 않는 경우 NorFoundError 발생시킴
    index = is_exist(id)
    if index == -1: # -1은 존재하지 않는다는 뜻
        raise NotFoundError(id)
    persons.pop(index) # pop으로 해당되는 인덱스 요소 끄집어 내서 삭제

def getPerson(id):
    # id check - 존재하지 않는 경우 NorFoundError 발생시킴
    index = is_exist(id)
    if index == -1:
        raise NotFoundError(id)
    return persons[index]

def getAllPersons():
    return persons

def is_exist(id):
    for index, person in enumerate(persons):
        if person.id == id:
            return index
    return -1 # -1은 존재하지 않는다는 뜻

def save_list():
    save_file(persons)

def load_list():
    global persons
    persons = init_data_load()