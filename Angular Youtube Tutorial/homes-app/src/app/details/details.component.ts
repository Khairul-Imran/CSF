import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service'; // Imported this.
import { HousingLocation } from '../housing-location'; // This too.
// Forms section
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- <p>
      Made small change here.
      Was housingLocationId, changed to this
      details works! {{ housingLocation?.id }}
    </p> -->
    <article>
      <img [src]="housingLocation?.photo" alt="Photo of the house location." class="listing-photo">
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
      <!-- This is where we added our FormGroup -->
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">
          <button type="submit" class="primary">Apply Now</button>
        </form>
      </section>
      
    </article>
  `,
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);

  // Made changes here.
  // Similar to home.component
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  // FormGroup -> Represents a collection of FORM CONTROLS that make up a form.
  // The FormGroup represents the data you want to collect!!!!
  // In this case, we will have 3 datapoints that we will represent as form controls (firstName, lastName, email)
  // The FormGroup instance accepts an object literal that defines the form controls within its properties.
  applyForm = new FormGroup({
    // This is the object literal (within the {})
    firstName: new FormControl(''), // Set the default values to an empty string.
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    // We expect the id to be a numeric value -> Number class
    // Edited from this.housingLocationId to const....
    // We can use a local variable now that we have access to an actual location instance (through the service).
    const housingLocationId = Number(this.route.snapshot.params["id"])
    // this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);

    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  // Submit application
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
