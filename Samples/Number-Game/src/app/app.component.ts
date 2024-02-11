import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Number-Game';
  
  parentMin!: number;
  
  parentMax!: number;

  parentSelectedNumber1!: number;

  parentSelectedNumber2!: number;
    
  ngOnInit(): void {
    this.parentMin = 0;
    this.parentMax = 15;
  }

  numberSelectedByChild(n: number, instance: number) {
    if (instance === 1) {
      this.parentSelectedNumber1 = n;
    } else if (instance === 2) {
      this.parentSelectedNumber2 = n;
    }
  }
}
