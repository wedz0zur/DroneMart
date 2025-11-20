import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import AuthStore from "./store/AuthStore.ts";
import ProductStore from "./store/ProductStore.ts";
import './styles/global.css';

interface State {
  authStore: AuthStore;
  productStore: ProductStore;
}

const authStore = new AuthStore();
const productStore = new ProductStore();

export const Context = createContext<State>({
  authStore,
  productStore,
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Context.Provider value={{ authStore, productStore }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
