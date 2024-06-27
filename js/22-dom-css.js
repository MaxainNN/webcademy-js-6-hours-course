// ================================  Работа с CSS классами ===============================

/*
element.classList.add()

.add()
.remove()
.toggle()
.contains()

*/

document.querySelector('h2');

const heading = document.querySelector('h2');
console.log(heading);

heading.classList.add('red-text');
heading.classList.remove('red-text');

heading.classList.toggle('green-text');
heading.classList.toggle('green');