import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {

  private router = inject(Router);

  toHome() {
    this.router.navigate(['/'])
  }

}
