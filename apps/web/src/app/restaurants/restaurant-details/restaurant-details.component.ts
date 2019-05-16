import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant, Menu } from '../../../../../../models';
// import { RestaurantService } from './restaurant-details.service';
// import { Restaurant } from '../../../../../models';
// import { Router } from '@angular/router';

@Component({
  selector: 'restaurant-details',
  templateUrl: 'restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
//     restaurants: Restaurant[];
//     displayedColumns: string[] = ['name', 'address', 'city', 'state', 'category'];
  isAdmin = true;
  menu: Menu;
  restaurant: Restaurant;
  id: Observable<string>;
  constructor(private restaurantService: RestaurantService, route: ActivatedRoute, private router: Router) {
    this.id = route.params.pipe(map(p => p.id));
  }
  
  ngOnInit(): void {
    let restId = 0;
    this.id.subscribe(id => {
      restId = parseInt(id)});
    this.restaurantService.retrieveRestaurant(restId).subscribe(rest => {
      this.menu = rest.menu;
      this.restaurant = rest.restaurant
    });
  }

  edit() {
    this.router.navigate(['restaurant', `${this.restaurant.id}`, 'edit']);
  }

  price(p): number {
    return p.toFixed(2);
  }
}
