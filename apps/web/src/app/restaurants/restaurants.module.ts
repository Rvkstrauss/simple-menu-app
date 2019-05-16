import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { MatTableModule, MatIconModule } from '@angular/material';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantDetailsEditComponent } from './restaurant-details-edit/restaurant-details-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [RestaurantsComponent, RestaurantDetailsComponent, RestaurantDetailsEditComponent],
    imports: [
        CommonModule,
        RestaurantsRoutingModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule
    ],
    exports: [],
    providers: []
})
export class RestaurantsModule {}
