export default function Cart({ cartItems, removeFromCart }) {
  if (cartItems.length === 0) {
    return (
      <>
        <h2>Carrello</h2>
        <p>Il carrello è vuoto</p>
      </>
    );
  }

  // calcolo del totale
  const totalPrice = cartItems
    .reduce((sum, product) => sum + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <>
      <h2>Carrello</h2>
      <ul>
        {cartItems.map((product) => (
          <li key={product.name}>
            {product.quantity} x {product.name} - €{(product.price * product.quantity).toFixed(2)}
            <button onClick={() => removeFromCart(product.name)}>Rimuovi dal Carrello</button>
          </li>
        ))}
      </ul>

      <div>
        <strong>Totale:</strong> € {totalPrice}
      </div>
    </>
  );
}
