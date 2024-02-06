import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})
export class NumberComponent {

  @Input()
  value: number = 0;

  @Input()
  min: number = 0;

  @Input()
  max: number = 30;

  // This will be placed inside the app.component.html
  // Whenever this changes (an event occures), you want to put it into the queue, to tell the parent that this changed.
  @Output()
  selected = new Subject<number>();

  // @Output()
  // valueChanged = new Subject<number>();

  negative: number = 1;

  incrementNumber() {
    this.value++;
  }

  decrementNumber() {
    this.value--;
  }

  // Event handler.
  increaseClicked() {
    console.info("From number.component: Increase has been clicked.");

    // To fire the event we created.
    this.incrementNumber();    
    
    // If the number you're at is lesser than the minimum value we set, change the current value to become the maximum value set.
    if (this.value < this.min) {
      this.value = this.max;
    }

    // If the number you're at is more than the max value we set, change the current value to become the minimum value set.
    if (this.value > this.max) {
      this.value = this.min;
    }

    // this.valueChanged.next(this.value * this.negative);
  }

  decreaseClicked() {
    console.info("From number.component: Decrease has been clicked.");

    this.decrementNumber();
    
    if (this.value < this.min) {
      this.value = this.max;
    }

    if (this.value > this.max) {
      this.value = this.min;
    }

    // this.valueChanged.next(this.value * this.negative);
  }

  // Event handler.
  negativeCheck() {
    console.info("> negative: ");
    this.negative *= -1; // Toggles between negative and positive.
  }

  // Event handler.
  pressed() {
    this.selected.next(this.value * this.negative);
  }
}
