import { shopState } from "../components/Recoil/shop/atom";
import { useRecoilState } from "recoil";

export default function useShop(product) {
  // Använder mig av shopItems/setShopItems där all information på produkten/erna finns.
  const [shopItems, setShopItems] = useRecoilState(shopState);

  function addItem(specificProduct) {
    const inShop = shopItems.find(
      (product) => product.id === specificProduct.id
    );

    // Sätter en if-sats om varan finns i shoppen eller inte.
    if (inShop) {
      setShopItems.map(
        shopItems.map((product) =>
          product.id === specificProduct.id
            ? { ...inShop, car: inShop.car + 1 }
            : product
        )
      );
    } else {
      setShopItems([...cartItems, { ...specificProduct, car: 1 }]);
    }
  }

  return { addItem };
}
