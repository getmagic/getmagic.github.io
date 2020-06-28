from task_classes import Task, TaskList
from datetime import date
# instance of task list object
my_task_list = TaskList()

while (True):
    # casting the string input to an integer
    option = int(raw_input("Choose an option:\n"
                           "1. Add a task\n"
                           "2. Print tasks\n"
                           "3.Remove a task\n"
                           "4. Complete a task\n"
                           "5. View your completed tasks\n"
                           "6. Exit app and save\n"
                           "7. Exit app. WILL NOT SAVE!!!\n"))
    # 1. Add a task
    if option == 1:
        task_description = raw_input("What is your task description?")
        task = Task(task_description, False, "", date.today())
        my_task_list.add_task(task)
    # 2. Print Tasks
    elif option == 2:
        my_task_list.print_tasks()
    #Remove a task
    elif option == 3:
        my_task_list.print_tasks()
        bad_task = int(raw_input("To remove a task, type in the number of the task you want to remove."))
        my_task_list.remove_task(bad_task)
    #4. Complete a task
    elif option == 4:
        my_task_list.print_tasks()
        completedtask = int(raw_input("To complete a task, type the number of the task you want to complete."))
        my_task_list.complete_task(completedtask)
    #5: View completed tasks
    elif option == 5:
        my_task_list.print_done_list()
    # 6. Exit:
    #Break exits the while loop
    elif option == 6:
        f = open("tasks.txt", "w")
        for task in my_task_list.not_done:
            f.write(task.get_task_summary() + "\n")
        for task in my_task_list.done:
            f.write(task.get_task_summary() + "\n")
        f.close()
        break
    elif option == 7:
        break
    else:
        print "This is not a valid option!"

