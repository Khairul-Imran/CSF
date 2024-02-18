import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BedandbreakfastService } from './services/bedandbreakfast.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private fb = inject(FormBuilder);
  private bnbService = inject(BedandbreakfastService);

  form!: FormGroup;
  dropdown$!: Observable<string[]>

  ngOnInit(): void {
    this.form = this.createForm();
    this.processSuburb();
  }

  processForm() {
  
  }
  

  processSuburb() {
    this.dropdown$ = this.bnbService.searchSuburbs();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      suburb: this.fb.control<string>('', [Validators.required])
    });
  }

}
