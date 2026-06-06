import { createContext, useState } from "react";



const CartContext = createContext();

export function CartProvider({children}) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('eye-wear_cart');
    return saved ? JSON.parse(saved) : [];
  });



}