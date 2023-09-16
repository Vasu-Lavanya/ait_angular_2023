import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //One-way binding
  name:string = "Sample Project";
  updatedName:string = "";
  parentMsg:string = "";

  userClickedOnNotification:string = '';
  
  constructor(public commService:CommonService)
  {
    // console.log(this.name);
  }

  printData()
  {

    this.updatedName = this.name;
    // console.log(this.name);
    // API to capture the data

    this.parentMsg = this.name;
    this.commService.notificationMsg = this.name; 
  }

  captureNotification(event:any)
  {
    this.userClickedOnNotification = event;

  }


}
