// Importo l'icona FaPlus da react-icons
import { FaPlus } from "react-icons/fa";

// Definisco l'array dei prodotti disponibili con nome e prezzo
const products = [
  { name: "Mela", price: 0.5 },
  { name: "Pane", price: 1.2 },
  { name: "Latte", price: 1.0 },
  { name: "Pasta", price: 0.7 },
];

// Creo il componente ProductList
// Ricevo due props: onAddToCart (funzione per aggiungere al carrello) e addedProducts (prodotti già nel carrello)
function ProductList({ onAddToCart, addedProducts }) {
  return (
    <div>
      {/* Titolo della sezione */}
      <h2>Lista della spesa</h2>

      {/* Creo una lista non ordinata */}
      <ul className="product-list">
        {/* Mappo l'array dei prodotti per mostrarli uno per uno */}
        {products.map((product) => {
          // Controllo se il prodotto è già presente nel carrello
          const isInCart = addedProducts.some((item) => item.name === product.name);

          // Ritorno un <li> per ogni prodotto
          return (
            <li key={product.name} className="product-item">
              {/* Mostro nome e prezzo del prodotto */}
              {product.name} - €{product.price}
              {/* Bottone per aggiungere il prodotto al carrello */}
              <button className="icon-button" onClick={() => onAddToCart(product)}>
                <FaPlus className="icon" /> Aggiungi
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Esporto il componente per poterlo usare in altri file
export default ProductList;
