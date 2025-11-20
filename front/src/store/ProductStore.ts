import { makeAutoObservable } from "mobx";
import ProductService from "../services/Product/ProductService.ts";
import { IProduct, IProductCreate } from "../models/response/IProduct.ts";
import { IUser } from "../models/response/IUser.ts";

export default class ProductStore {
  products: IProduct[] = [];
  currentProduct: IProduct | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  setProducts(products: IProduct[]) {
    this.products = products;
  }

  setCurrentProduct(product: IProduct | null) {
    this.currentProduct = product;
  }

  async fetchProducts() {
    this.setLoading(true);
    try {
      const response = await ProductService.getProducts();
      this.setProducts(response.data);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async fetchProductById(id: string) {
    this.setLoading(true);
    try {
      const response = await ProductService.getProductById(id);
      this.setCurrentProduct(response.data);
      return response.data;
    } catch (e: any) {
      console.log(e.response?.data?.message);
      throw e;
    } finally {
      this.setLoading(false);
    }
  }

  async addProduct(productData: IProductCreate) {
    try {
      const response = await ProductService.addProduct(
        productData.name,
        productData.description,
        productData.price
      );
      await this.fetchProducts();
      return response.data;
    } catch (e: any) {
      console.log(e.response?.data?.message);
      throw e;
    }
  }

  async deleteProduct(id: string) {
    try {
      await ProductService.deleteProduct(id);
      await this.fetchProducts();
    } catch (e: any) {
      console.log(e.response?.data?.message);
      throw e;
    }
  }

  async updateProduct(id: string, updatedFields: Partial<IProduct>) {
    try {
      const response = await ProductService.updateProduct(id, updatedFields);
      await this.fetchProducts();
      return response.data;
    } catch (e: any) {
      console.log(e.response?.data?.message);
      throw e;
    }
  }

  canEditProduct(currentUser: IUser): boolean {
    return currentUser.role === "Admin";
  }
}