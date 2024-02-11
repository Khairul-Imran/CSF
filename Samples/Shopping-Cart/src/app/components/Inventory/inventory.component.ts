import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../../models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})

export class InventoryComponent {

  @Input()
  inventory: Item[] = [];

  @Output()
  onSelectedItem = new Subject<string>();

  //Method triggered after click.
  itemSelected(item: Item): void {
    console.log("You have selected: " + item.name + " to add to cart!");

    if (item.quantity > 0) {
      this.onSelectedItem.next(item.name);
    } else {
      console.log("We are out of stock!");
    }
  }

}
