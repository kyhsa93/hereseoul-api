import { Router } from 'express';
import destinationsList from './list';

const router = Router();

router.get('/', destinationsList);

export default router;
