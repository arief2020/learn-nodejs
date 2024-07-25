import CategoriesModel from "@/models/category.model";
import ProductsModel from "@/models/product.model";
import { Request, Response } from "express";

export default {
  async findAll(req: Request, res: Response) {
    try {
      const result = await CategoriesModel.find();
      res.status(200).json({
        data: result,
        message: "Success get all categories",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all categories",
      });
    }
  },
  async create(req: Request, res: Response) {
    try {
      const result = await CategoriesModel.create(req.body);
      res.status(201).json({
        data: result,
        message: "Success create category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create category",
      });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const result = await CategoriesModel.findOne({
        _id: req.params.id,
      });
      res.status(200).json({
        data: result,
        message: "Success get one category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one category",
      });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const result = await CategoriesModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        {
          new: true,
        }
      );

      res.status(200).json({
        data: result,
        message: "Success update category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update category",
      });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const result = await CategoriesModel.findOneAndDelete({
        _id: req.params.id,
      });

      res.status(200).json({
        data: result,
        message: "Success delete category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete category",
      });
    }
  },

  // async findProductsByCategoryId(req: Request, res: Response) {
  //   try {
  //     const result = await CategoriesModel.find({
  //       _id: req.params.id,
  //     }).populate("products");
  //     res.status(200).json({
  //       data: result,
  //       message: "Success get one category",
  //     });
  //   } catch (error) {
  //     const err = error as Error;
  //     res.status(500).json({
  //       data: err.message,
  //       message: "Failed get one category",
  //     });
  //   }
  // },
  async findProductsByCategoryId(req: Request, res: Response) {
    try {
      const result = await ProductsModel.find({categoryId: req.params.id}).populate("categoryId");
      res.status(200).json({
        data: result,
        message: "Success get all products by category",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all products by category",
      });
    }
  },
};
