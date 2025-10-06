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
        }
    }

    return {addedProducts, addToCart};
}
    

