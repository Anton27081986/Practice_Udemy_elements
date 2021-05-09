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

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

document.addEventListener('DOMContentLoaded', () => {

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
              movieList = document.querySelector('.promo__interactive-list'),
              addForm = document.querySelector('form.add'),
              addInput = addForm.querySelector('.adding__input'),
              checkbox = addForm.querySelector('[type = "checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies,movieList);
        }

        event.target.reset();

    });


    const deleteAdv = (arr) => {
        arr.forEach(img => {
            img.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "ДРАММА";
        poster.style.backgroundImage = 'url(img/bg.jpg)';
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };
    
    function createMovieList (films,parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film,i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

       
        document.querySelectorAll('.delete').forEach((btn,i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films,parent);
            });
        });

    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies,movieList);

});





