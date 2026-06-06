import { Router } from 'express';
import * as ctrl from '../../controllers/reviewsController.js';
import validateBody from '../../middleware/validateBody.js';
import { createReviewSchema } from '../../schemas/reviewSchemas.js';

const router = Router();

router.get('/', ctrl.getAllReviews);
router.post('/', validateBody(createReviewSchema), ctrl.createReview);

export default router;
