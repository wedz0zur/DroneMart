import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App.tsx";
import AuthStore from "./store/AuthStore.ts";
import ProductStore from "./store/ProductStore.ts";

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
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);