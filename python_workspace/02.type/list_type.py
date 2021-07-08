a = [1,2,3]
a = [1,2,3,['a', 'b', 'c']]
a[3] # ['a', 'b', 'c'] 나옴
a[-1] # ['a', 'b', 'c'] 나옴, - 는 맨뒤부터 시작하니까
a[-1][0] # 'a'나옴 왜냐하면 -1은 ['a', 'b', 'c']가 나오고 이것의 0번째니까 a

print("a list 첫번째 : {0} 두번째 : {1} 세번째 : {2} 네번째는 배열 : {3}".format(a[0], a[1], a[2], a[3]))
# a list 첫번째 : 1 두번째 : 2 세번째 : 3 네번째는 배열 : ['a', 'b', 'c']

print("네번째 배열의 첫번째 : {0} 두번째 : {1} 세번째 : {2}".format(a[3][0], a[3][1], a[3][2] ))
# 네번째 배열의 첫번째 : a 두번째 : b 세번째 : c

print("a배열의 길이 : {0} 접근 index는 0 ~ {1}".format(len(a), len(a)-1))
# a배열의 길이 : 4 접근 index는 0 ~ 3

# 리스트 값 수정
# 1. append : 뒤에 추가
# 2. sort : 정렬 ex) a.sort
# 3. insert : 중간에 삽입 ex) a.insert(0,4) : 0번째에 4 삽입
# 4. pop : 끄집어내기 ex) a.pop() : 마지막 꺼만 나옴 -----> a = [1,2,3] / a.pop() = 3 / a = [1,2]

a.append(4) # 리스트 값 추가
print("a 배열에 4요소 추가 : {0}".format(a))
# a 배열에 4요소 추가 : [1, 2, 3, ['a', 'b', 'c'], 4]

del a[4:] # 리스트 값 삭제
print("a 배열에 추가된 요소 삭제 : {0}".format(a))
# a 배열에 추가된 요소 삭제 : [1, 2, 3, ['a', 'b', 'c']]

a[0] = 0 # 리스트 값 수정
print("a 배열의 첫번째 데이터 수정 : {0}".format(a))
# a 배열의 첫번째 데이터 수정 : [0, 2, 3, ['a', 'b', 'c']]

a.insert(1,1) # 삽입
print("a 배열의 두번째에 1요소 삽입 : {0}".format(a))
# a 배열의 두번째에 1요소 삽입 : [0, 1, 2, 3, ['a', 'b', 'c']]

a.remove(0) # 삭제
print("a 배열의 첫번째로 나오는 0 데이터 삭제 : {0}".format(a))
# a 배열의 첫번째로 나오는 0 데이터 삭제 : [1, 2, 3, ['a', 'b', 'c']]

#a.sort() # 오름차순 정렬
# print("a 배열 오름차순 정렬 : {0}".format(a))
# 문자타입이 다를 경우 정렬 안됨
# TypeError: '<' not supported between instances of 'list' and 'int'

array = [1,3,2,5,4]
array.sort()
print("array 배열 오름차순 정렬 : {0}".format(array))
# array 배열 오름차순 정렬 : [1, 2, 3, 4, 5]

array.sort(reverse=True) # 내림차순 정렬
print("array 배열 내림차순 정렬 : {0}".format(array))
# array 배열 내림차순 정렬 : [5, 4, 3, 2, 1]

array.reverse # 뒤집기
print(array) # [5, 4, 3, 2, 1]

# 위치반환
arr = [1,3,2,5,4]
print("arr 3요소 index : {0}".format(arr.index(3)))
# arr 3요소 index : 1

# 요소출력
print("arr 마지막 요소 출력 : {0}".format(arr.pop( )))
# arr 마지막 요소 출력 : 4










































