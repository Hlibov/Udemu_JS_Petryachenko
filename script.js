/* Задание_3 на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');;
  }
}

writeYourGenres();

function rememberMyFilms() {
  for (let i = 1; i <= 2; i++) {
    const nameFilm = prompt('Один из последних просмотренных фильмов?', ''),
      movieRating = prompt('На сколько оцените его?', '');

    if (nameFilm && movieRating && (nameFilm.length <= 50)) {
      personalMovieDB.movies[nameFilm] = movieRating;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  switch (true) {
    case personalMovieDB.count < 10:
      alert('Просмотрено довольно мало фильмов');
      break;

    case personalMovieDB.count > 10 && personalMovieDB.count < 30:
      alert('Вы классический зритель');
      break;

    case personalMovieDB.count > 30:
      alert('Вы киноман');
      break;

    default:
      alert('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(flag) {
  if (!flag) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);