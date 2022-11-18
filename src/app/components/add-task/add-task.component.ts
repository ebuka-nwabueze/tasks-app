import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import {TaskType} from "src/types/types"
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false
  subscription!: Subscription;
  @Output() submitTask: EventEmitter<TaskType> = new EventEmitter()


  constructor(private taskService: TaskService, private UIService: UiService) {
    this.subscription = this.UIService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  ngOnInit(): void {}

  onSubmit() {
    if(!this.text || !this.day){
      alert("Please add a remider and day")
    }
    const task = { text: this.text, day: this.day, reminder: this.reminder };
    this.submitTask.emit(task)
    this.text = ""
    this.day = ""
    this.reminder = false
  }
}
