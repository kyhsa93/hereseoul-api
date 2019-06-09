import { Router } from 'express';
import pathGet from './get';

const router = Router();

router.get('/', pathGet);

export default router;
