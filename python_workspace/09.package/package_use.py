# 패키지 -> __init__ 라고 있으면 파이썬에서 패키지라고 인식한다.
# 패키지 : 모듈을 디렉토리로 관리

# 패키지 모듈 참조  
# 1. import 패키지명.패키지명.모듈    이런식으로 사용
# 2. from 패키지명.패키지명.모듈 import 모듈의 함수, 변수, 클래스
# 3. from 패키지명.패키지명 import 모듈 

# __init__ .py가 있어야 패키지로 인식하므로, game부터 패키지로 인식

import game.graphic.render
game.graphic.render.render_test()

# from 으로 이용

from game.sound.echo import echo_test
echo_test()

from game.play import run
run.run_test()

