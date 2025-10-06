const products = [
  { name: "Mela", price: 0.5 },
  { name: "Pane", price: 1.2 },
  { name: "Latte", price: 1.0 },
  { name: "Pasta", price: 0.7 },
];

function ProductList({ onAddToCart, addedProducts }) {
  return (
    <div>
      <h2>Lista della spesa</h2>
      <ul>
        {products.map((product) => {
          const isInCart = addedProducts.some((item) => item.name === product.name);

          return (
            <li key={product.name}>
              {product.name} - €{product.price}
              <button onClick={() => onAddToCart(product)}>Aggiungi alla lista</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
