import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  
  @Input('parentData') // Alias
  greeting: string = 'This is test';
  
  @Output()
  public eventEmitter: EventEmitter<any> = new EventEmitter(); // Similar to Subject. Just use subject next time.
  // sendData = new Subject<any>();

  cards : any[] = [{
    title: "First Record",
    body: "This is my first record."
  },
  {
    title: "Second Record",
    body: "This is my second record."
  }];

  ngOnInit(): void {
    //
  }

  sendItem(itemName: any) : void {
    this.eventEmitter.emit(itemName);
  }


}
