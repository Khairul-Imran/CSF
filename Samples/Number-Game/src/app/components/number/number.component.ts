import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrl: './number.component.css'
})

export class NumberComponent implements OnChanges {
  
  number: number = 0;
  
  @Input()
  min!: number;
  
  @Input()
  max!: number;
  
  @Output()
  currentSelectedNumber = new Subject<number>();
  
  negative:number = 1;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['negative']?.currentValue) {
      this.reflectNumberStatus();
    }
  }

  addNumber() {
    this.number++;

    // Looping back to the minimum number.
    if (this.number > this.max) {
      this.number = this.min;
    }
    this.reflectNumberStatus();
  }

  minusNumber() {
    this.number--;

    // Looping back to the maximum number.
    if (this.number < this.min) {
      this.number = this.max;
    }
    this.reflectNumberStatus();
  }

  toggleNegative() {
    this.negative *= -1;
    this.currentSelectedNumber.next(this.number * this.negative);
  }

  reflectNumberStatus() {
    this.currentSelectedNumber.next(this.number * this.negative);
  }
}
