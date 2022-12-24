import express, { Request, Response } from 'express';
import userClass from './controller';
const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  const users = userClass.users;

  res.status(200).json(users);
});

export default router;
