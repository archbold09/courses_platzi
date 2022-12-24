import express, { Request, Response } from 'express';
import Airports from './controller';
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const airportsIdent: string = req.query.apt as string;

  const airports = await Airports.getAirports(airportsIdent);

  res.status(200).json(airports);
});

export default router;
