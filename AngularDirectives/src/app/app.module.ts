import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { MasterComponent } from './master/master.component';
import { ChildComponent } from './child/child.component';
import { ChildwithoutputandemiterComponent } from './childwithoutputandemiter/childwithoutputandemiter.component';
import { MasterwithoutputandeventemiterComponent } from './masterwithoutputandeventemiter/masterwithoutputandeventemiter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstcomponentComponent,
    MasterComponent,
    ChildComponent,
    ChildwithoutputandemiterComponent,
    MasterwithoutputandeventemiterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
