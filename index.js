import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import routes from './routes';

const { server } = require('./config').default;

const app = express();

const swagger = {};

swagger.ui = require('swagger-ui-express');
swagger.apiDocument = require('./swagger.json');

if (server.production) {
  delete swagger.ui;
  delete swagger.apiDocument;
}

if (!server.production) {
  app.use('/docs', swagger.ui.serve, swagger.ui.setup(swagger.apiDocument));
}

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/*', (_, response) => response.status(404).end());

app.listen(server.port);
