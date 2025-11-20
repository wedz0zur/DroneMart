import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../../index.tsx";
import { observer } from "mobx-react-lite";
import { IProduct } from "../../models/response/IProduct.ts";
import "./ProductPage.css";

const ProductPage: React.FC = observer(() => {
  const { productId } = useParams<{ productId: string }>();
  const { productStore } = useContext(Context);
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        try {
          // Используем новый метод для получения одного товара
          const productData = await productStore.fetchProductById(productId);
          setProduct(productData);
        } catch (error) {
          console.error("Error fetching product:", error);
          setProduct(null);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchProduct();
  }, [productId, productStore]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="loading-section">
        <div className="spinner"></div>
        <p>Загрузка товара...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h1>Товар не найден</h1>
          <p>Запрошенный товар не существует или был удален.</p>
          <button
            onClick={() => navigate("/catalog")}
            className="btn btn-primary"
          >
            Вернуться в каталог
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="product-page">
      <div className="container">
        <button onClick={() => navigate("/catalog")} className="back-btn">
          ← Назад к каталогу
        </button>

        <div className="product-detail">
          <div className="product-gallery">
            <div className="main-image">
              <div className="image-placeholder-large">
                <span>📷</span>
                <p>Изображение товара</p>
              </div>
            </div>
          </div>

          <div className="product-info">
            <h1 className="product-title">{product.name}</h1>

            <div className="product-price-section">
              <span className="product-price">
                {formatPrice(product.price)}
              </span>
            </div>

            <div className="product-description-section">
              <h3>Описание</h3>
              <p className="product-description-full">{product.description}</p>
            </div>

            <div className="product-actions">
              <button className="btn btn-primary btn-large">
                Добавить в корзину
              </button>
              <button className="btn btn-outline btn-large">
                📞 Запросить консультацию
              </button>
            </div>

            <div className="product-features">
              <h3>Характеристики</h3>
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-label">Категория:</span>
                  <span className="feature-value">Дрон</span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">В наличии:</span>
                  <span className="feature-value in-stock">
                    ✓ Есть в наличии
                  </span>
                </div>
                <div className="feature-item">
                  <span className="feature-label">Доставка:</span>
                  <span className="feature-value">1-3 дня</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ProductPage;
