import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationService } from './configuration.service';
import { DisplayComponent } from './display/display.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisplayComponent],
  providers: [ConfigurationService],
  exports: [DisplayComponent]
})
export class BarModule { }
