import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent {
  
  @Input() receiverMsg:string = '';

  constructor(){
    console.log(this.receiverMsg);
  }
}
