import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcomecomponent',
  templateUrl: './new-appcomponent.component.html',
  styleUrls: ['./new-appcomponent.component.css']
})
export class NewAppcomponentComponent implements OnInit {

  name="mangesh";
  constructor() {

   }

  ngOnInit() {
  }

}
