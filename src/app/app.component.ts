import { Component } from '@angular/core';

import { Gilgurpa } from './gilgurpa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  title = 'gilgurpaA3';

  student: Gilgurpa = {
    sid: "991529145",
    sname:"Gurpartap Gill",
    slogin: "gilgurpa",
    scampus: "Davis",
    atitle: "Assignment 3"
  }

}
