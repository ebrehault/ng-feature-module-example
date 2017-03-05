import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationService } from './configuration.service';
import { ManagerService } from './manager.service';
import { DisplayComponent } from './display/display.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisplayComponent],
  providers: [ConfigurationService, ManagerService],
  exports: [DisplayComponent]
})
export class BarModule { }
