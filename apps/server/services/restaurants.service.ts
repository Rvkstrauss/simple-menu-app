// import { db } from 'sequelize-node';
import { first } from 'lodash';
import { Restaurant, Menu } from '../../../models';

const menus = [
    {
        restaurantId: 1,
        items: [{id: 1, name: 'item1', price: 14.00}, {id: 2, name: 'item2', price: 15.00}, {id: 3, name: 'item3', price: 16.00}]
    },
    {
        restaurantId: 2,
        items: [{id: 1, name: 'item1', price: 14.00}, {id: 2, name: 'item2', price: 15.00}, {id: 3, name: 'item3', price: 16.00}]
    },
    {
        restaurantId: 3,
        items: [{id: 1, name: 'item1', price: 14.00}, {id: 2, name: 'item2', price: 15.00}, {id: 3, name: 'item3', price: 16.00}]
    },
    {
        restaurantId: 4,
        items: [{id: 1, name: 'item1', price: 14.00}, {id: 2, name: 'item2', price: 15.00}, {id: 3, name: 'item3', price: 16.00}]
    },
    {
        restaurantId: 5,
        items: [{id: 1, name: 'item1', price: 14.00}, {id: 2, name: 'item2', price: 15.00}, {id: 3, name: 'item3', price: 16.00}]
    },
    {
        restaurantId: 6,
        items: [{id: 1, name: 'item1', price: 14.00}, {id: 2, name: 'item2', price: 15.00}, {id: 3, name: 'item3', price: 16.00}]
    }
];

const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Parker's Restaurant",
      address: '32 E Front St',
      city: 'Drummond',
      state: 'Montana',
      cuisine: 'American Restaurant',
      price: 1,
    },
    {
      id: 2,
      name: 'Cherry Cricket',
      address: '2641 E 2nd Ave',
      city: 'Denver',
      state: 'Colorado',
      cuisine: 'Bar',
      price: 2,
    },
    {
      id: 3,
      name: 'Nitty Gritty - Middleton',
      address: '1021 N Gammon Rd',
      city: 'Middleton',
      state: 'Wisconsin',
      cuisine: 'Pub',
      price: 1,
    },
    {
      id: 4,
      name: 'Nitty Gritty - Sun Prairie',
      address: '315 E Linerrud Dr',
      city: 'Sun Prairie',
      state: 'Wisconsin',
      cuisine: 'American Restaurant',
      price: 0
    },
    {
      id: 5,
      name: 'The Counter - Houston',
      address: '4601 Washington Ave',
      city: 'Houston',
      state: 'Texas',
      cuisine: 'Burger Restaurant',
      price: 2,
    },
    {
      id: 6,
      name: 'The Counter - Alcoa',
      address: '3456 Nashville Pkwy',
      city: 'Alcoa',
      state: 'Tennessee',
      cuisine: 'Burger Restaurant',
      price: 2,
    }];
export const getRestaurants = async () => {
    // const reports: Report = await db.sequelize.query(
    //   `Inca_sp_TodayReport @Page=:Page, @PageSize=:PageSize`,
    //   {
    //     replacements: { Page: 1, PageSize: 30 },
    //     type: db.sequelize.QueryTypes.SELECT
    //   }
    // );
  return restaurants;
};

export const getRestaurantDetails = async (id) => {
  const restaurant = first(restaurants.filter(rest => rest.id === parseInt(id)));
  const menu = first(menus.filter(menu => menu.restaurantId === parseInt(id)));
  return { restaurant, menu };
};

export const updateMenu = async (menu: Menu) => {
    const idx = menus.findIndex(m => menu.restaurantId === m.restaurantId);
    menus[idx] = menu;
    return { menu };
};