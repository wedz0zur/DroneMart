import React, { useContext, useState } from "react";
import { FC } from "react";
import { Context } from "../index.tsx";
import { observer } from "mobx-react-lite";


const ProductForm: FC = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const {productStore} = useContext(Context)
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="name"
      ></input>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="description"
      ></input>
      <input
        onChange={(e) => setPrice(Number(e.target.value))}
        value={price}
        type="number"
        placeholder="price"
      ></input>
      <button onClick={() => productStore.addProduct(name, description, price)}>Добавить</button>
    </div>
  );
};

export default observer(ProductForm);
