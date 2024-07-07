import { FoodItem as FoodItemType } from "../types";

interface FoodItemProps {
  foodItem: FoodItemType;
  addToCart: (foodItem: FoodItemType) => void;
}

export function FoodItem({ foodItem, addToCart }: FoodItemProps) {
  return (
    <li className="border p-4 rounded-lg">
      <h3 className="text-xl font-semibold">{foodItem.name}</h3>
      <p>{foodItem.description}</p>
      <p className="text-lg font-bold">${foodItem.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(foodItem)}
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </li>
  );
}
