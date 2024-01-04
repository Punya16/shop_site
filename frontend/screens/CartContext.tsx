// frontend/context/CartContext.tsx
import React, { createContext, useReducer, useContext, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: Product[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; productId: number }
  | { type: 'CHANGE_QUANTITY'; productId: number; change: number };

interface CartContextProps {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingProduct = state.cart.find((product) => product.id === action.product.id);

      if (existingProduct) {
        // If the product is already in the cart, update its quantity
        return {
          ...state,
          cart: state.cart.map((product) =>
            product.id === action.product.id ? { ...product, quantity: product.quantity + 1 } : product
          ),
        };
      } else {
        // If the product is not in the cart, add it
        return {
          ...state,
          cart: [...state.cart, { ...action.product, quantity: 1 }],
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.productId),
      };

    case 'CHANGE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.productId
            ? { ...product, quantity: Math.max(1, product.quantity + action.change) }
            : product
        ),
      };

    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };