const cards = [
  {
    name: "Card 1",
    account: "1111111111111111"
  },
  {
    name: "Card 2",
    account: "2222222222222222"
  },
  {
    name: "Card 3",
    account: "3333333333333333"
  }
];

export default () => () =>
  new Promise(resolve => {
    setTimeout(() => resolve(cards), 5000);
  });
