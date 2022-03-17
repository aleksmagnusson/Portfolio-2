import { atom } from "recoil";

// Hämtar in produkt till "cartState", det tillstånd som varukorgen har.
// Hämtar ett objekt från hela produktlistan i "./components/recoil/products/atom.js"

export const cartState = atom({
  key: "cartState",
  default: [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
      // x antal.
      amount: 1,
    },
  ],
});
