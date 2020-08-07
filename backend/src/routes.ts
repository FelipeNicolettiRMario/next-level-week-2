import express, { request } from 'express';

import ClassesControler from './controller/ClassesControles';
import ConnectionController from './controller/ConnectionController';

const routes = express.Router();
const classesControllers = new ClassesControler();
const connectionControllers = new ConnectionController();

routes.post('/aula',classesControllers.create);
routes.get('/aula',classesControllers.index);

routes.post('/connections',connectionControllers.create);
routes.get('/connections',connectionControllers.index);


export default routes;