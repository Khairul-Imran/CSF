import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent {

  private router = inject(Router);

  toHome() {
    this.router.navigate(['/'])
  }

}
