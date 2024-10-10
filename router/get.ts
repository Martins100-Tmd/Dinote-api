import cors from 'cors';
import express from 'express';
import { getAllUsers, getNoteSections, getPage, getSectionPages, getUserNotes, getUserWithNote, routeAuth } from '../controller/get';
import userAuthMiddleWare from '../middleware/userId';
import bodyParser from 'body-parser';

export const getRouter = express.Router();

getRouter.use(cors({ origin: '*' }));

getRouter.use(bodyParser.json({ limit: '500mb' }));
getRouter.use(bodyParser.urlencoded({ extended: true }));

getRouter.get('/users', getAllUsers);
getRouter.get('/userwithnote', userAuthMiddleWare, getUserWithNote);
getRouter.get('/auth', userAuthMiddleWare, routeAuth);
getRouter.get('/section/:id', userAuthMiddleWare, getNoteSections);
getRouter.get('/page/:id', userAuthMiddleWare, getSectionPages);
getRouter.get('/getpage/:id', userAuthMiddleWare, getPage);
