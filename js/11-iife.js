// =================== 5.3 Самовызывающаяся функция ===================

// Immediately Invoked Function Experession
// JS function that are executed immediately after they are defined
/* (function(){
	console.log('Annonymous IIFE');
})() */
(function sayHi() {
	console.log('Привет, дорогой пользователь!');
})()(function summ(a, b) {
	console.log(a + b);
})(10, 15);
