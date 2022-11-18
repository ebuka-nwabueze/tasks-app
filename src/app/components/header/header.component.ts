import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private UIService: UiService, private router: Router) {
    this.subscription = this.UIService.onToggle().subscribe(
      (value) => (this.showAddTask = value)
    );
  }

  ngOnInit(): void {}

  toggleAddTask() {
    this.UIService.toogleAddTask();
  }

  hasRoute(route: string){
    return this.router.url === route
  }
}
