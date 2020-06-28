# write comments using #
y= [8,9,10]
print y
y.append(2)
print y
y.remove(2)
print y
print len(y)

#task1 = {"action":"Walk Leo", "due date": "Dec. 7", "time": "7 PM"}
#print task1

def make_task(action_value, due_date_value, time_value):
    return{"action": action_value, "due_date":due_date_value,"time":time_value}
print make_task("Walk Leo","Dec.7","7:00pm")
print make_task("Read","Dec.7","7:00pm")

print "hello!" \

myint=7
print(myint)
mystring= "hello"
print(mystring)

mystring=9
print(mystring+ myint)
mystring="hello "
string="world!"
print(mystring+string)

mystring = "pie"

print (mystring == "cupcakes!")
print (mystring == "pie")
if mystring == "cupcakes!":
    print "yum!"
elif mystring == "pie":
    print "blueberry!"

myfloat=6.8
print myfloat
print(type(myfloat))

mylist= [1,2,3,4]
print mylist

mylist=[]
print mylist
mylist.append(5)
mylist.append(7)
mylist.append(6)
mylist.append(8)
print mylist
print mylist[2]
length=len(mylist)
if length== 4:
    print mylist[3]

#TODO: play around with list len and indexing


#brackets for defining mylist
mylist= [3,4,9,2,5,1]
print mylist
mylist.append(7)
mylist.append(8)
print mylist
mylist.remove(5)
print mylist

print mylist[3] #brackets
length=len(mylist)
if length== 8:
    print mylist[5]

print mylist[0]
print mylist[6]

#do not forget quotes and colon
mystring = "red"
if mystring == "vanilla":
    print "bean"
elif mystring == "chocolate":
    print "cocoa"
elif mystring == "purple":
    print "stick"
elif mystring == "soccer":
    print "ball"
else:
    print "yellow"

#float=decimal
myfloat=6.8
print myfloat
print(type(myfloat))

#is int structure same as float structure? think so, not sure
myint=90
print myint
print(type(mystring))


#myinput = raw_input("What task do you want?")
#print myinput

#if myinput == "Task":
#    print "hi"
#if myinput == "soccer":
#    print "What task do you want?"

myint=8

while myint > 0:
    print myint
    myint = myint - 1

mylist = [1,6,5,9]

index = 0
while index < len(mylist):
    print mylist[index]
    index= index +1

for var in mylist:
    print var
myfloat=1.2

while myfloat > 0:
    print myfloat
    myfloat = myfloat - 0.1

cupcake = "vanilla" # assignment statement
if cupcake == "vanilla": # selection: if (boolean expression)
    print "yum!" # statement
elif cupcake == "chocolate":
    print "cocoa"
elif cupcake == "red":
    print "yellow"



mylist= [3,9,5,1]
print mylist
mylist.append(7)
mylist.append(8)
print mylist
mylist.remove(5)
print mylist
print mylist[3]
print mylist[2]
print mylist[4]
print mylist[-1]


mytask = "walk_leo"
print mytask


class Triangle(object):
    number_of_sides = 3

    def __init__(self, angle1, angle2, angle3):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3

    def check_angles(self):
        if self.angle1 + self.angle2 + self.angle3 == 180:
            return True
        else:
            return False


class Equilateral(Triangle):
    angle = 60

    def __init__(self):
        self.angle1 = self.angle
        self.angle2 = self.angle
        self.angle3 = self.angle


my_triangle = Triangle(90, 30, 60)
print my_triangle.number_of_sides
print my_triangle.check_angles()








my_list = [3,4,2,7]
print my_list
my_list= sorted(my_list)
print(my_list)
from datetime import date
class MyClass(object):
    def __init__(self, name, val1, val2):
        self.name = name
        self.val1 = val1
        self.val2 = val2

    def __str__(self):
        return str(self.name) +": " + str(self.val1) + ", " + str(self.val2)

my_list = [MyClass("item 1", 3, 12), MyClass("item 2", 6, 3), MyClass("item 3", 2, 5)]
print my_list
print "\nunsorted"
print "name, val1, val2"
for mc in my_list:
    print mc
print "\nsorted on val1"
print "name, val1, val2"
my_list_val1_sort = sorted(my_list, key= lambda myClassElement : myClassElement.val1)
for mc in my_list_val1_sort:
    print mc
print "\nsorted on val2"
print "name, val1, val2"
my_list_val2_sort = sorted(my_list, key= lambda myClassElement : myClassElement.val2)
for mc in my_list_val2_sort:
    print mc




class TaskList(object):
    def __init__(self, subject, task, date):
        self.not_done = []
        self.done = []
        self.subject = subject
        self.task = task
        self.date = date
    def add_task(self, new_task):
        self.not_done.append(new_task)
    def remove_task(self, index):
        removed_task = self.not_done.pop(index)
    def complete_task(self, index):
        completed_task = self.not_done[index]
        complete_task.completed = True
        self.not_done.pop(index)
        self.done.append(self.not_done.pop(index))
    def __str__(self):
            return str(self.subject) + ": " + str(self.task) + ", " + str(self.date)
subjects = [TaskList("English", "Annotate chapter 13", date.today()), TaskList("Math", "Practice problems", date.today()), TaskList("French", "CVG page 20", date.today())]
print
print "\nunsorted"
print "date,      subject,            task"
subjects_task_sort = sorted(subjects, key= lambda TaskListElement: TaskListElement.task)
for tl in subjects_task_sort:
    print tl
print "\nsorted on task"
print "subject, task, date"
subjects_date_sort = sorted(subjects, key= lambda TaskListElement : TaskListElement.date)
for tl in subjects_task_sort:
    print tl



grocery_list = TaskList()
grocery_list.add_task(Task("orange", False, "food", date(2018, 3, 10)))
grocery_list.add_task(Task("Lettuce", False, "vegetables", date(2017, 3, 6)))
grocery_list.add_task(Task("bread", True, "carbs", date(2017, 2, 27)))
grocery_list.add_task(Task("juice", True, "drinks", date(2018, 3, 10)))




