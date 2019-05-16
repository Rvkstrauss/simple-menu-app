import './polyfills';

//import { logger } from '@libs/express-zone';
import { createServer } from 'http';

//import { Sequelize } from 'sequelize-node';

import app from '@server/app';

const PORT = process.env.PORT || 3000;

(async () => {
/*  await Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      dialect: process.env.DB_DIALECT,
      host: process.env.DB_HOST
    }
  ).sequelize.authenticate();

  console.log('Connection database has been established successfully.');
*/
  const server = createServer(app);

  server.listen(PORT, () => {
    console.log(`app listening on port ${PORT}!`);
  });
})();
