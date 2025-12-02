import Router from 'express'
const router = new Router();
import controller from '../controllers/authController.js'
import {check} from 'express-validator'
import errorMiddleware from '../middlewares/errorMiddleware.js'
import upload from '../middlewares/upload.js'
import { body } from 'express-validator';
import authMiddlewares from '../middlewares/authMiddlewares.js';

router.post("/registration", body('email').isEmail(), body('password').isLength({min: 5, max: 12}), controller.registration);
router.post("/login", controller.login);
router.post("/logout", controller.logout);
router.get("/activate/:link", controller.activate);
router.get("/refresh", controller.refresh);
router.get("/users", authMiddlewares, controller.getUsers);

export default router;