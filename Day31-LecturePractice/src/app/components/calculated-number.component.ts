import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculated-number',
  templateUrl: './calculated-number.component.html',
  styleUrl: './calculated-number.component.css'
})
export class CalculatedNumberComponent {

  @Input()
  calculatedNumber1: number = 0;

  @Input()
  calculatedNumber2: number = 0;

  // This didn't work because - result in this case is initialized only once during its instantiation. Since the result property is calculated based on the values of calculatedNumber1 and calculatedNumber2 at initialization, it doesn't update automatically when these input values change.
  // @Input()
  // result: number = this.calculatedNumber1 + this.calculatedNumber2;

  get result(): number {
    return this.calculatedNumber1 + this.calculatedNumber2;
  }

}
