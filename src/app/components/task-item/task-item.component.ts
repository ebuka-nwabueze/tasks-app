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
  @Input() task: TaskType = {id: 1, day: "", text: "", reminder: false}
  @Output() iconClick: EventEmitter<TaskType> = new EventEmitter()
  @Output() toggleReminder: EventEmitter<TaskType>  = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTask(task: TaskType){
    console.log(task.id)
    this.iconClick.emit(task)
  }

  onToggleTask(task: TaskType){
    console.log(task.id)
    this.toggleReminder.emit(task)
  }



}
