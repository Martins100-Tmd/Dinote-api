import cors from 'cors';
import express from 'express';
import { authenticateUser, createANewNote, createANewPage, createANewSection, createANewUser } from '../controller/post';
import userAuthMiddleWare from '../middleware/userId';
import bodyParser from 'body-parser';

export const postRouter = express.Router();

postRouter.use(cors({ origin: '*' }));
postRouter.use(bodyParser.json({ limit: '500mb' }));
postRouter.use(bodyParser.urlencoded({ extended: true }));

postRouter.post('/signup', createANewUser);
postRouter.post('/login', authenticateUser);
postRouter.post('/newnote', userAuthMiddleWare, createANewNote);
postRouter.post('/newsection', userAuthMiddleWare, createANewSection);
postRouter.post('/newpage', userAuthMiddleWare, createANewPage);
