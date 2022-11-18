import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {TaskType} from "src/types/types"
import { faClose } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  icon = faClose
  @Input() task!: TaskType
  @Output() deleteTask: EventEmitter<TaskType> = new EventEmitter()
  @Output() toggleReminder: EventEmitter<TaskType>  = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTask(task: TaskType){
    this.deleteTask.emit(task)
  }

  onToggleTask(task: TaskType){
    this.toggleReminder.emit(task)
  }



}
