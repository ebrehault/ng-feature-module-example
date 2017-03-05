import { Component } from '@angular/core';
import { ManagerService } from './bar/manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private manager: ManagerService) {
    this.title = this.manager.doSomething();
  }
}
