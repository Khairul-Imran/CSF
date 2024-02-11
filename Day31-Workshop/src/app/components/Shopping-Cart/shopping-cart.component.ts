import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { InventoryItem } from '../../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnChanges {
  
  // @Input()
  cartItems: InventoryItem[] = []
  
  @Output()
  passRemovedItemDetails = new Subject<string>();
  
  @Input()
  itemToAdd!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itemToAdd']?.currentValue) {
      this.addItemToCart(this.itemToAdd);
    }
  }

  removeItemFromCart(itemToBeRemoved: InventoryItem) {
    console.log("Item selected to be removed: " + itemToBeRemoved.name + ",\n with current quantity in CART: " + itemToBeRemoved.quantity);

    if (itemToBeRemoved.quantity > 0) {
      itemToBeRemoved.quantity--;
      this.passRemovedItemDetails.next(itemToBeRemoved.name);
      console.log("Current quantity in cart: " + itemToBeRemoved.quantity)
    } else {
      console.log("This item doesn't exist in your cart.");
    }
  }

  addItemToCart(nameOfItemToBeAdded: string): void {
    console.log("Item selected to be added: " + nameOfItemToBeAdded);
    // Check if the item already exists in the receivedItems array
    const existingItemIndex = this.cartItems.findIndex(item => item.name === nameOfItemToBeAdded);

    if (existingItemIndex !== -1) { // Item exists.
      this.cartItems[existingItemIndex].quantity++;
    } else {
      // If the item doesn't exist, create a new InventoryItem and push it into the receivedItems array
      const newItem: InventoryItem = {
        name: nameOfItemToBeAdded,
        quantity: 1
      };

      this.cartItems.push(newItem);
    }
  }

}
