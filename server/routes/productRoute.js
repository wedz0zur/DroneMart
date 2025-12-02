import Router from 'express'
const router = new Router();
import controller from '../controllers/productController.js'
import { body } from 'express-validator';
import authMiddlewares from '../middlewares/authMiddlewares.js';

router.get("/products", controller.getProducts);
router.get("/product/:id", controller.getOneProduct);
router.post("/addProduct", controller.addProduct);
router.delete("/delproduct/:id", controller.deleteOneProduct);
router.patch("/update/:id", controller.updateProduct);


export default router;