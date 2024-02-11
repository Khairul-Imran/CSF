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

  get result(): number {
    return this.calculatedNumber1 + this.calculatedNumber2;
  }
}