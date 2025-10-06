// Importo l'icona FaTrash da react-icons
import { FaTrash } from "react-icons/fa";

// Esporto il componente Cart, che riceve tre props:
// cartItems (array dei prodotti nel carrello), removeFromCart (funzione per rimuovere), updateProductQuantity (funzione per aggiornare quantità)
export default function Cart({ cartItems, removeFromCart, updateProductQuantity }) {
  // Se il carrello è vuoto, mostro un messaggio dedicato
  if (cartItems.length === 0) {
    return (
      <>
        <h2>Carrello</h2>
        <p>Il carrello è vuoto</p>
      </>
    );
  }

  // Calcolo il totale del carrello sommando prezzo * quantità per ogni prodotto
  // Uso reduce per accumulare la somma e toFixed(2) per arrotondare a due decimali
  const totalPrice = cartItems
    .reduce((sum, product) => sum + product.price * product.quantity, 0)
    .toFixed(2);

  // Se il carrello ha elementi, li mostro in una lista
  return (
    <>
      <h2>Carrello</h2>
      <ul className="cart-list">
        {cartItems.map((product) => (
          // Per ogni prodotto, creo un <li> con chiave basata sul nome
          <li key={product.name} className="cart-item">
            {/* Campo input per modificare manualmente la quantità */}
            <input
              type="number"
              min={1} // Imposto minimo 1 per evitare quantità zero o negative
              value={product.quantity} // Mostro la quantità corrente
              onChange={(e) => updateProductQuantity(product.name, e.target.value)} // Quando cambia, aggiorno la quantità
            />{" "}
            {/* Mostro nome e prezzo totale per quel prodotto */}x {product.name} - €
            {(product.price * product.quantity).toFixed(2)}
            {/* Bottone per rimuovere il prodotto dal carrello */}
            <button className="icon-button" onClick={() => removeFromCart(product.name)}>
              <FaTrash className="icon" /> Rimuovi
            </button>
          </li>
        ))}
      </ul>

      {/* Mostro il totale complessivo del carrello */}
      <div className="cart-total">
        <strong>Totale:</strong> € {totalPrice}
      </div>
    </>
  );
}
