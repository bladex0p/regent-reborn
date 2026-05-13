export type Tag = "spicy" | "veg" | "pick";
export interface Dish { name: string; price: string; desc?: string; tags?: Tag[] }
export interface Category { id: string; title: string; items: Dish[]; note?: string }

export const MENU: Category[] = [
  { id: "appetisers", title: "Appetisers", items: [
    { name: "Poppadum", price: "£4.50", desc: "Two crispy lentil wafers, served with kochmar salad, pickle & chutney tray." },
    { name: "Chicken Pakora", price: "£7.50", desc: "Tender chicken pieces fried in spiced gram flour batter.", tags: ["pick"] },
    { name: "Paneer Pakora", price: "£7.50", desc: "Tender paneer pieces fried in spiced gram flour batter.", tags: ["veg"] },
    { name: "Veg or Meat Samosa", price: "£5.00", desc: "Crispy pastry filled with spiced meat or vegetable stuffing." },
    { name: "Sweet Chilli King Prawns", price: "£9.99", desc: "Tangy, sweet & spicy prawns stir-fried with chilli peppers and spices.", tags: ["spicy", "pick"] },
    { name: "Onion Bhaji", price: "£6.50", desc: "Crispy onion fritters made with spiced gram flour batter.", tags: ["veg"] },
    { name: "Chilli Chicken", price: "£7.50", desc: "Spicy, tangy chicken stir-fried with chilli peppers and spices.", tags: ["spicy"] },
  ]},
  { id: "tandoor", title: "BBQ & Tandoor Grilled", note: "Served with chips or naan & salad", items: [
    { name: "Chicken Tikka", price: "£10.90", desc: "Boneless chicken pieces marinated in spices, grilled until juicy.", tags: ["pick"] },
    { name: "Lamb Kebab", price: "£12.90", desc: "Spiced minced lamb, skewered & grilled to perfection." },
    { name: "Large Mix Grill Platter", price: "£19.90", desc: "Lamb chop, ½ chicken tandoori, lamb kebab, chicken tikka.", tags: ["pick"] },
    { name: "Tandoori Half Chicken", price: "£11.50", desc: "Half chicken marinated in spices, grilled until juicy." },
  ]},
  { id: "pub", title: "Pub Classics", items: [
    { name: "Cumberland Sausages and Mash", price: "£14.50", desc: "Plump Cumberland sausages on creamy mash with rich onion gravy." },
    { name: "250g Rump Steak", price: "£25.00", desc: "21-day matured for extra flavour. Served with chips, grilled mushroom & tomatoes in a peppercorn sauce.", tags: ["pick"] },
  ]},
  { id: "mains", title: "Main Dish", note: "Served with rice, raita, kochmar salad & naan", items: [
    { name: "Delhi Butter Chicken", price: "£16.50", desc: "Creamy, mild spiced & signature aromatic curry.", tags: ["pick"] },
    { name: "Lamb Rogan Josh", price: "£17.90", desc: "Kashmiri dish featuring tender, slow-cooked lamb in a red gravy.", tags: ["spicy", "pick"] },
    { name: "Kadai Paneer Malabar", price: "£16.50", desc: "Paneer in a creamy & tangy South Indian curry.", tags: ["veg"] },
  ]},
  { id: "burgers", title: "Burgers & Wraps", note: "Served with chips & salad", items: [
    { name: "Cheeseburger 8oz", price: "£14.50", desc: "Texas-style 98% beef, bacon, cheddar & caramelised onion chutney." },
    { name: "Cajun Spicy Chicken Burger", price: "£14.50", desc: "Chorizo, mozzarella & guacamole.", tags: ["spicy"] },
    { name: "Vegan Burger", price: "£14.50", desc: "Beyond meat patty, grilled tomato, mint chutney.", tags: ["veg"] },
    { name: "Chicken Tikka Roll", price: "£10.99", desc: "Chicken wrapped in soft flatbread with fresh fillings." },
    { name: "Lamb Kebab Roll", price: "£12.99", desc: "Lamb kebabs wrapped in soft bread with fresh toppings." },
    { name: "Egg Shakshuka Curry", price: "£16.50", desc: "Poached eggs in a spiced North African tomato & pepper sauce." },
  ]},
  { id: "sides", title: "Sides & Extras", items: [
    { name: "Curry Sauce", price: "£2.00" },
    { name: "Onion Rings", price: "£3.90" },
    { name: "Thick Cut Chips", price: "£3.90" },
    { name: "Masala Chilli Chips", price: "£5.50", tags: ["spicy"] },
    { name: "Truffle Potato Crème Mash", price: "£4.50", tags: ["veg"] },
    { name: "Dal Tadka", price: "£6.50", desc: "Slow-cooked yellow lentils.", tags: ["veg"] },
    { name: "Bombay Aloo", price: "£7.50", desc: "Tender potatoes in a vibrant tangy Bombay masala.", tags: ["veg"] },
    { name: "Palak Aloo", price: "£7.50", desc: "Golden potatoes & earthy spinach in fragrant North Indian spices.", tags: ["veg"] },
    { name: "Palak Lamb", price: "£9.50", desc: "Tender lamb chunks slow-cooked in a thick aromatic spinach base." },
  ]},
  { id: "pizza", title: "Pizza", items: [
    { name: "Tandoori Chicken", price: "£10.50" },
    { name: "Margherita", price: "£9.50", tags: ["veg"] },
    { name: "Chorizo & Salami", price: "£11.50" },
  ]},
  { id: "rice", title: "Rice Dishes", items: [
    { name: "Plain Rice", price: "£2.50" },
    { name: "Jeera Rice", price: "£3.50" },
    { name: "Keema Rice", price: "£6.50" },
    { name: "Egg Fried Rice", price: "£4.50" },
    { name: "Chicken Biryani with Raita", price: "£8.50", tags: ["pick"] },
    { name: "Veg Biryani with Raita", price: "£7.50", tags: ["veg"] },
    { name: "Lamb Biryani with Raita", price: "£9.50", tags: ["pick"] },
  ]},
  { id: "naan", title: "Naan Breads", items: [
    { name: "Plain Naan", price: "£3.00" },
    { name: "Butter Naan", price: "£3.25" },
    { name: "Garlic Butter Naan", price: "£3.50" },
    { name: "Keema Naan", price: "£4.00" },
    { name: "Tandoori Roti", price: "£3.00" },
    { name: "Laccha Paratha", price: "£3.50" },
  ]},
  { id: "kids", title: "Kids Menu", note: "Served with chips & peas", items: [
    { name: "Cumberland Sausages", price: "£6.50" },
    { name: "Fish Fingers", price: "£6.50" },
    { name: "Chicken Nuggets", price: "£6.50" },
  ]},
  { id: "desserts", title: "Dessert", items: [
    { name: "Warm Chocolate Brownie", price: "£6.50", desc: "With vanilla ice cream." },
    { name: "Vanilla Cheesecake", price: "£6.50", desc: "With raspberry berry coulis." },
    { name: "Gulab Jamun", price: "£4.50", desc: "Two pieces, warm, with vanilla ice cream." },
    { name: "Ice Cream Scoop", price: "£2.50", desc: "Vanilla, chocolate or strawberry." },
  ]},
  { id: "breakfast", title: "Full English Breakfast", note: "Weekend Special", items: [
    { name: "Full English Breakfast", price: "£10.99", desc: "Crispy bacon, pork sausages, fried eggs, hashbrown, grilled tomato, baked beans, mushrooms & buttered toast. Served with tea or coffee.", tags: ["pick"] },
  ]},
];
