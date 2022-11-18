import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  color = 'green';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private UIService: UiService) {
    this.subscription = this.UIService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.UIService.toogleAddTask();
  }
}
