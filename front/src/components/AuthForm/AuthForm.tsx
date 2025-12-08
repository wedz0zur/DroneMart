import React, { useContext, useState } from "react";
import { FC } from "react";
import { Context } from "../../index.tsx";
import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom';
import "./AuthForm.css"


const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [activeTab, setActiveTab] = useState<'login' | 'registration'>('login');
  const { authStore } = useContext(Context)
  return (
    <section className="flex center">
      <div className="auth flex">
        <div className="auth-links flex">
          <p
            className={`auth-link ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Вход
          </p>
          <p
            className={`auth-link ${activeTab === 'registration' ? 'active' : ''}`}
            onClick={() => setActiveTab('registration')}
          >
            Регистрация
          </p>
        </div>
        {activeTab === 'login' && (
          <div className="login">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="input"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Пароль"
              className="input"
            ></input>
            <div className="checkbox-block flex">
              <input className="checkbox" type="checkbox" /> <label htmlFor="">Запомнить меня</label>
            </div>
            <button className="button auth-btn" onClick={() => authStore.login(email, password)}>Логин</button>
            <div className="line"></div>
            <div className="line-block flex center">
              <Link className="line-link" to="#">
                Забыли пароль?
              </Link>
            </div>

          </div>)}
        {activeTab === 'registration' && (
          <div className="registration flex">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Имя"
              className="input"
            ></input>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              placeholder="Фамилия"
              className="input"
            ></input>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              className="input"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Пароль"
              className="input"
            ></input>
            {/* <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Подтвердите пароль"
              className="input"
            ></input> */}
            <button className="button auth-btn" style={{ marginTop: "37px" }} onClick={() => authStore.registration(name, lastName, email,  password)}>Регистрация</button>
            <div className="line"></div>
          </div>
        )}
        <div className="google-block flex v-center">
          <img src="/images/google-logo.svg" className="google-logo" alt="" />
          <p>продолжить с <span>Google</span></p>
        </div>
      </div>

    </section>
  );
};

export default observer(LoginForm);
