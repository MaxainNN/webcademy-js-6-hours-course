// ================= 10. Объекты обход циклом for in (не путать с for of) ================
// В отличие от for ... of  - for .. in может обходить неитерируемые объекты и возвращает ключи.

for (let key in person) {
	console.log(key, ':', person[key]);
}

// Example for loop with object

const person = {
	userName: 'Mira',
	age: 22,
	sayBye: function (yourName) {
		console.log(`Hello ${yourName}! And Bye! My name is ${this.userName}`);
	}
};

for (let key in person) {
	console.log(key);
	console.log(key, ":", person[key]);
}