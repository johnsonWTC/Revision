import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hide',
  templateUrl: './hide.component.html',
  styleUrls: ['./hide.component.css']
})
export class HideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  divValue = "hi from the class";
  innerText = "hello from innerText";
  hideTextValue = false;

  HideText(){
    if(this.hideTextValue){
      this.hideTextValue = false;
      this.innerText = "Showing text"
    }
    else{
      
      this.hideTextValue = true;
    }
  }


}
