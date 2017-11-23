import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  
  sendgreetingtochild:string="Accept the Greeting from Parent ";
  constructor() { }

  ngOnInit() {
  }

}
