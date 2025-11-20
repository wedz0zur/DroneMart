import React, { FC, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthForm from "./components/Auth/AuthForm.tsx";
import Profile from "./components/Profile/Profile.tsx";
import Catalog from "./components/Catalog/Catalog.tsx";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import ProductPage from "./components/Product/ProductPage.tsx";
import { Context } from "./index.tsx";
import { observer } from "mobx-react-lite";

const App: FC = observer(() => {
  const { authStore } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      authStore.checkAuth();
    }
  }, [authStore]);

  if (authStore.isLoading) {
    return (
      <div className="loading-container">
        <div className="card" style={{ textAlign: "center", padding: "3rem" }}>
          <div
            className="spinner"
            style={{ margin: "0 auto 1rem", width: "3rem", height: "3rem" }}
          ></div>
          <h2 style={{ marginBottom: "0.5rem" }}>Загрузка...</h2>
          <p style={{ color: "var(--text-light)" }}>Пожалуйста, подождите</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="app">
        {authStore.isAuth && <Header />}

        <main className="main-content">
          <Routes>
            {!authStore.isAuth ? (
              <Route path="*" element={<AuthForm />} />
            ) : (
              <>
                <Route path="/" element={<Catalog />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/product/:productId" element={<ProductPage />} />
              </>
            )}
          </Routes>
        </main>

        {authStore.isAuth && <Footer />}
      </div>
    </Router>
  );
});

export default App;
