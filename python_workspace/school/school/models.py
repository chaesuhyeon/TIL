class Person :
    def __init__(self, id, name) :
        self.id = id
        self.name = name
    
    def info(self) :
        return self.id + " : "+ self.name

class Student(Person) :
    def __init__(self, id, name, major):
        super().__init__(id, name) 
        self.major = major
    
    # override
    def info(self):
        return super().info()+" : "+self.major

class Instructor(Person) :
    def __init__(self, id, name, subject) :
        super().__init__(id, name) 
        self.subject = subject
    
    # override
    def info(self) :
        return super().info()+" : "+self.subject

class Employee(Person) :
    def __init__(self, id, name, department) :
        super().__init__(id, name) 
        self.department = department
    
    # override
    def info(self) :
        return super().info()+" : "+self.department