
export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface CartItem extends FoodItem {
  quantity: number;
}
export const foodItems: FoodItem[] = [
  { id: 1, name: "Pizza", description: "Delicious cheese pizza", price: 10 },
  { id: 2, name: "Burger", description: "Juicy beef burger", price: 8 },
  { id: 3, name: "Pasta", description: "Creamy Alfredo pasta", price: 12 },
];
