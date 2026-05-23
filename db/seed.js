// генерація тестових даних 
import 'dotenv/config';
import gravatar from 'gravatar';
import sequelize from './sequelize.js';
import Bouquet from '../models/Bouquet.js';

const rawBouquets = [
  { title: 'Peach Meadow',  description: 'A soft and radiant arrangement of peach and blush roses with lush greenery in a straw basket — light and natural.',         price: 55 },
  { title: 'Blush Romance', description: 'A premium bouquet of deep pink and ivory roses, complemented by silver eucalyptus — sophisticated and intimate.',            price: 34 },
  { title: 'Pastel Garden', description: 'A pastel-toned mix of spray roses and greenery in a woven basket — gentle, airy, and perfect for any occasion.',            price: 40 },
  { title: 'Tulip Charm',   description: 'A vivid bouquet of bright tulips and roses in a lavender box — cheerful and full of charm.',                                price: 61 },
  { title: 'Berry Bloom',   description: 'A lush mix of rich pink, purple, and cream blooms with textured greens — romantic and elegant.',                            price: 32 },
  { title: 'Sweet Whisper', description: 'A charming spring bouquet with peonies, roses, and lilac-toned accents — fresh, lively, and expressive.',                  price: 40 },
  { title: 'Field Joy',     description: 'A rustic hand-tied bouquet of sunflowers, lisianthus, and daisies — perfect for brightening the day.',                     price: 49 },
  { title: 'Soft Bloom',    description: 'A delicate bouquet of pink carnations and roses wrapped in satin paper — soft, stylish, and versatile.',                   price: 37 },
];

const bouquets = rawBouquets.map((b) => ({
  ...b,
  favorite: false,
  photoURL: gravatar.url(`${b.title}seed`, { s: '300', d: 'retro', r: 'pg' }, true),
}));

const seed = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to database');
    await sequelize.sync({ alter: true });
    await Bouquet.bulkCreate(bouquets);
    console.log(`Seeded ${bouquets.length} bouquets successfully`);
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error.message);
    process.exit(1);
  }
};

seed();
