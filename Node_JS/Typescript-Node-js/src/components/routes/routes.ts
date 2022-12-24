import express, { Request, Response } from 'express';
import routesClass from './controller';

// import ws from 'ws'
const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  const routes = routesClass.routes;

  res.status(200).json(routes);
});

router.get('/routesOfUsers', (_req: Request, res: Response) => {
  const data = routesClass.routesOfUsers;

  res.status(200).json(data);
});

router.post('/travelOfUser', (req: Request, res: Response) => {
  const routeData = req.body;

  const data = routesClass.addRouteOfUser(routeData);

  res.status(200).json(data);
});

export default router;
