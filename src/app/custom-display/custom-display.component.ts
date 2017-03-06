import { Component } from '@angular/core';
import { DisplayComponent } from '../bar/display/display.component';
@Component({
  selector: 'app-custom-display',
  templateUrl: './custom-display.component.html',
  styleUrls: ['./custom-display.component.css']
})
export class CustomDisplayComponent extends DisplayComponent {
}
