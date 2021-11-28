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






