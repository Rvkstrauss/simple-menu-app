export interface Restaurant {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  cuisine: string;
  price: number;
}

export interface Menu {
  restaurantId: number;
  name: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
}
