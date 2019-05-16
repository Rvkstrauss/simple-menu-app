import cors from 'cors';
import { Router } from 'express';
import { api } from './api';

const router = Router();

router.use('/api', cors(), api);

export { router as routes };
