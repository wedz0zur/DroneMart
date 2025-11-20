import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../index.tsx";
import { observer } from "mobx-react-lite";
import ProductCard from "../Product/ProductCard.tsx";
import ProductManagement from "../Admin/ProductManagement.tsx";
import "./Catalog.css";

const Catalog: React.FC = observer(() => {
  const { productStore } = useContext(Context);
  const [showManagement, setShowManagement] = useState(false);

  useEffect(() => {
    productStore.fetchProducts();
  }, [productStore]);

  if (productStore.isLoading) {
    return (
      <div className="loading-section">
        <div className="spinner"></div>
        <p>Загрузка каталога...</p>
      </div>
    );
  }

  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog-header">
          <h1>КАТАЛОГ ДРОНОВ</h1>
          <p>Профессиональные решения для аэросъемки и мониторинга</p>

          <div className="catalog-controls">
            <button
              onClick={() => setShowManagement(!showManagement)}
              className="btn btn-outline"
            >
              {showManagement ? "← Назад к каталогу" : "Управление товарами"}
            </button>
          </div>
        </div>

        {showManagement ? (
          <ProductManagement />
        ) : (
          <>
            {productStore.products.length === 0 ? (
              <div className="empty-catalog">
                <div className="empty-icon">🚁</div>
                <h3>Каталог пуст</h3>
                <p>Товары еще не добавлены в систему</p>
                <button
                  onClick={() => setShowManagement(true)}
                  className="btn btn-primary"
                >
                  Добавить первый товар
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {productStore.products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
});

export default Catalog;
