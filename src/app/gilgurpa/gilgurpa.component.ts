import { Component, OnInit } from '@angular/core';

import {MYART} from '../../assets/data/myArt';
import { Button } from 'protractor';

@Component({
  selector: 'app-gilgurpa',
  templateUrl: './gilgurpa.component.html',
  styleUrls: ['./gilgurpa.component.css']
})
export class GilgurpaComponent implements OnInit {

  //@Input() completeInfo:  

  myArt = MYART;
  constructor() { }

  onClickMe(index)
  {
    var divs = document.querySelectorAll("div");

    for(let x = 0; x<divs.length; x++)
    {
      if(x === index)
      {
        if(divs[index].style.display == 'none')
        {
          divs[index].style.display = 'block';
        }
        //else
        //{
          //divs[index].style.display = 'none';
        //}
      }//end of initial if
      else
      {
        divs[x].style.display = 'none';
      }//end of else
    }//end of for loop
  }//end of function

  citations()
  {
    alert("CITATIONS:\n"+
          "Mona Lisa: https://www.discoveringdavinci.com/mona-lisa\n" +
          "The Starry Night: https://www.britannica.com/topic/The-Starry-Night\n"+
          "Las Menias: https://www.nytimes.com/2013/10/09/arts/Velzquez-Copy-May-Be-the-Real-Thing.html\n"+
          "Tilled Field: https://www.guggenheim.org/artwork/2934\n"+
          "Girl with mandolin: https://modernism-literature-movement.weebly.com/girl-with-a-mandolin---pablo-picasso.html");
  }



  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this.onClickMe(0);

    var btn = document.getElementById("myList").getElementsByTagName("button");
    btn[0].focus();
  }
}
