# 파일 읽기 - 파일 쓰기
f = open("test.txt", 'r')       # close를 안쓰는 것을 방지하기 위해서는 with open을 쓰면 됨 
fw = open("test_copy.txt", 'w') # with open("test.txt", 'r') as f :   --> with문으로 파일 사용시 f.close() 자동으로 사용됨
data = f.read()
fw.write(data)

f.close()
fw.close()                   