import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TaskType } from 'src/types/types';
TaskService;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: TaskType[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: TaskType) {
    this.taskService
      .deleteTasks(task)
      .subscribe(
        () =>
          (this.tasks = this.tasks.filter(
            (singleTask) => singleTask.id !== task.id
          ))
      );
  }

  toggleReminder(task: TaskType){
    task.reminder = !task.reminder
    this.taskService.toggleTask(task).subscribe()
  }
}
