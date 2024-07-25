import express from "express";

import productsController from "./controllers/products.controller";
import categoriesController from "./controllers/category.controller";
import uploadController from "./controllers/upload.controller";

import uploadMiddleware from "./middlewares/upload.middleware";
const router = express.Router();

router.get("/products", productsController.findAll);
router.post("/products", productsController.create);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.get("/categories", categoriesController.findAll);
router.post("/categories", categoriesController.create);
router.get("/categories/:id", categoriesController.findOne);
router.put("/categories/:id", categoriesController.update);
router.delete("/categories/:id", categoriesController.delete);
router.get("/categories/:id/products", categoriesController.findProductsByCategoryId);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);

export default router;