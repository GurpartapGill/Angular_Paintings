import { Component, OnInit, Input } from '@angular/core';

import {Gilgurpa} from '../gilgurpa';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() footerData: Gilgurpa;

  constructor() { }

  ngOnInit(): void {
  }

}
