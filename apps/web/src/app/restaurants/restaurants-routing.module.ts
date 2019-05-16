import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantDetailsEditComponent } from './restaurant-details-edit/restaurant-details-edit.component';

export const routes: Routes = [
  { path: '', component: RestaurantsComponent},
  { path: 'restaurant', children: [
    {path: ':id', component: RestaurantDetailsComponent},
    {path: ':id/edit', component: RestaurantDetailsEditComponent}
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule {}
