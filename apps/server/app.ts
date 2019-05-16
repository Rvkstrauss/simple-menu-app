import { json, urlencoded } from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import methodOverride from 'method-override';
import path from 'path';

//import { clientErrorHandler, errorHandler } from '@libs/express-zone';
import { routes } from './routes';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.use(cookieParser());
app.use(compression());
app.use(methodOverride());

app.use(helmet());

app.use(routes);

app.use(express.static(path.resolve(__dirname, './public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/index.html'));
});

//app.use(clientErrorHandler);
//app.use(errorHandler);

export default app;
