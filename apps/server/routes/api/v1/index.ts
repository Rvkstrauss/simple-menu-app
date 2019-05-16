import { Router } from 'express';
import { restaurants } from '../../../restaurants';

const router = Router();

router.use('/restaurants', restaurants);

export { router as v1 };
