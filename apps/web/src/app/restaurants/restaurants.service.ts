import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Restaurant, Menu } from '../../../../../models';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private API_PATH = '/api/v1/restaurants';

  constructor(private http: HttpClient) {}

  loadAll(): Observable<Restaurant[]> {
    return this.http
      .get<{ restaurants: Restaurant[] }>(`${this.API_PATH}`)
      .pipe(map(response => response.restaurants || []));
  }

  retrieveRestaurant(restaurantId: number): Observable<any> {
    // return this.http.get<Report>(`${this.API_PATH}/${reportId}`);
    return this.http
      .get<{ restaurant: Restaurant }>(`${this.API_PATH}/${restaurantId}`)
      .pipe(map(response => response.restaurant || null));
  }

  submitMenu(menu: Menu): Observable<any> {
    return this.http.post<any>(`${this.API_PATH}/edit`, {menu})
    .pipe(map(response => response || null));
  }
}
