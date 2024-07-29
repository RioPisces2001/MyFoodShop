import { CartService } from 'src/app/services/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity: number = 0;
  constructor(cartService: CartService){
    cartService.getCartObservable().subscribe((newCart) =>{
      this.cartQuantity = newCart.totalCount;
    })
  }
}
