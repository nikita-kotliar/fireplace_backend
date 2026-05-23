import { Router } from 'express';
import * as ctrl from '../../controllers/bouquetsController.js';
import validateBody from '../../middleware/validateBody.js';
import upload from '../../middleware/upload.js';
import {
  createBouquetSchema,
  updateBouquetSchema,
  patchFavoriteSchema,
} from '../../schemas/bouquetSchemas.js';

const router = Router();

router.get('/', ctrl.getAllBouquets);
router.get('/:id', ctrl.getBouquetById);
router.post('/', validateBody(createBouquetSchema), ctrl.createBouquet);
router.put('/:id', validateBody(updateBouquetSchema), ctrl.updateBouquet);
router.delete('/:id', ctrl.deleteBouquet);
router.patch('/:id/favorite', validateBody(patchFavoriteSchema), ctrl.patchFavorite);
router.patch('/:id/photo', upload.single('photo'), ctrl.uploadPhoto);

export default router;
