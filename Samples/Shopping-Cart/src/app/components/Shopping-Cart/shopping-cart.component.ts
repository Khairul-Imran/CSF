import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../../models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})

export class ShoppingCartComponent {

  @Input()
  cartItems: Item[] = [];

  @Output()
  onRemoveitem = new Subject<string>();

  removeItemFromCart(item: Item) {
    console.log("You have selected to remove an item from cart: " + item.name);

    if (item.quantity > 0) {
      this.onRemoveitem.next(item.name);
    } else {
      console.log("The item doesn't exist in your cart.");
    }
  }

}
