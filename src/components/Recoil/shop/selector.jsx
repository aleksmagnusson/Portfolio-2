import { selector } from "recoil";
import { shopState } from "./atom";

// Följer instruktionerna från: https://recoiljs.org/docs/basic-tutorial/selectors

export const getShopTotal = selector({
  key: "getShopTotal",
  get: ({ get }) => {
    // skapar kundvagn
    const shop = get(shopState);

    // Alla produkter i shopping list
    const totalItems = shop.reduce((acc, cur) => acc + cur.amount, 0);

    // Uppdatering av totalpris
    const totalPrice = shop.reduce(
      (acc, cur) => acc + cur.product.price * cur.amount,
      0
    );
    // Returnera alla produkter och totala priset.
    return { totalItems, totalPrice };
  },
});
