import { Router } from 'express';
import * as ctrl from '../../controllers/ordersController.js';
import validateBody from '../../middleware/validateBody.js';
import { createOrderSchema } from '../../schemas/orderSchemas.js';

const router = Router();

router.get('/', ctrl.getAllOrders);
router.post('/', validateBody(createOrderSchema), ctrl.createOrder);

export default router;
