import express, { Express } from 'express';
import config from './config/index';
// import WebSocket from './components/webscokets';
// import cors from 'cors';
import routerApi from './components/routes';

const app: Express = express();
app.use(express.json());
// app.use(cors);

routerApi(app);

const server = app.listen(config.mainConfig.PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${config.mainConfig.PORT}`);
});

// WebSocket(server);

export default server;
