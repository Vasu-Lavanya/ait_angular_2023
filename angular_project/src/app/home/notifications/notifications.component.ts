import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  @Output() childNotification = new EventEmitter();
  constructor(){

  }


  clicked(link:string='')
  {
    //console.log(link);
    this.childNotification.emit(link);
  }


}
