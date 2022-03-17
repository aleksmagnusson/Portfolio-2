import { selector } from "recoil";
import { car, cartState } from "./atom";

// Följer instruktionerna från: https://recoiljs.org/docs/basic-tutorial/selectors

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    // skapar kundvagn
    const cart = get(cartState);

    // Alla produkter i shopping list
    const totalItems = cart.reduce((acc, cur) => acc + cur.amount, 0);

    // Uppdatering av totalpris
    const totalPrice = cart.reduce(
      (acc, cur) => acc + cur.product.price * cur.amount,
      0
    );
    // Returnera alla produkter och totala priset.
    return { totalItems, totalPrice };
  },
});
