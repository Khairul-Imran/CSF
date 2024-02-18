import { Component, OnInit, inject } from '@angular/core';
import { NumberService } from '../../number.service';

@Component({
  selector: 'app-number-by-service',
  templateUrl: './number-by-service.component.html',
  styleUrl: './number-by-service.component.css'
})
export class NumberByServiceComponent implements OnInit {
  
  private NumberService = inject(NumberService);
  
  numDisplay: number = 0;
  imageWidth: number = 0;
  
  ngOnInit(): void {
    this.numDisplay = this.NumberService.imageNumber;
    this.imageWidth = this.NumberService.imageWidth;
  }


}
