'use client'

import { useState } from 'react'

import { useModalStore } from '../store/modalStore'

import { foodItems, type CartItem as CartItemType, type FoodItem as FoodItemType } from './FoodData'
import { FoodItem } from './FoodItem'

export function FoodList() {
  const [cart, setCart] = useState<CartItemType[]>([])
  const { setActiveModal, setModalProps } = useModalStore()

  const addToCart = (foodItem: FoodItemType) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => {
        return item.id === foodItem.id
      })

      if (existingItem) {
        return prevCart.map(item => {
          return item.id === foodItem.id ? { ...item, quantity: item.quantity + 1 } : item
        })
      }

      return [...prevCart, { ...foodItem, quantity: 1 }]
    })
  }

  const openCartModal = () => {
    setModalProps({ cart })
    setActiveModal('CartModal')
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Menu</h2>
      <ul className="space-y-4">
        {foodItems.map(foodItem => {
          return <FoodItem key={foodItem.id} foodItem={foodItem} addToCart={addToCart} />
        })}
      </ul>
      <button
        onClick={openCartModal}
        className="fixed bottom-4 right-4 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600"
      >
        View Cart
      </button>
    </div>
  )
}
