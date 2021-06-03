let initState = [
  {
    id: 1,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg",
    description: "This product is created by Apple",
    name: "Iphone 7 plus",
    price: 500,
    rating: 4,
    inventory: 10,
  },
  {
    id: 1,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/220522/samsung-galaxy-note-20-ultra-vangdong-600x600-600x600.jpg",
    description: "This product is created by Samsung",
    name: "SS Note 20",
    price: 400,
    rating: 5,
    inventory: 10,
  },
  {
    id: 1,
    image:
      "https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/x/i/xiaomi-redmi-note-4-1_3.jpg",
    description: "This product is created by Xiaomi",
    name: "Xiaomi Redmi Note 4",
    price: 200,
    rating: 5,
    inventory: 20,
  },
];

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default reducer;
