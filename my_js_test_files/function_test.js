
// Javascript writes code two times and in the code I can use function and then initialize it
// function declaration
sayHi();

function sayHi() {
    console.log('Hello from function.');
}

console.log(nameOfUser);
let nameOfUser = 'Bob';

// function expression
const sayHi = function () {
    console.log('Hello from const variable!');
}
sayHi();