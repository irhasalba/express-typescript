import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import route from './routes/route';

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT;

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

app.use('/api',route);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});