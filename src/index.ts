import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router } from './routes/loginRoutes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['skdfjasdf'] }));
app.use(router);

app.listen(3000, () => {
  console.log(`Server started on http://localhost:3000`);
});
