import { Component, inject } from '@angular/core'; // Added inject for service.
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service'; // Added this too.

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click) = "filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- old, before filtering -->
      <!-- <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation"></app-housing-location> -->
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList:HousingLocation[] = []; // Removed the original data, move to service class.

  // For injecting the service.
  housingService: HousingService = inject(HousingService);

  // New, property for filtering.
  filteredLocationList:HousingLocation[] = [];

  constructor() {
    // this.housingLocationList = this.housingService.getAllHousingLocations(); // Logic to populate the housingLocationList.

    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      // Added for filtering.
      this.filteredLocationList = housingLocationList
    })
  }

  // Added method for filtering results.
  filterResults(text: string) {
    // Checking for blank text.
    // Gives all locations if empty.
    if (!text) this.filteredLocationList = this.housingLocationList;

    // Handling the filtering.
    // filter array method takes a callback that defines the criteria for filtering.
    this.filteredLocationList = this.housingLocationList.filter(housingLocation => housingLocation?.name.toLowerCase().includes(text.toLowerCase()));
  }
}
