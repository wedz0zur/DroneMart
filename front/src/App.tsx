import React, { FC, useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm/AuthForm.tsx";
import Header from "./components/Header/Header.js"
import { Context } from "./index.tsx";
import { observer } from "mobx-react-lite";
import UserService from "./services/Auth/UserService.ts";
import { IUser } from "./models/response/IUser";
import "./style.css"
import Main from "./components/Main/Main.js";

const App: FC = () => {
  const { authStore } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      authStore.checkAuth();
    }
  }, [authStore]);

  async function getUsers() {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Нет токена, авторизация нужна");
      return;
    }

    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e: any) {
      if (e.response?.status === 401) {
        console.log("Токен недействителен или просрочен");
        authStore.logout();
      } else {
        console.log(e);
      }
    }
  }

  if (authStore.isLoading) {
    return <h2>Загрузка...</h2>;
  }
  if (!authStore.isAuth) {
    return <AuthForm />;
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default observer(App);
