import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirpractice',
  templateUrl: './dirpractice.component.html',
  styles:[
    `
    .special
    {
      background-color:blue;
    }
    `
  ]
})
export class DirpracticeComponent implements OnInit {

  displayStatus:boolean=true;
  clickCount=[];
  constructor() { }

  ngOnInit(): void {
  }
  toggleDisplay()
  {
    this.displayStatus=!this.displayStatus;
    this.clickCount.push('Button Clicked at '+new Date());
  }

  getDisplayStatus()
  {
    return this.displayStatus===true?"block":"none"
  }
}
