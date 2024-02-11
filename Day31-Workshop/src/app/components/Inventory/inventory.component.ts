import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { InventoryItem } from '../../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnChanges{
  
  availableItems: InventoryItem[] = [
    {name: "apple", quantity: 10},
    {name: "banana", quantity: 10},
    {name: "bread", quantity: 10},
    {name: "cabbage", quantity: 10},
    {name: "chicken-leg", quantity: 10},
    {name: "eggs", quantity: 10},
    {name: "fish", quantity: 10},
    {name: "grape", quantity: 10},
    {name: "milk", quantity: 10},
    {name: "papaya", quantity: 10}
  ]
  
  @Input()
  itemToRemove!: string;
  
  ngOnChanges(): void {
    this.addItemBackToInventory(this.itemToRemove);
  }

  // To send out an inventoryItem
  @Output()
  passItemDetails = new Subject<string>();

  processItemRequest(item: InventoryItem) {
    console.log("Item selected: " + item.name + ",\n with current available quantity: " + item.quantity);

    if (item.quantity > 0) {
      item.quantity--;
      this.passItemDetails.next(item.name);
      console.log("One " + item.name + " successfully added to cart,\n Remaining quantity in inventory: " + item.quantity);
    } else {
      console.log("We are out of stock!");
    }
  }

  // processItemRequest(item: InventoryItem) {
  //   console.log("Item selected: " + item.name + ",\n with current available quantity: " + item.quantity);

  //   if (item.quantity > 0) {
  //     item.quantity--;
  //     this.passItemDetails.next(item.name);
  //     console.log("One " + item.name + " successfully added to cart,\n Remaining quantity in inventory: " + item.quantity);
  //   } else {
  //     console.log("We are out of stock!");
  //   }
  // }

  addItemBackToInventory(itemName: string) {
    console.log("Item: " + this.itemToRemove + "received, to be added back to inventory.");

    const existingItemIndex = this.availableItems.findIndex(inventoryItem => inventoryItem.name == itemName);

    if (existingItemIndex !== -1 && this.availableItems[existingItemIndex].quantity < 10) { // Item exists.
      this.availableItems[existingItemIndex].quantity++;
    }
  }
}
