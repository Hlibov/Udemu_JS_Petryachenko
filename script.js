/* Задание_2 на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 1; i <= 2; i++) {
  const nameFilm = prompt('Один из последних просмотренных фильмов?', ''),
    movieRating = prompt('На сколько оцените его?', '');

  if (nameFilm && movieRating && (nameFilm.length <= 50)) {
    personalMovieDB.movies[nameFilm] = movieRating;
  } else {
    i--;
  }
}

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

console.log(personalMovieDB);