import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NumberByServiceComponent } from './components/number-by-service/number-by-service.component';
import { NumberService } from './number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Day36-LectureDemo';

  private router = inject(Router);
  private numberService = inject(NumberService);

  goHome() {
    console.info(">>> goHome")
    this.router.navigate(['/']);
  }

  onNumberSelected(element: any) {
    console.info("Element: ", element.target.value);
    const dimension = { width: 300 };
    // this.router.navigate(['/number', element.target.value], { queryParams: { width: dimension.width }});
    this.numberService.imageNumber = element.target.value;
    this.numberService.imageWidth = 400;
    this.router.navigate(['/number-by-service']);
  }

}
