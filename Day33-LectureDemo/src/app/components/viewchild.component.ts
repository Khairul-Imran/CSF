import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {

  message: string = 'EMPTY STRING';

  changeText() : void {
    this.message = "String updated by Viewchild";
  }

  

}
