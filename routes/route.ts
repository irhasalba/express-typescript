import express, { Express, Request, Response } from 'express';
import ExampleController from '../app/controller/ExampleController';

const route = express.Router()

route.get('/test',ExampleController.index)

export default route;