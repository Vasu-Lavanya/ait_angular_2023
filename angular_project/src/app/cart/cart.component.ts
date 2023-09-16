import { Component, Input, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:any = [];
  @Input() receiverMsg:any = '';

  constructor(public commService:CommonService){
    console.log(this.receiverMsg);
  }

  ngOnInit() {
    this.cartItems = this.commService.cartItems;
  }


}
