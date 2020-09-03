import express from 'express';
import http from 'http';

import './core/db';
import createRoutes from './core/routes';
import createSocket from './core/socket';

const app = express();
const server = http.createServer(app);
const io = createSocket(server);

createRoutes(app, io);

server.listen(process.env.PORT, () => console.log(`Server: http://localhost:${process.env.PORT}`));