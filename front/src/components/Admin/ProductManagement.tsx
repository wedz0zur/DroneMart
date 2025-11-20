import React, { useContext, useState } from 'react';
import { Context } from '../../index.tsx';
import { observer } from 'mobx-react-lite';
import { IProductCreate } from '../../models/response/IProduct.ts';
import './ProductManagement.css';

const ProductManagement: React.FC = observer(() => {
  const { productStore, authStore } = useContext(Context);
  const [formData, setFormData] = useState<IProductCreate>({
    name: '',
    description: '',
    price: 0
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.description.trim() || formData.price <= 0) return;

    setIsLoading(true);
    try {
      await productStore.addProduct(formData);
      setFormData({ name: '', description: '', price: 0 });
    } catch (error) {
      console.error('Error adding product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof IProductCreate, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isAdmin = authStore.user.role === "Admin";

  if (!isAdmin) {
    return (
      <div className="access-denied">
        <h3>Доступ запрещен</h3>
        <p>Только администраторы могут управлять товарами</p>
      </div>
    );
  }

  return (
    <div className="product-management">
      <div className="management-header">
        <h2>УПРАВЛЕНИЕ ТОВАРАМИ</h2>
        <p>Добавление и редактирование товаров в каталоге</p>
      </div>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">НАЗВАНИЕ ТОВАРА *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="form-input"
              placeholder="Например: DJI Mavic 3 Pro"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">ЦЕНА (₽) *</label>
            <input
              type="number"
              value={formData.price || ''}
              onChange={(e) => handleInputChange('price', Number(e.target.value))}
              className="form-input"
              placeholder="0"
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">ОПИСАНИЕ *</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="form-input"
            rows={4}
            placeholder="Подробное описание товара..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || !formData.name.trim() || !formData.description.trim() || formData.price <= 0}
          className="btn btn-primary btn-full"
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
});

export default ProductManagement;