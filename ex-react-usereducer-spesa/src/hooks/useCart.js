import { useState } from "react";

//* funzione useCart
export default function useCart() {
  // Creo lo stato del carrello, inizialmente vuoto
  const [addedProducts, setAddedProducts] = useState([]);

  // Funzione per aggiungere un prodotto al carrello
  // Ricevo l'oggetto prodotto come parametro
  const addToCart = (product) => {

    // Controllo se il prodotto è già presente nel carrello
    // Uso .some per verificare se almeno un elemento ha lo stesso nome
    const alreadyInCart = addedProducts.some((p) => p.name === product.name);

    // Se il prodotto NON è presente
    if (!alreadyInCart) {
      // Lo aggiungo al carrello con quantità iniziale pari a 1
      setAddedProducts([...addedProducts, { ...product, quantity: 1 }]);
    } else {
      // Se il prodotto è già presente, aumento la sua quantità di 1
      const updateProductQuantity = addedProducts.map((p) =>
        // Se il nome corrisponde, aggiorno la quantità
        p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
      );

      // Aggiorno lo stato del carrello con le nuove quantità
      setAddedProducts(updateProductQuantity);
    }
  };


    //* funzione rimuovi dal carrello
    // Definisco la funzione removeFromCart, che riceve il nome del prodotto da rimuovere
    const removeFromCart = (productName) => {

    // Uso reduce per creare un nuovo array aggiornato del carrello
    const updatedCart = addedProducts.reduce((acc, p) => {

        // Controllo se il prodotto corrente ha lo stesso nome di quello da rimuovere
        if (p.name === productName) {

            // Se la quantità è maggiore di 1, lo mantengo ma ne diminuisco la quantità
            if (p.quantity > 1) {
                acc.push({ ...p, quantity: p.quantity - 1 }); // creo una copia del prodotto con quantità ridotta
            }

        // Se la quantità è 1, non lo aggiungo all'array (lo rimuovo completamente)
        } else {

            // Se il prodotto non è quello da rimuovere, lo aggiungo così com'è
            acc.push(p);
        }

        // Ritorno l'accumulatore aggiornato per il prossimo ciclo
        return acc;
    }, []); // Inizio con un array vuoto come base

  // Aggiorno lo stato del carrello con l'array modificato
  setAddedProducts(updatedCart);
};



//* Funzione per gestire l'input manuale delle quantità
// Ricevo il nome del prodotto e il nuovo valore inserito
const updateProductQuantity = (productName, newQuantity) => {

  // Converto il valore in numero intero (evito decimali)
  const quantity = Math.floor(Number(newQuantity));

  // Se la quantità è inferiore a 1, esco dalla funzione (ignoro l'input)
  if (quantity < 1) return;

  // Creo un nuovo array mappando addedProducts
  const updateCart = addedProducts.map((p) =>
    // Se il nome del prodotto corrisponde, aggiorno la quantità
    p.name === productName ? { ...p, quantity } : p
  );

  // Aggiorno lo stato del carrello con il nuovo array
  setAddedProducts(updateCart);
};


    return {addedProducts, addToCart, removeFromCart, updateProductQuantity};
}
    

