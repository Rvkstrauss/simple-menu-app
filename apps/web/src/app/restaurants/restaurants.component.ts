import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurants.service';
import { Restaurant } from '../../../../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'restaurants',
  templateUrl: 'restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
    restaurants: Restaurant[];
    displayedColumns: string[] = ['name', 'address', 'city', 'state', 'category'];

    constructor(private restaurantService: RestaurantService, private router: Router) {}

  ngOnInit(): void {
    this.restaurantService.loadAll().subscribe((restaurants) => {
        restaurants.forEach((rest) => {
            rest['category'] = '$'.repeat(rest.price);
        });
        if (restaurants) {
            this.restaurants = restaurants;
        }
    });
  }

  selectRestaurant(restaurant) {
      this.router.navigate(['restaurant',restaurant.id]);
  }
}
