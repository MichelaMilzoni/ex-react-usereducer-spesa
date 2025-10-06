export default function Cart({ cartItems }) {
  if (cartItems.length === 0) {
    return (
      <>
        <h2>Carrello</h2>
        <p>Il carrello è vuoto</p>
      </>
    );
  }
  return (
    <>
      <h2>Carrello</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.name}>
            {item.name} - €{item.price * item.quantity}
          </li>
        ))}
      </ul>
    </>
  );
}
