export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  registrationDate?: string;
}

export interface IProductCreate {
  name: string;
  description: string;
  price: number;
}