import { CartItem as CartItemType } from "./FoodData";


interface CartItemProps {
  cartItem: CartItemType
}

export function CartItem({ cartItem }: CartItemProps) {
  return (
    <li className="border p-4 rounded-lg">
      <h3 className="text-xl font-semibold">{cartItem.name}</h3>
      <p>Quantity: {cartItem.quantity}</p>
      <p className="text-lg font-bold">
        Total: ${(cartItem.price * cartItem.quantity).toFixed(2)}
      </p>
    </li>
  );
}
