import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day31-LecturePractice';

  selection1 = 0;
  selection2 = 0;

  // currentValue = 0;

  selectedNumber(n: number, instance: number) {
    if (instance === 1) {
      this.selection1 = n;
    } else if (instance === 2) {
      this.selection2 = n
    }
  }

  // valueToSend(n: number) {
  //   this.currentValue = n;
  // }
  
}
