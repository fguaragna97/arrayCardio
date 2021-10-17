const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

const people = [
  "Beck, Carl",
  "Mark, Mick",
  "Juan, Henry",
  "Juanito, Gas",
  "Francisco, Begin",
  "Franco, Hilarie",
  "Gustavo, David",
  "Ana, Yogi",
  "Maria, Steve",
  "Markinhigo, Erin",
  "Ronaldo, Blake",
  "Lionel, Elk",
  "Andres, Augustine",
  "Messi, Birrel",
  "Cristiano, Ric",
  "Ingmar, Yod",
  "Berio, Yoda",
  "Lucario, Yoid",
  "Luciano, Amigo",
  "Bevel, Reinaldo",
  "Biondo, Rueda",
  "Tony, Ya",
  "Becker, Nose",
  "Blair, Que",
  "Chuck, Poner",
  "Bass, Ayuda",
  "Sandra, Estoy",
  "Leana, Aprendiendo",
  "Ben, A",
  "Samuel, Programar",
  "Black, Enserio",
  "Berra, Voy",
  "White, Bien",
  "Grey, Creo",
];

//Array filter
// Filter the list of inventors for those who were born in the 1500

const results = inventors.filter((obj) => obj.year > 1500 && obj.year < 1600);

// Array map
// give us an array of the inventory first and last names
const results2 = inventors.map(function (obj) {
  let element = obj.first + " " + obj.last;
  return element;
});

console.log(results2);

//Array.sort
// sort the inventors by birthdate, oldest to youngest

//Array Reduce
// how many years did all the inventors lived?

// Sort the inventors by years lived?
