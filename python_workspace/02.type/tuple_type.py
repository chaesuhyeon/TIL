#리스트는 []로 튜플은 ()로 표시 *리스트와의 차이점
#튜플은 해당되는 데이터가 변하지 않는 경우, 할당되는 값을 변경하지 않고 사용하는 경우)
#튜플도 튜플안에 튜플가능 (리스트와 같음)

#tuple : (data_list) 값변경하지 않고 read only로 사용


t = (1,2,3)
print(t)

print(t, t[0], t[1], t[2])

# del t[0] # TypeError: 'tuple' object doesn't support item deletion * 삭제 안됨
# t[0] = 3 #TypeError: 'tuple' object does not support item assignment * 튜플요소변경 안됨

#tuple은 list와 같으나, 표현법이 다르고 (괄호모양), tuple은 변경 및 삭제가 안되고 read only 이다.


