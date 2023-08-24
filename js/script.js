// const obj = {
//   name: "john",
//   age: 25,
//   isMarried: false,
// };

// console.log(obj["age"]);

// const answer = prompt("Вам есть 39?", "18");
// console.log(typeof answer);
// let answer = [];
// console.log(typeof answer);

const nuberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");
console.log(nuberOfFilms);

const personalMovieDB = {
  count: nuberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: Boolean,
};

let movies = {};
let film;
let rating;
for (var i = 0; i < 2; i++) {
  film = prompt("Один из последний просмотренных фильмов?", "");
  rating = prompt("На сколько оцените его?", "");

  movies[film] = rating;
}

console.log(movies);
