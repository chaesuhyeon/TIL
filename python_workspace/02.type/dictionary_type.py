# dictionary type : {key : value , ...} , key 중복x  (key 값은 unique 해야함.  중복 x)

dic = {"name" : "유민기", "age" : 27, "major" : "컴공"}
print(dic)  # {'name': '유민기', 'age': 27, 'major': '컴공'}

# dictionary data 추가 ->  dictionary변수[key] = value

dic = {"name" : "유민기", "age" : 27}
dic["major"] = "컴공" #추가 -> {'name': '유민기', 'age': 27, 'major': '컴공'} 


#key 중복
dic["major"] = "컴퓨터 공학"
print(dic) # {'name': '유민기', 'age': 27, 'major': '컴퓨터 공학'} 
# 같은 major라는 키가 존재할 경우 마지막에 추가된 값으로 수정됨

dic = {"name" : "유민기", "age" : 27, "age" : 26, "major" : "컴퓨터공학"}
print(dic) # {'name': '유민기', 'age': 26, 'major': '컴퓨터공학'}
#같은 age라는 키가 존재할 경우 마지막 값으로 return 됨 

#dictionary 요소 삭제
del dic["major"]
print(dic) # {'name': '유민기', 'age': 26} *major부분 삭제됨 
print("이름 : {0} 나이 : {1}".format(dic["name"], dic["age"]))  # 이름 : 유민기 나이 : 26

#key 리스트 만들기 - dictionary key list *keys() 사용
print(dic.keys()) # dict_keys(['name', 'age']) * key부분이 리스트로 출력

for key in dic.keys():
    print(key)  
    # name 
    # age             라고 출력 , key가 존재하는동안 출력해라~

for key in dic.keys():
    print("key : {0}, value : {1}".format(key, dic[key]))
#key : name, value : 유민기
#key : age, value : 26     라고 나옴 

for key in dic.keys():
    print("key : {0}, value : {1}".format(key, dic.get(key)))
#key : name, value : 유민기
#key : age, value : 26     라고 나옴 

#key 로 value 얻기 -> value = dic[key]    or value = dic.get(key)

#in 연산자  : dictionary에 key 존재여부는 True or False 로 return

print("name is exist? {0}".format("name" in dic)) # name is exist? True
print("major is exist? {0}".format("major" in dic)) # major is exist? False

#dictionary(key : value) list
print(dic.items()) #dict_items([('name', '유민기'), ('age', 26)])

#dictionary example
cloud_msa = [
    {"name" : "유민기", "age" : 27, "major" : "컴공"},
    {"name" : "조규원", "age" : 28, "major" : "물리학"},
    {"name" : "김건우", "age" : 27, "major" : "컴공"} 
    ]
print(cloud_msa)

#[{'name': '유민기', 'age': 27, 'major': '컴공'}, 
# {'name': '조규원', 'age': 28, 'major': '물리학'}, 
# {'name': '김건우', 'age': 27, 'major': '컴공'}]





















