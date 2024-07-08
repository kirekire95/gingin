'use client'

import { Modal } from '@kirekire95/ui/test-experimental'

import { CartItem } from './CartItem'
import type { CartItem as CartItemType } from './FoodData'

type CartModalProps = {
  isOpen: boolean
  onClose: () => void
  modalProps: {
    cart: CartItemType[]
  }
}

export function CartModal({ isOpen, onClose, modalProps }: CartModalProps) {
  const { cart } = modalProps

  const actions = (
    <button
      type="button"
      className="rounded border border-gray-300 px-4 py-2 text-gray-600 transition-colors duration-150 hover:border-gray-400 hover:text-gray-700"
      onClick={onClose}
    >
      Close
    </button>
  )

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalClassName="bg-white p-4"
      overlayClassName="bg-black bg-opacity-50"
      actions={actions}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Cart</h2>
      </div>
      <ul className="space-y-4">
        {cart.map(cartItem => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />
        })}
      </ul>
    </Modal>
  )
}
