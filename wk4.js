let names = [
  "Jam",
  "Raj",
  "Sheldon",
  "Penny",
  "Soumik ",
  "Jack",
  "Jolly",
  "Jeckob",
  "jadeja",
  "Baans",
];
for (let i = 0; i < names.length; i++) {
  if (names[i].charAt(0) === "j" || names[i].charAt(0) === "J") {
    console.log("GoodBye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}
