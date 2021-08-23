FROM python:3

WORKDIR /usr/src/pybo

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# 로컬에 있는 파일들 (.) 을 가져다가 해당되는 working directiory에 copy
COPY . .

EXPOSE 8000

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]