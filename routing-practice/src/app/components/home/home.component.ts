import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private router = inject(Router);

  toCat() {
    this.router.navigate(['/cat']);
  }

  toDog() {
    this.router.navigate(['dog']);
  }

  toFish() {
    this.router.navigate(['fish']);
  }

}
