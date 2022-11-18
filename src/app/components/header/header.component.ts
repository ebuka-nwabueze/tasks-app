import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker'
  color = "green"

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask(){
    console.log("Toggle Task")
  }
}
