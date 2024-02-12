import { Component, OnInit } from '@angular/core';
import { Item } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Shopping-Cart';
  
  // This holds all the inventory.
  parentInventory: Item[] = [];

  // This is where you receive items that have been selected to be added to the cart.
  receivedItems: Item[] = [];
  
  ngOnInit(): void {
    this.parentInventory.push({ name: 'apple', quantity: 10 });
    this.parentInventory.push({ name: 'banana', quantity: 10 });
    this.parentInventory.push({ name: 'bread', quantity: 10 });
    this.parentInventory.push({ name: 'cabbage', quantity: 10 });
    this.parentInventory.push({ name: 'chicken-leg', quantity: 10 });
    this.parentInventory.push({ name: 'eggs', quantity: 10 });
    this.parentInventory.push({ name: 'fish', quantity: 10 });
    this.parentInventory.push({ name: 'grape', quantity: 10 });
    this.parentInventory.push({ name: 'milk', quantity: 10 });
    this.parentInventory.push({ name: 'papaya', quantity: 10 });
  }

  receiveSelectedItem(event: string): void {
    console.log("Parent: An item has been selected to add to cart: " + event);

    const existingItemIndexInReceivedItems = this.receivedItems.findIndex(item => item.name === event);
    const existingItemIndexInParentInventory = this.parentInventory.findIndex(item => item.name === event);
    
    if (existingItemIndexInReceivedItems !== -1) { // Item already exists.
      this.receivedItems[existingItemIndexInReceivedItems].quantity++;
    } else {
      // Item doesn't exist, create a new object and push.
      const newItem: Item = {
        name: event,
        quantity: 1
      };
      
      // this.receivedItems.push(newItem);
      // An array with a new element will not be pushed to component -> won't detect.

      this.receivedItems = [...this.receivedItems, newItem]; 
      // This is the more proper way to do, if using onChange (in this case we didnt)
      // Need to reassign a new reference for change detection to occur.
    }

    this.parentInventory[existingItemIndexInParentInventory].quantity--; // Removes the quantity from inventory.
  }

  receiveRemovedItem(event: string): void {
    console.log("Parent: An Item has been selected to be removed from cart: " + event);

    const existingItemIndexInReceivedItems = this.receivedItems.findIndex(item => item.name === event);
    const existingItemIndexInParentInventory = this.parentInventory.findIndex(item => item.name === event);

    if (existingItemIndexInReceivedItems !== -1) { // Item exists in cart.
      this.receivedItems[existingItemIndexInReceivedItems].quantity--;
    }

    // If the item's quantity is 0, remove it from the cart.
    if (this.receivedItems[existingItemIndexInReceivedItems].quantity === 0) {
      this.receivedItems.splice(existingItemIndexInReceivedItems, 1);
    }

    this.parentInventory[existingItemIndexInParentInventory].quantity++; // Adds back the quantity to inventory.
  }
}
