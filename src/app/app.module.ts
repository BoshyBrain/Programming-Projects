import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonesListComponent } from './phones-list/phones-list.component';
import { CurrentPhoneComponent } from './current-phone/current-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    PhonesListComponent,
    CurrentPhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
