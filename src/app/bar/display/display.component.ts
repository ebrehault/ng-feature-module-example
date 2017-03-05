import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../configuration.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  message: string;
  constructor(private config: ConfigurationService) { }

  ngOnInit() {
      this.message = this.config.getStuff();
  }

}
