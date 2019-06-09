import { Router } from 'express';
import destinations from './destinations';
import categories from './categories';
import paths from './paths';

const router = Router();

router.use('/destinations', destinations);
router.use('/categories', categories);
router.use('/paths', paths);

export default router;
