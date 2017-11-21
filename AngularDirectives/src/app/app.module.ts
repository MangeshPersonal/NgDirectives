import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewAppcomponentComponent } from './new-appcomponent/new-appcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    NewAppcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
