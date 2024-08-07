// =================== 2. Переменные ===================

let userName = 'Марк';
console.log(userName);
// console.log(5);
// console.log("Hello from js");

// =================== 2.1 Типы переменных ===================

/*
Новый стандарт ES6:
let - переменная
const - константа

Старый стандарт ES5:
var - переменная
*/

/* let - может менять значение во время работы программы */
// let userName = 'Марк';
// userName = 'Егор';

/* const - не может менять значение */
// const yearOfBirth = 1990;
// yearOfBirth = 1995; // Ошибка!!

// const p = 3.14;

/*
var - старый формат объявления переменной
в отличие от let и const имеет функциональную область видимости, а не блочную
будет рассмотрен в отдельном уроке по нюансам работы JS
не рекомендуется к использованию
Может менять значение на протяжении работы программы
*/
// var city = 'Moscow';
// city = 'Minsk';
// city = 'Kiev';

/*
! По умолчанию используем const,
когда явно понятно что переменная будет менять свое значение, тогда let
*/