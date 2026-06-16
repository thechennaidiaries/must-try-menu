export interface FoodJoint {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  time: string;
  avgCost: string;
  location: string;
  image: string;
  offers: string;
}

export const joints: FoodJoint[] = [
  {
    id: 1,
    name: "KFC",
    cuisine: "Burgers & Fried Chicken",
    rating: 4.2,
    time: "15-20 mins",
    avgCost: "₹200 for one",
    location: "Second Floor • Shop 1",
    image: "/images/01.jpg",
    offers: "Free Delivery"
  },
  {
    id: 2,
    name: "Pizza Hut",
    cuisine: "Pizzas & Fast Food",
    rating: 4.1,
    time: "20-25 mins",
    avgCost: "₹250 for one",
    location: "Ground Floor • Shop 12",
    image: "/images/02.jpg",
    offers: "10% OFF up to ₹100"
  },
  {
    id: 3,
    name: "Punjab Grill",
    cuisine: "North Indian & Mughlai",
    rating: 4.5,
    time: "25-30 mins",
    avgCost: "₹400 for one",
    location: "Third Floor • Food Hall C",
    image: "/images/03.jpg",
    offers: "₹120 OFF on ₹399"
  },
  {
    id: 4,
    name: "Ramen Bar",
    cuisine: "Japanese Ramen & Noodles",
    rating: 4.4,
    time: "20-25 mins",
    avgCost: "₹300 for one",
    location: "Third Floor • Shop 8",
    image: "/images/04.jpg",
    offers: "Buy 1 Get 1 Free"
  },
  {
    id: 5,
    name: "Dessert Parlor",
    cuisine: "Desserts & Ice Cream",
    rating: 4.6,
    time: "10-15 mins",
    avgCost: "₹150 for one",
    location: "First Floor • Kiosk 2",
    image: "/images/05.jpg",
    offers: "Free Choco Chip topping"
  },
  {
    id: 6,
    name: "Taco Bell",
    cuisine: "Mexican Fast Food",
    rating: 4.0,
    time: "15-20 mins",
    avgCost: "₹200 for one",
    location: "Second Floor • Shop 5",
    image: "/images/01.jpg",
    offers: "Meal combos starting at ₹199"
  },
  {
    id: 7,
    name: "Sushi Zen",
    cuisine: "Japanese Sushi & Bowls",
    rating: 4.7,
    time: "25-30 mins",
    avgCost: "₹450 for one",
    location: "Second Floor • Shop 18",
    image: "/images/03.jpg",
    offers: "Flat 15% OFF"
  },
  {
    id: 8,
    name: "Tea House",
    cuisine: "Beverages & Matcha",
    rating: 4.3,
    time: "10 mins",
    avgCost: "₹100 for one",
    location: "First Floor • Kiosk 8",
    image: "/images/05.jpg",
    offers: "Free cookie with Matcha"
  }
];
