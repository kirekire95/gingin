"use client"

import { useState } from "react";
import { CartItem } from "./CartItem";
import { CartItem as CartItemType, FoodItem as FoodItemType, foodItems } from "./FoodData";
import { FoodItem } from "./FoodItem";

export function FoodList() {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const addToCart = (foodItem: FoodItemType) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === foodItem.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === foodItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...foodItem, quantity: 1 }];
      }
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Menu</h2>
      <ul className="space-y-4">
        {foodItems.map((foodItem) => (
          <FoodItem key={foodItem.id} foodItem={foodItem} addToCart={addToCart} />
        ))}
      </ul>
      <h2 className="text-2xl font-bold mt-8 mb-4">Cart</h2>
      <ul className="space-y-4">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
    </div>
  );
}
