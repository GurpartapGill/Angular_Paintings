import { Component, OnInit, Input } from '@angular/core';

import {Gilgurpa} from '../gilgurpa';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerData: Gilgurpa;

  constructor() { }

  ngOnInit(): void {
  }

}
