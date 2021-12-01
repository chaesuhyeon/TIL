# 사전 자료형
data = dict()
data['사과'] = 'apple'
data['코코넛'] = 'coconut'

print(data) # {'사과': 'apple', '코코넛': 'coconut'}

key_list = data.keys()
print(key_list)  # dict_keys(['사과', '코코넛'])

value_list = data.values()
print(value_list) # dict_values(['apple', 'coconut'])

# 각 키에 따른 값을 하나씩 출력
for key in key_list:
    print(data[key])
    
    
# 집합 자료형
data = set([1,1,2,3,4,4,5])
print(data) # 중복 허용 x

data = {1,1,2,3,4,4,5}
print(data)

a = set([1,2,3,4,5])
b = set([3,4,5,6,7])

# 합집합
print(a|b)

# 교집합
print(a & b)

# 차집합
print(a-b)

# 집합 관련 함수 
data = set([1,2,3])

data.add(4)
print(data)

data.update([5,6])
print(data)

data.remove(3)
print(data)


# 입출력 

n = int(input())
data = list(map(int,input().split()))


# f-string
answer = 7
print(f"정답은 {answer}입니다.")


# 조건문
score = 85

if score >= 70:
    print('성적이 70점 이상입니다.')
    if score >= 90:
        print('우수한 성적 입니다')
else:
        print('성적이 70점 미만입니다')
        print('조금 더 분발하세요')
print('프로그램을 종료합니다.')


# 논리 연산자
if True or False:
    print("yes") # yes라고 출력됨 . 둘중에 하나가 참이기 때문

if True and False:
    print("yes")  # 아무것도 출력 안됨. 둘다 참이 아니기 때문

# 조건부 표현식
score = 85
if score >= 80: result = "Success"
else : result = "Fail"
print(result)


score = 85
result = "Success" if score >= 80 else "Fail"
print(result)

# 반복 while문
i = 1
result = 0
while i <= 9:
    result += i
    i +=1
print(result)






















