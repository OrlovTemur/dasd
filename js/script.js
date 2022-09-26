'use strict';
let movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let pups = 1
// первое
let promo__adv = document.querySelectorAll('.promo__adv img')
for (let item of promo__adv) {
    item.remove()
}
// второе
let promo__genre = document.querySelector('.promo__genre')
promo__genre = promo__genre.innerHTML = 'драма'
// третье
let promo__bg = document.querySelector('.promo__bg')
promo__bg.style.background = 'url(./img/bg.jpg)'
// четвертое
movieDB.movies.sort()
for (let item of movieDB.movies) {

    let delet = document.createElement('div')
    let film = document.createElement('li')
    let list = document.querySelector('.promo__interactive-list')

    film.classList.add('promo__interactive-item')
    delet.classList.add('delete')

    film.append(delet)
    list.append(film)

    var i = 1;
    film.innerHTML = pups++ + ". " + item
    // movieDB.movies.reduce((a,b)=> a + "\n"+ i++ +". "+b,"") 
}
// пятое 





/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */




