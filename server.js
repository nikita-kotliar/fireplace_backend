import 'dotenv/config';
import app from './app.js';
import sequelize from './db/sequelize.js';
import './models/Bouquet.js';
import './models/Review.js';
import './models/Order.js';

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful');

    if (process.env.DB_SYNC === 'true') {
      await sequelize.sync({ alter: true });
      console.log('Database synced');
    }

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`Swagger UI: http://localhost:${PORT}/api-docs`);
    });
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

start();
