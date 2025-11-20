import React, { useContext } from "react";
import { Context } from "../../index.tsx";
import { observer } from "mobx-react-lite";
import ProductForm from "../../components/Product/ProductForm.tsx";
import "./Profile.css";

const Profile: React.FC = observer(() => {
  const { authStore } = useContext(Context);
  const isAdmin = authStore.user.role === "Admin";

  const handleLogout = async () => {
    try {
      await authStore.logout();
    } catch (error) {
      console.error("Ошибка при выходе:", error);
    }
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-header">
          <h1>ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ</h1>
          <p>Управление вашей учетной записью</p>
        </div>

        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-info-section">
              <div className="profile-avatar-large">
                {authStore.user.email.charAt(0).toUpperCase()}
              </div>
              <div className="profile-details">
                <div className="profile-header-row">
                  <h2>Информация о пользователе</h2>
                  <button className="logout-btn" onClick={handleLogout}>
                    Выйти
                  </button>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{authStore.user.email}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Роль:</span>
                  <span className="detail-value role-badge">
                    {isAdmin ? "Администратор" : "Пользователь"}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Статус аккаунта:</span>
                  <span
                    className={`detail-value ${
                      authStore.user.isActivated
                        ? "status-active"
                        : "status-inactive"
                    }`}
                  >
                    {authStore.user.isActivated
                      ? "✓ Подтверждён"
                      : "⚠ Требует подтверждения"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {isAdmin && (
            <div className="admin-section">
              <div className="section-header">
                <h2>УПРАВЛЕНИЕ ТОВАРАМИ</h2>
                <div className="admin-badge">ADMIN</div>
              </div>

              <div className="admin-features">
                <h3>Доступные действия:</h3>
                <ul>
                  <li>✓ Добавление новых товаров</li>
                  <li>✓ Редактирование существующих товаров</li>
                  <li>✓ Удаление товаров</li>
                  <li>✓ Просмотр всех пользователей</li>
                </ul>
              </div>

              <div className="product-form-section">
                <h3>Добавление нового товара</h3>
                <ProductForm />
              </div>
            </div>
          )}

          {!isAdmin && (
            <div className="user-section">
              <h2>ВАШИ ВОЗМОЖНОСТИ</h2>
              <div className="user-features">
                <ul>
                  <li>✓ Просмотр каталога товаров</li>
                  <li>✓ Поиск и фильтрация товаров</li>
                  <li>✓ Просмотр детальной информации о товарах</li>
                </ul>
                <p className="info-note">
                  Для управления товарами обратитесь к администратору
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default Profile;
