// ================================ 9. Методы в объектах ===============================
// Метод - это функция которая является свойством объекта. Функция принадллежащая объекту.

const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
	sayHi: function () {
		console.log('Привет!');
	},
};

person.sayHi();

// Параметры в методе, также как и в функции

person.sayHi = function (yourName) {
	console.log(`Привет, ${yourName}!`);
};

person.sayHi();

// Ключевое слово this

const person = {
	userName: 'Марк',
	age: 30,
	isMarried: false,
	sayHi: function () {
		console.log(`Привет, ${yourName}! Меня зовут ${userName}.`);
	},
};

person.sayHi();

// Example with 'this' keyword

const person = {
	userName: 'Max',
	age: 23,
	isDeveloper: false,
	writeTestCase: function (name) {
		console.log(`Hello, ${name}! My name is ${this.userName} and I have to write another testcase.((`);
	}
}

person.writeTestCase('Alex')