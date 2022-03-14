import { atom } from "recoil";

// En unik key som är för vår projectsState.
// Ändra "id:" så du får ett specifikt objekt/projekt.

/* Produkterna som ska laddas in lägger jag in i en eget objekt med.
 Kolla bland annat på Selectors. Där står det hur du laddar in saker från lista.
Id 4 är ett exempel på hur du skapar ett objekt ID.*/

export const projectsState = atom({
  key: "projectsState",
  default: [
    {
      id: 1,
      title: "Kattstallet",
      description: "En kort beskrivning",
      image:
        "https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/138082992_3722170957830884_2180409321891704731_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=3gCszeGNasQAX-FhYK6&_nc_ht=scontent-hel3-1.xx&oh=00_AT9DNbgtcYXGWpNqLfGrDw8hPhSTwY3OX6ouSDcBq38HvQ&oe=6252FAD5",
    },
    {
      id: 2,
      title: "Donalds Nuggets",
      description: "En kort beskrivning",
      image:
        "https://www.mcdonalds.com/is/image/content/dam/nordic/nfl/nutrition/Items/Hero/mcd-sv-9chickenmcnuggets.jpg?$Product_Desktop$",
    },
    {
      id: 3,
      title: "Günters Korvmoj",
      description: "En kort beskrivning",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/62/G%C3%BCnters_korv%2C_Karlbergsv%C3%A4gen.JPG",
    },
    {
      id: 4,
      title: "Douchebag Red Backpack",
      description:
        "Our best-sale backpack on the market. Easy to use and contain a lot of awesome stuff!",
      image:
        "https://cdn.shopify.com/s/files/1/0549/9499/3364/products/TheRamverk21LBackpack-24_cc590b88-8202-4182-be42-8043be4e43e0_540x.png?v=1646240513",
      sizes: ["small", "medium", "large", "x-large"],
      price: 1799,
      currency: "SEK",
      stock: 17,
    },
  ],
});
