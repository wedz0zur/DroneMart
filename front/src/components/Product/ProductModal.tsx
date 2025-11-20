import React, { useContext } from "react";
import { IProduct } from "../../models/response/IProduct.ts";
import { Context } from "../../index.tsx";
import { observer } from "mobx-react-lite";

interface ProductModalProps {
  product: IProduct;
  onClose: () => void;
  onEdit?: (product: IProduct) => void;
  onDelete?: (productId: string) => void;
}

const ProductModal: React.FC<ProductModalProps> = observer(
  ({ product, onClose, onEdit, onDelete }) => {
    const { authStore, productStore } = useContext(Context);
    const canEdit = productStore.canEditProduct(authStore.user);

    const formatPrice = (price: number) => {
      return new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
      }).format(price);
    };

    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString("ru-RU");
    };

    const handleDelete = () => {
      if (window.confirm("Вы уверены, что хотите удалить этот товар?")) {
        onDelete?.(product._id);
        onClose();
      }
    };

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{product.name}</h2>
            <button onClick={onClose} className="close-btn">
              ×
            </button>
          </div>

          <div className="modal-body">
            <div className="product-image-large">
              <div className="image-placeholder-large">
                <span>📷</span>
                <p>Изображение товара</p>
              </div>
            </div>

            <div className="product-details">
              <div className="detail-group">
                <label>Описание:</label>
                <p>{product.description}</p>
              </div>

              <div className="detail-group">
                <label>Цена:</label>
                <div className="price-large">{formatPrice(product.price)}</div>
              </div>

              <div className="detail-group">
                <label>Дата добавления:</label>
                <p>
                  {product.registrationDate
                    ? formatDate(product.registrationDate)
                    : "Не указана"}
                </p>
              </div>
            </div>

            {canEdit && (
              <div className="modal-actions">
                <button
                  onClick={() => {
                    onEdit?.(product);
                    onClose();
                  }}
                  className="btn-edit"
                >
                  ✏️ Редактировать
                </button>
                <button onClick={handleDelete} className="btn-delete">
                  🗑️ Удалить товар
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default ProductModal;
