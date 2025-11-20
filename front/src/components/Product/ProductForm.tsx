import React, { useContext, useState } from "react";
import { FC } from "react";
import { Context } from "../../index.tsx";
import { observer } from "mobx-react-lite";
import { IProductCreate } from "../../models/response/IProduct.ts";
import './ProductForm.css'

const ProductForm: FC = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const { productStore } = useContext(Context);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData: IProductCreate = {
      name,
      description,
      price
    };

    setIsLoading(true);
    try {
      await productStore.addProduct(productData);
      setName("");
      setDescription("");
      setPrice(0);
    } catch (error) {
      console.error('Error adding product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="product-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">НАЗВАНИЕ ТОВАРА</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Введите название товара"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">ОПИСАНИЕ</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            placeholder="Введите описание товара"
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">ЦЕНА (₽)</label>
          <input
            onChange={(e) => setPrice(Number(e.target.value))}
            value={price || ""}
            type="number"
            placeholder="Введите цену"
            className="form-input"
            min="0"
            step="0.01"
            required
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={isLoading || !name.trim() || !description.trim() || price <= 0}
        >
          {isLoading ? (
            <>
              <div className="spinner"></div>
              ДОБАВЛЕНИЕ...
            </>
          ) : (
            'ДОБАВИТЬ ТОВАР'
          )}
        </button>
      </form>
    </div>
  );
};

export default observer(ProductForm);