import { Router } from 'express';
import { getRestaurants, getRestaurantDetails, updateMenu } from '../middlewares';
// import { async } from '@libs/express-zone';

const router = Router();

router.get('/', getRestaurants());
router.get('/:id', getRestaurantDetails({ byId: req => req.params.id }));
router.post('/edit', updateMenu({ byMenu: req => req.body.menu }));

export { router as restaurants };
