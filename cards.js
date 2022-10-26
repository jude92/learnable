let suites = ["spade", "diamond", "club", "heart"];
let values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
];
let deck = [];
for (let i = 0; i < suites.length; i++) {
  for (let j = 0; j < values.length; j++) {
    let cards = { value: values[j], suite: suites[1] };
    deck.push(cards);
  }
}
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}
console.log("the first 5 decks of cards are:");
for (let i = 0; i < 5; i++) {
  console.log(`${deck[i].value} of ${deck[i].suite}`);
}
