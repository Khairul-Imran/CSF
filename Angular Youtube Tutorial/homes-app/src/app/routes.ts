import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
        path: '', // Routing to the home component by default.
        component: HomeComponent, // HomeComponent class.
        title: "Home Page" // Sets the page title for the route.
    },
    {
        path: 'details/:id', // :id is a placeholder to match the id we receive in the url.
        component: DetailsComponent,
        title: "Details Page"
    }
];

// Allows files that import our routes to have access to the routeConfig variable.
export default routeConfig;