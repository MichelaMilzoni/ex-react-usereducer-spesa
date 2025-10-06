import { useState } from "react";


export default function useCart() {
    // creo lo stato
    const [ addedProducts, setAddedProducts ] = useState([]); 
    // scrivo la funzione con la sua logica
    const addToCart = (product) => {
        // controllo se il prodotto è già presente con some (almeno uno)
        const alreadyInCart = addedProducts.some((p) => p.name === product.name);
        // se NON è presente aggiungo aggiornando lo stato
        if (!alreadyInCart) {
            setAddedProducts([...addedProducts, {...product, quantity: 1}]);
        } else {
            const updateProductQuantity = addedProducts.map((p) => 
                p.name === product.name ? {...p, quantity: p.quantity + 1} : p
            );
        setAddedProducts(updateProductQuantity)
        }
    };

    // aggiungo la funzione rimuovi dal carrello
    const removeFromCart = (productName) => {
        const updatedCart = addedProducts
        .map((p) => {
            if (p.name === productName) {
                if (p.quantity > 1) {
                    return { ...p, quantity: p.quantity - 1 };
            } else {
                return null; // da rimuovere
            }
            }
        return p;
    })
    .filter((p) => p !== null); // rimuove i null

  setAddedProducts(updatedCart);
};

    return {addedProducts, addToCart, removeFromCart};
}
    

