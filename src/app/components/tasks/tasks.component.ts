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
    this.taskService.getTasks()
    .subscribe((tasks) => (this.tasks = tasks));
  }

}
