import express, { Express } from 'express';
import usersRouter from './users/routes';
import airportsRouter from './airports/routes';
import routesRouter from './routes/routes';

export default (app: Express) => {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/airports', airportsRouter);
  router.use('/routes', routesRouter);

  /* websocket */
};
