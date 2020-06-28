from datetime import date

#^^This imports date from the datetime library
class Task(object):
    """ Holds methods for setting a due date, assigning a subject and synopsis of your task"""
    def __init__(self, description, completed, subject, date):
        """__init__ initializes things so that they can be used in dot notation
                param: self, description (description for task, str), completed (if task has been completed, bool), subject (suject of task, str)and date(date for task, date)
        :return: none """
        self.completed = completed
        self.description = description
        self.subject = subject
        self.date = date
    def is_due(self):
        """This method makes it so that the user if they still have time for their task
        param: none
        :return: if your task is overdue or if you still have time, bool."""
        return date.today() >= self.date
    def get_task_summary(self):
        """
        Will format tasks for saving
        :return: string, comma separated values (description, completed, subject and date)
        """
        return self.description + "," + str(self.completed) + "," + self.subject + "," + str(self.date)

    def __str__(self):
        """ formats task for printing
        param: none
        :return: formatted task (str)"""
        return str(self.description)


class TaskList(object):
    """Holds lists of done and not done tasks"""
    def __init__(self):
        self.not_done = []
#        A list for tasks that are not done
        self.done = []
#       A list for tasks that are done
        f = open("tasks.txt", "r")
        for line in f:
            # This is splitting my saved strings into variables that are compatible with my task list.
            line_split = line.split(",")
            description = line_split[0]
            completed_str = line_split[1]
            completed_task = True
            if completed_str == "False":
                completed_task = False
            # This creates my instance of Task, and formats it correctly.
            new_class_task = Task(description, completed_task, "", date.today())
            # This adds my new instance of Task, new_class_task to my task list.
            self.add_task(new_class_task)
        f.close()
    def add_task(self, new_task):
        """Adds the task to the TaskList. If the task is completed, add it to done, otherwise, its added to not_done
        :param new_task: (Task) a Task object to add to the list
        :return: None
        """
        if new_task.completed:
            self.done.append(new_task)
        else:
            self.not_done.append(new_task)

    def remove_task(self, index):
        """removes tasks from a list
        param: index(int)
        :return: None"""
        if index < len(self.not_done) and index >= 0:
             self.not_done.pop(index)
        else:
            print "This is not a valid index- type the number of the task you want to remove."
        print "\n"

    def complete_task(self, index):
        """completes a task
        param: index(int)
        :return: None"""
        if index < len(self.not_done) and index >= 0:
            completed_task = self.not_done.pop(index)
            completed_task.completed = True
            self.done.append(completed_task)
        else:
            print "This is not a valid index. "
        print "\n"

    def sort_tasks(self, sort_by):
        """Sorts tasks by subject or date
        param: sort_by(str)
        :return: none'"""
        if sort_by == "subject":
            #TODO: homework March 7
            pass
        elif sort_by == "date":
            #TODO: homework March 7
            pass
        else:
            print "This isn't supported!"

    def print_tasks(self):
        for i, task in enumerate(self.not_done):
            print i, task
        print "\n"

    def print_done_list(self):
        for t in self.done:
            print t
        print "\n"
    def save_tasks(self):
        f = open("tasks.txt", "w")
        for task in TaskList().not_done:
            f.write(task.get_task_summary() + "\n")
        for task in TaskList().done:
            f.write(task.get_task_summary() + "\n")
