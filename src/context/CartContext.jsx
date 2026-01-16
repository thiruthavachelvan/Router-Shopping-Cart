import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load cart from local storage if needed (optional but good for persistence, ignoring for now as per simple requirements but state update is required)

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                // If already in cart, just return current state or could increase quantity? 
                // Requirement As per task: "If the product is already in the cart display "Remove from Cart" button" -> implies toggle behavior or at least check.
                // But "Cart page users may be able to Increase/Decrease the quantity" 
                // So if added from product page, it's typically quantity 1.
                return prevCart;
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const increaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === productId) {
                    return { ...item, quantity: Math.max(1, item.quantity - 1) };
                }
                return item;
            })
        );
    };

    const clearCart = () => {
        setCart([]);
    }

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountAmount = totalAmount * 0.10;
    const finalPrice = totalAmount - discountAmount;

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                totalAmount,
                discountAmount,
                finalPrice,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
