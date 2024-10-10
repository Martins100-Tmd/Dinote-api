import express, { Express } from 'express';
import cors from 'cors';
import { getRouter } from './router/get';
import { postRouter } from './router/post';
import { deleteRouter } from './router/delete';
import { putRouter } from './router/put';

const app: Express = express();

app.use(
   cors({
      origin: '*',
      credentials: true,
      methods: ['GET', 'PUT', 'POST', 'DELETE'],
   })
);
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: true }));
app.options('*', cors());

app.use('/get', getRouter);
app.use('/post', postRouter);
app.use('/delete', deleteRouter);
app.use('/put', putRouter);

app.listen(3001, () => {
   console.log('Listening on port  3001');
});
