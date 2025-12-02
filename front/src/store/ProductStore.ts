import { IProduct } from "../models/response/IProduct.ts";
import { makeAutoObservable } from "mobx";
import ProductService from "../services/Product/ProductService.ts";


export default class ProductStore {
  product = {} as IProduct;

  isLoading = false;
  constructor() {
    makeAutoObservable(this);
  }


  setLoading(bool: boolean) {
    this.isLoading = bool;
  }

  async addProduct(name: string, description: string, price: number) {
    try {
      const response = await ProductService.addProduct(name, description, price);
      console.log(response);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async deleteProduct(id: string) {
    try {
      const response = await ProductService.deleteProduct(id);
      console.log(response);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

  async updateProduct(id: string, updatedFields: Partial<IProduct>) {
    try {
      const response = await ProductService.updateProduct(id, updatedFields);
      console.log(response);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }

//   async checkAuth() {
//     this.setLoading(true);
//     try {
//       const response = await axios.get<AuthRespons>(`${AUTH_URL}/refresh`, {
//         withCredentials: true,
//       });
//       console.log(response);
//       localStorage.setItem("token", response.data.accessToken);
//       this.setAuth(true);
//       this.setUser(response.data.user);
//     } catch (e: any) {
//       console.log(e.response?.data?.message);
//     } finally {
//       this.setLoading(false);
//     }
//   }
}
