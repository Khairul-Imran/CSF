// Injectable - Tells Angular that we can use this class in the dependency injection system.
// -> Therefore, other parts of this app can request an instance of this service.
import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root' // Tells us where in this app can the service be injected to. root -> can be used anywhere in the app.
})

export class HousingService {
  // Added this. (commented out after using http for the data)
  // protected housingLocationList: HousingLocation[] = [
  //   {
  //   id: 0,
  //   name: 'Acme Fresh Start Housing',
  //   city: 'Chicago',
  //   state: 'IL',
  //   photo: '/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg',
  //   availableUnits: 4,
  //   wifi: true,
  //   laundry: true
  // },
  // {
  //   id: 1,
  //   name: 'A113 Transitional Housing',
  //   city: 'Santa Monica',
  //   state: 'CA',
  //   photo: '/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg',
  //   availableUnits: 0,
  //   wifi: false,
  //   laundry: true
  // },
  // {
  //   id: 2,
  //   name: 'Warm Beds Housing Support',
  //   city: 'Juneau',
  //   state: 'AK',
  //   photo: '/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg',
  //   availableUnits: 1,
  //   wifi: false,
  //   laundry: false
  // },
  // {
  //   id: 3,
  //   name: 'Homesteady Housing',
  //   city: 'Chicago',
  //   state: 'IL',
  //   photo: '/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg',
  //   availableUnits: 1,
  //   wifi: true,
  //   laundry: false
  // },
  // {
  //   id: 4,
  //   name: 'Happy Homes Group',
  //   city: 'Gary',
  //   state: 'IN',
  //   photo: '/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg',
  //   availableUnits: 1,
  //   wifi: true,
  //   laundry: false
  // },
  // {
  //   id: 5,
  //   name: 'Hopeful Apartment Group',
  //   city: 'Oakland',
  //   state: 'CA',
  //   photo: '/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg',
  //   availableUnits: 2,
  //   wifi: true,
  //   laundry: true
  // },
  // {
  //   id: 6,
  //   name: 'Seriously Safe Towns',
  //   city: 'Oakland',
  //   state: 'CA',
  //   photo: '/assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg',
  //   availableUnits: 5,
  //   wifi: true,
  //   laundry: true
  // },
  // {
  //   id: 7,
  //   name: 'Hopeful Housing Solutions',
  //   city: 'Oakland',
  //   state: 'CA',
  //   photo: '/assets/r-architecture-GGupkreKwxA-unsplash.jpg',
  //   availableUnits: 2,
  //   wifi: true,
  //   laundry: true
  // },
  // {
  //   id: 8,
  //   name: 'Seriously Safe Towns',
  //   city: 'Oakland',
  //   state: 'CA',
  //   photo: '/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg',
  //   availableUnits: 10,
  //   wifi: false,
  //   laundry: false
  // },
  // {
  //   id: 9,
  //   name: 'Capital Safe Towns',
  //   city: 'Portland',
  //   state: 'OR',
  //   photo: '/assets/webaliser-_TPTXZd9mOo-unsplash.jpg',
  //   availableUnits: 6,
  //   wifi: true,
  //   laundry: true
  // }];

  // Use this url for the data
  url = 'http://localhost:3000/locations';

  constructor() { }

  // Added this.
  // getAllHousingLocations() : HousingLocation[] {
  //   return this.housingLocationList;
  // }

  // Updated for getAllHousingLocations()
  async getAllHousingLocations() : Promise<HousingLocation[]> {
    // Using the fetch API to request data from the locally running json server.
    // Async Await pattern helps us reduce the amount of code needed.
    const data = await fetch(this.url);
    return await data.json() ?? []; // If we get a nullish value from the call to data.json, we will return an empty array. 
  }

  // Added this. 
  // Checking if the id matches a housing location.
  // getHousingLocationById(id: Number) : HousingLocation | undefined {
  //   return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  // } 

  // Updated for getHousingLocationById
  async getHousingLocationById(id: Number) : Promise<HousingLocation | undefined> {
    // JS string interpolation syntax to construct the url
    const data = await fetch(`${this.url}/${id}`);
    // {} -> empty object literal.
    return await data.json() ?? {};
  }
  
  // For submiting form.
  // Will accept 3 string params
  submitApplication(firstName: string, lastName: string, email: string) {
    // Temporary
    console.log(firstName, lastName, email);
  }
  

}
