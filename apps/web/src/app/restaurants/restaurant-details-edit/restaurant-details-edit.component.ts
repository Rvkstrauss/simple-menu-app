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
  selector: 'restaurant-details-edit',
  templateUrl: 'restaurant-details-edit.component.html',
  styleUrls: ['./restaurant-details-edit.component.scss']
})
export class RestaurantDetailsEditComponent implements OnInit {
//     restaurants: Restaurant[];
//     displayedColumns: string[] = ['name', 'address', 'city', 'state', 'category'];
  isAdmin = true;
  submitResponse = false;
  showError = false;
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
      this.restaurant = rest.restaurant});
  }

  submitUpdate(form) {
      this.submitResponse = false;
      this.menu.items.forEach(item => {
          if (form.value[`${item.id}`] && form.value[`${item.id}`] !== item.name) {
            item.name = form.value[`${item.id}`];
          }
          if (form.value[`${item.id}Price`] && form.value[`${item.id}Price`] !== item.price) {
            item.price = form.value[`${item.id}Price`];
          }
      });
      this.restaurantService.submitMenu(this.menu).subscribe(res => {
          if(res.response.menu) {
              this.menu = res.response.menu;
            this.submitResponse = true;
            setTimeout(() => {this.submitResponse = false;}, 1500); 
          } else {
            this.showError = true;
            setTimeout(() => {this.showError = false;}, 1500); 
          }
        });
  }


  price(p): number {
    return p.toFixed(2);
  }
}
