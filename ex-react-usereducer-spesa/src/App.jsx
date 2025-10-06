// Importo lo useState da React, anche se in questo file non lo uso direttamente
import { useState } from "react";

// Importo il file CSS per gli stili dell'app
import "./App.css";

//* COMPONENTI
// Importo il componente ProductList dalla sua cartella
import ProductList from "./components/ProductList/List.jsx";

// Importo il componente Cart dalla sua cartella
import Cart from "./components/Cart/Cart.jsx";

//* HOOK
// Importo il custom hook useCart, che gestisce la logica del carrello
import useCart from "./hooks/useCart.js";

// Definisco il componente principale App
function App() {
  // Uso il custom hook useCart per ottenere lo stato e le funzioni del carrello
  // Estraggo: addedProducts (array dei prodotti nel carrello),
  // addToCart (funzione per aggiungere), removeFromCart (funzione per rimuovere),
  // updateProductQuantity (funzione per modificare la quantità)
  const { addedProducts, addToCart, removeFromCart, updateProductQuantity } = useCart();

  // Ritorno il layout dell'app: lista dei prodotti e carrello
  return (
    <>
      {/* Passo la funzione addToCart e lo stato addedProducts al componente ProductList */}
      <ProductList onAddToCart={addToCart} addedProducts={addedProducts} />

      {/* Passo lo stato e le funzioni al componente Cart */}
      <Cart
        cartItems={addedProducts}
        removeFromCart={removeFromCart}
        updateProductQuantity={updateProductQuantity}
      />
    </>
  );
}

// Esporto il componente App come default per poterlo usare nel file index.js
export default App;
