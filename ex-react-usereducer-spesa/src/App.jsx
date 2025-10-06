import { useState } from "react";
import "./App.css";

//* COMPONENTI
import ProductList from "./components/ProductList/List.jsx";
import Cart from "./components/Cart/Cart.jsx";

//* HOOK
import useCart from "./hooks/useCart.js";

function App() {
  const { addedProducts, addToCart } = useCart();

  return (
    <>
      <ProductList onAddToCart={addToCart} addedProducts={addedProducts}/>
      <Cart cartItems={addedProducts} />
    </>
  );
}

export default App;
