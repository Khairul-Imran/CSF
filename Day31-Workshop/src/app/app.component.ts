import { Component, Output } from '@angular/core';
import { InventoryItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shopping Cart';

  // receivedItems: InventoryItem[] = [];

  itemFromParentToAdd!: string;

  itemFromParentToRemove!: string;

  // receiveItem(itemName: string) {
  //   console.log("Item: " + itemName + " has been received by the parent!");

  //   // Check if the item already exists in the receivedItems array
  //   const existingItemIndex = this.receivedItems.findIndex(item => item.name === itemName);


  //   if (existingItemIndex !== -1) { // Item exists.
  //     this.receivedItems[existingItemIndex].quantity++;
  //   } else {
  //     // If the item doesn't exist, create a new InventoryItem and push it into the receivedItems array
  //     const newItem: InventoryItem = {
  //       name: itemName,
  //       quantity: 1
  //     };
  //     this.receivedItems.push(newItem);
  //   }
  // }

  receiveItem(itemName: string) {
    console.log("Item to be added: " + itemName + " has been received by the parent!");
    this.itemFromParentToAdd = itemName;
  }

  removeItem(itemName: string) {
    console.log("Item to be removed " + itemName + " has been received by the parent!");
    this.itemFromParentToRemove = itemName;
  }

}
