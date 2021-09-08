### DateTimeField

- 기본값 = 생성 시 생성시각 = 사용자 변경 가능

```django
 pub_date = models.DateTimeField('date published', default=datetime.datetime.now)
```

```django
from django.db import models

class Test(Models.Mode):
    pass

    class Meta:
        pass     

# Meta 옵션이란 다음과 같이 Inner class로 사용하여 상위 클래스에게 meta data를 제공하는것.
```

