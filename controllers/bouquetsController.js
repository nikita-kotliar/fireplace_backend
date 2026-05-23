import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';
import gravatar from 'gravatar';
import { v4 as uuidv4 } from 'uuid';
import * as bouquetsService from '../services/bouquetsService.js';
import HttpError from '../helpers/HttpError.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAllBouquets = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.favorite !== undefined) {
      filter.favorite = req.query.favorite === 'true';
    }
    const bouquets = await bouquetsService.getAll(filter);
    res.json(bouquets);
  } catch (error) {
    next(error);
  }
};

export const getBouquetById = async (req, res, next) => {
  try {
    const bouquet = await bouquetsService.getById(req.params.id);
    res.json(bouquet);
  } catch (error) {
    next(error);
  }
};

export const createBouquet = async (req, res, next) => {
  try {
    const { title, description, price, favorite } = req.body;

    const photoURL = gravatar.url(
      `${title}${Date.now()}`,
      { s: '300', d: 'retro', r: 'pg' },
      true
    );

    const bouquet = await bouquetsService.create({
      title,
      description,
      price,
      favorite: favorite ?? false,
      photoURL,
    });
    res.status(201).json(bouquet);
  } catch (error) {
    next(error);
  }
};

export const updateBouquet = async (req, res, next) => {
  try {
    const bouquet = await bouquetsService.update(req.params.id, req.body);
    res.json(bouquet);
  } catch (error) {
    next(error);
  }
};

export const deleteBouquet = async (req, res, next) => {
  try {
    const bouquet = await bouquetsService.remove(req.params.id);
    res.json({ message: 'Bouquet deleted', id: bouquet.id });
  } catch (error) {
    next(error);
  }
};

export const patchFavorite = async (req, res, next) => {
  try {
    const bouquet = await bouquetsService.updateStatus(req.params.id, req.body);
    res.json(bouquet);
  } catch (error) {
    next(error);
  }
};

export const uploadPhoto = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(new HttpError(400, 'Photo file is required'));
    }

    const { path: tempPath, originalname } = req.file;
    const ext = path.extname(originalname);
    const uniqueName = `${uuidv4()}${ext}`;
    const publicPhotosDir = path.resolve(path.join(__dirname, '../../public/photos'));
    const destPath = path.join(publicPhotosDir, uniqueName);

    await fs.rename(tempPath, destPath);

    const photoURL = `/photos/${uniqueName}`;
    const bouquet = await bouquetsService.updatePhoto(req.params.id, photoURL);
    res.json(bouquet);
  } catch (error) {
    if (req.file) {
      await fs.unlink(req.file.path).catch(() => {});
    }
    next(error);
  }
};
