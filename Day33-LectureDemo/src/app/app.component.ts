import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildComponent } from './components/viewchild.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Day33-LectureDemo';
  
  @ViewChild(ViewchildComponent)
  childComponent!: ViewchildComponent;
  
  greeting: string = "";

  item: any = '';

  isOnline: boolean = false;

  // ngAfterViewInit(): void {

  // }

  ngOnInit(): void {
    this.updateOnlineStatus();
    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }

  changeViewchildText() : void {
    this.childComponent.changeText();
  }

  addItem(event: any): void {
    this.item = event;
  }

  updateOnlineStatus() {
    this.isOnline = window.navigator.onLine;
    console.info("Not connected to internet.")
  }

}
