import { Router } from 'express';
import categoryList from './list';

const router = Router();

router.get('/', categoryList);

export default router;
