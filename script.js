/* Задание_4 на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
  count: null,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (this.count === '' || this.count === null || isNaN(this.count)) {
      this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
      if (!this.genres[i]) {
        i--;
      }
    }

    this.genres.forEach((el, j) => {
      console.log(`Любимый жанр #${j + 1} - это ${el}`);
    });
  },
  rememberMyFilms: function () {
    for (let i = 1; i <= 2; i++) {
      const nameFilm = prompt('Один из последних просмотренных фильмов?', ''),
        movieRating = prompt('На сколько оцените его?', '');

      if (nameFilm && movieRating && (nameFilm.length <= 50)) {
        this.movies[nameFilm] = movieRating;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    switch (true) {
      case this.count <= 10:
        alert('Просмотрено довольно мало фильмов');
        break;

      case this.count > 10 && this.count < 30:
        alert('Вы классический зритель');
        break;

      case this.count > 30:
        alert('Вы киноман');
        break;

      default:
        alert('Произошла ошибка');
    }
  },
  showMyDB: function (flag) {
    if (!flag) {
      console.log(this);
    }
    this.toggleVisibleMyDB();
  },
  toggleVisibleMyDB: function () {
    if (this.privat) {
      this.privat = false;
    } else {
      this.privat = true;
    }
    console.log(this.privat);
  }
};

personalMovieDB.start();
personalMovieDB.writeYourGenres();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);