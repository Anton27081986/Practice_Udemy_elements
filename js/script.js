/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// const adv = document.querySelectorAll('.promo__adv img'),
//       main = document.querySelector('.promo'),
//       genre = document.querySelector('.promo__genre'),
//       bg = document.querySelector('.promo__bg'),
//       movieList = document.querySelector('.promo__interactive-list');

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// // 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// // Отсортировать их по алфавиту 

// // movieList.forEach(item => {
// //     item.remove();
// // });

// movieList.innerHTML = "";

// // let arrFilms = movieDB.movies;

// // arrFilms.sort();
// // console.log(arrFilms);

// movieDB.movies.sort();


// movieDB.movies.forEach((film, i) => {
    
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });


// // for (let i = 0; i < arrFilms.length; i++) {
// //     console.log(arrFilms[i]);
// // }
// // interactiveItem.forEach(item => {
// //     item.replaceWith(`${i + 1}arrFilms`);
// // });



// // 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// // reklama.remove();
// // main.beforeend('reclama');
// adv.forEach(img => {
//     img.remove();
// });

// // 2) Изменить жанр фильма, поменять "комедия" на "драма"

// genre.textContent = 'ДРАММА';

// // 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// // Реализовать только при помощи JS

// // bg.style.cssText = 'background-image: url(../img/bg.jpg); position: center; repeat: no-repeat';
// bg.style.backgroundImage = 'url("img/bg.jpg")';










/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(img => {
    img.remove();
});

genre.textContent = "ДРАММА";

poster.style.backgroundImage = 'url(/img/bg.jpg)';

movieDB.movies.sort();

movieList.innerHTML = "";

movieDB.movies.forEach((film,i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});




