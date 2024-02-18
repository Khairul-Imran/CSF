import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrl: './fish.component.css'
})
export class FishComponent {

  private router = inject(Router);

  toHome() {
    this.router.navigate(['/'])
  }

}
