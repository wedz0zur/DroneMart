import React from "react";
import { IProduct } from "../../models/response/IProduct.ts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = observer(({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product._id}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(price);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <div className="image-placeholder">
          <span>📷</span>
        </div>
      </div>

      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <div className="product-price">{formatPrice(product.price)}</div>
          <div className="product-actions">
            <button onClick={handleViewDetails} className="btn-view">
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductCard;
