import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  notificationMsg:string = '';
  cartItems: any = [];
  //cartItems: any = [
  //   { id:1, name:"Product-1", description:"Quickly build an effective pricing table for your potential customers"}
  // ];
  
}
