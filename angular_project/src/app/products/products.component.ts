import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  parentMsg:number=0;
  cartItems:any[] = [];
  productsInfo:any = [
    { id:1, name:"Product-1", description:"Quickly build an effective pricing table for your potential customers"},
    { id:2, name:"Product-2", description:"Quickly build an effective pricing table for your potential customers"},
    { id:3, name:"Product-3", description:"Quickly build an effective pricing table for your potential customers"},
    { id:4, name:"Product-4", description:"Quickly build an effective pricing table for your potential customers"},
    { id:5, name:"Product-5", description:"Quickly build an effective pricing table for your potential customers"},
  ];

  constructor(public commonSer:CommonService){
    
  }

  ngOnInit()
  {
    console.log(this.commonSer.notificationMsg);
  }

  addToCart(id:number)
  {
   
    let cartData = this.productsInfo.filter(function(el:any) {
      return (el.id == id)
      //{ id:1, name:"Product-1", description:"Quickly build an effective pricing table for your potential customers"}
    });
    // [{ id:1, name:"Product-1", description:"Quickly build an effective pricing table for your potential customers"}]
    // ["name", "age"];

    // console.log(cartData[0]);
    this.cartItems.push(cartData[0]);
    this.parentMsg = this.cartItems.length;
    this.commonSer.cartItems.push(cartData[0]);
  }

}
