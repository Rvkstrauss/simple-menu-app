import * as fromServices from '../services/restaurants.service';

export function getRestaurants() {
    return async (req, res, next) => {
    const restaurants = await fromServices.getRestaurants();

    res.json({ restaurants });
  };
}

export function getRestaurantDetails({ byId }) {
  return async (req, res, next) => {
    const id = byId(req);
    const restaurant = await fromServices.getRestaurantDetails(id);

    res.json({ restaurant });
  };

}

export function updateMenu({ byMenu }) {
    return async (req, res, next) => {
        const menu = byMenu(req);
        const response = await fromServices.updateMenu(menu);

        res.json({ response });
    }
}
