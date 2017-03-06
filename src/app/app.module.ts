import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarModule } from './bar/bar.module';
import { CustomDisplayComponent } from './custom-display/custom-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
