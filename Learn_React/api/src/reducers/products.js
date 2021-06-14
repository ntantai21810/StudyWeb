let initState = [
  {
    id: 1,
    name: "Iphone 7",
    price: 500,
    status: true,
  },
  {
    id: 2,
    name: "Iphone 7 plus",
    price: 600,
    status: false,
  },
  {
    id: 3,
    name: "Iphone 7 +",
    price: 200,
    status: true,
  },
];

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};

export default reducer;
