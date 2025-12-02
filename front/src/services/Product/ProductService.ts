import $api from "../../http/product.ts";
import { AxiosResponse } from "axios";
import { IProduct } from "../../models/response/IProduct.ts";

export default class ProductService {

  static async getProductById(id: string): Promise<AxiosResponse<IProduct>> {
    return $api.get<IProduct>(`/product/${id}`);
  }

  static async addProduct(
    name: string,
    description: string,
    price: number
  ): Promise<AxiosResponse<IProduct>> {
    return $api.post<IProduct>("/addProduct", {
      name,
      description,
      price,
    });
  }

  static async deleteProduct(id: string): Promise<void> {
    return $api.delete(`/delproduct/${id}`);
  }

  static async updateProduct(
    id: string,
    updatedFields: Partial<IProduct>
  ): Promise<AxiosResponse<IProduct>> {
    return $api.patch<IProduct>(`/update/${id}`, updatedFields);
  }
}
