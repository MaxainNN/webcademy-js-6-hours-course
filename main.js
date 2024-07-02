/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • JavaScript base course for a begginers • • • • • • •
• • • • • • • • • • • • with practice • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Enviroment setup ===============
/*
- Setup IDE
- Setup plugin liveServer
- Theme - Palenight
- Create project
*/

// =================== 1. Connect ===================
/*
- index.html
- file main.js
- tag <script src></script>
- run in liveServer
- command console.log for output information to the brauser's console
- comments
*/

// DOM training
// Give first element with tag 'h1' property 'red'
// document.querySelector('h1').classList.add('red');

// Find all tags 'h2' and store it to the variable
// const headingsH2 = document.querySelectorAll('h2');

// Use loop for give every item with tag 'h2' property 'red'
// for (let item of headingsH2) {
//     item.classList.add('red-text')
// }

// Find all tags 'h1' and store in to the variable
// const headingsH1 = document.querySelectorAll('h1');

// User loop for give every item with tag 'h1' property 'blue'
// for (let heading of headingsH1) {
//     heading.classList.add('blue');
// }

// tag 'p'
// const paragraphs = document.querySelectorAll('p');

// for (let p of paragraphs) {
//     p.classList.add('green-text');
// }

// DOM attributes

// const img = document.querySelector('#logo');
// const srcValue = img.getAttribute('src');
// console.log(srcValue);
// img.setAttribute('src', './img/php.png')
// img.setAttribute('width', '200')
// img.src = './img/js.png'

// const button = document.querySelector('#button');
// button.setAttribute('value', 'Send to manager')
// button.value = 'Text'

// DOM events

// const button = document.querySelector('#button');
// const img = document.querySelector('#logo');
// button.value = 'Delete'

// button.addEventListener('click', function () {
//     console.log('Click');
//     img.remove();
// })

// button.onclick = function () {
//     img.remove();
//     console.log('Click');
// }

// const inputText = document.querySelector('#input-text');
// const textBlock = document.querySelector('#text-block');

// inputText.addEventListener('input', function () {
//     // console.log('Input!');
//     // console.log(inputText.value);
//     textBlock.innerText = inputText.value;
// })

// function inputHandler() {
//     // console.log('Input!');
//     // console.log(inputText.value);
// }

// Event

// const list = document.querySelector('#list');

// list.addEventListener('click', function (event) {
//     console.log(this);
//     console.log(event);
//     console.log(event.target)
// })

// DOM elements manipulation

// Find div element and store it to variable
// const container = document.querySelector('#elementsContainer');

// Create new element that has tag 'h1' and store it to variable also
// const newHeader = document.createElement('h1');
// Put content to new element as text representation
// newHeader.textContent = "New Title"
// Put the new element to the div element
// container.append(newHeader);

// Find Header element and store it to variable
// const mainHeader = document.querySelector('header');
// Use 'cloneNode' function with parameter - 'true' (That copy content also) and store it to variable
// const headerCopy = mainHeader.cloneNode(true);
// Put copyed element to the div element
// container.append(headerCopy);

// const htmlExample = '<h2>Another one title</h2>';
// container.insertAdjacentHTML('beforeend', htmlExample);

// const todoList = document.querySelector('#todo-list');
// const todoForm = document.querySelector('#todo-form');
// const todoInput = document.querySelector('#todo-input');

// todoForm.addEventListener('submit', formHandler);

// function formHandler(event) {
//     // Overrides default behavior
//     // In this case page doesn't reloading automatically
//     event.preventDefault();
//     // console.log('Submit!');
//     // Get text from imput
//     const taskText = todoInput.value;
//     // console.log(taskText);
//     // Create tag 'li' with a markup
//     // const li = `<li>${taskText}</li>`;
//     // console.log(li);
//     // Add markup on the page
//     // todoList.insertAdjacentHTML('beforeend', li);

//     // Advanced method of handle this task: (Use 'createElemement' method)
//     const newTask = document.createElement('li');
//     newTask.innerText = taskText;
//     todoList.append(newTask);

//     // Create button 'Delete'
//     const deleteBtn = document.createElement('button');
//     deleteBtn.setAttribute('role', 'button');
//     deleteBtn.innerText = 'Delete';
//     deleteBtn.style['margin-left'] = '15px';
//     newTask.append(deleteBtn);

//     // Create event when click
//     deleteBtn.addEventListener('click', function () {
//         this.closest('li').remove();
//     });

//     // Clear input field
//     todoInput.value = '';
//     // Focus on the input field
//     todoInput.focus();
// }

// Create counter to 1000 and input this to the console
// const intervalID = setInterval(function () {
//     console.log('Fired');
// }, 1000)

// Clear console
// clearInterval(intervalID);

// Create some function that will be executed in 5 sec

// const timeoutID = setTimeout(function () {
//     console.log('setTimeout Fired!');
// }, 5000);

// Clear console
// clearInterval(timeoutID);

// Stopwatch

// Find element with count representation and store it to the const
// const counterElement = document.querySelector('#counter');
// Declate variables counter and timer for future manupulations
// let counter = 0;
// let timerID;

// Start
// Find element - button with id - start
// const btnStart = document.querySelector('#start');
// Add event to the button : if button was pressed
// Variables's value 'timerID' increment by 1
// and output those value to the count representation
// btnStart.onclick = function () {
    // console.log('btnStart');
//     timerID = setInterval(function () {
//         counter++;
//         counterElement.innerText = counter;
//     }, 1000);
// };

// Pause
// Find element with id - 'stop'
// const btnPause = document.querySelector('#pause');
// Also add event to the button 'stop'
// And if this button was pressed 
// count will be stop
// btnPause.onclick = function () {
//     clearInterval(timerID);
// }

// Reset
// Find element with id - 'reset'
// const btnReset = document.querySelector('#reset');
// Define count value to 0 and output this value
// to the count representation
// btnReset.onclick = function () {
//     counter = 0;
//     counterElement.innerText = counter;
//     clearInterval(timerID);
// }

// setTimeout(function () {
//     console.log('Print after 2 sec');
//     setTimeout(function () {
//         console.log('Print after 1.5 sec');
//     }, 1500);
// }, 2000);

// Example without delay

// function checkRooms() {
//     setTimeout(function () {
//         console.log('Check rooms in hotel');
//         const avaliableRooms = true;
//         return avaliableRooms;
//     }, 1000);
    // console.log('Check rooms in hotel');
    // Block of code that send request to the hotel
    // const avaliableRooms = true;
    // return avaliableRooms;
// }

// if (checkRooms) {
//     console.log('That are some free rooms!');
// 	console.log('Go to the vacation! 🌴 :)');
// } else {
//     console.log('That are not free rooms!');
// 	console.log('Vacation is canceled 😢 :(');
// }

// function checkRooms(sucess, failed) {
//     setTimeout(function () {
//         console.log('Check rooms');
//         let avaliableRooms = true;

//         if (avaliableRooms) {
//             sucess('We have some free rooms.');
//         } else {
//             failed('We do not have free rooms.');
//         }
//     }, 500);
// };

// checkRooms(sumbitVacation, cancelVacation);

// function cancelVacation(message) {
// 	console.log('---- cancelVacation ----');
// 	console.log('Answer:', message);
// 	console.log('Vacation delayed 😢 :(');
// }

// function sumbitVacation(message) {
// 	console.log('---- sumbitVacation ----');
// 	console.log('Answer:', message);
// 	console.log('We are going to vacation! 🌴 :)');
// }

// function checkTickets(message, sucess, failed) {
//     setTimeout(() => {
//         console.log('Ticket function');
//         console.log('Previous step answer:', message);    

//         console.log('Check tickets...');
// 		// ---- some code that send request to the company ---
// 		const availableTickets = true;

// 		if (availableTickets) {
// 			let message = 'We have tickets';
// 			success(message);
// 		} else {
// 			let message = 'We do not have tickets';
// 			failed(message);
// 		}
//     }, 1000);
// }

// Final code with all functions

// checkRooms(
// 	function (messageFromCheckRooms) {
// 		checkTickets(
// 			messageFromCheckRooms,
// 			function () {
// 				sumbitVacation(messageFromCheckRooms);
// 			},
// 			function () {
// 				cancelVacation(messageFromCheckRooms);
// 			}
// 		);
// 	},
// 	function (messageFromCheckRooms) {
// 		cancelVacation(messageFromCheckRooms);
// 	}
// );

// Promise

// If we want to wait answer from server
// and use callback

// function serverRequest() {
//     const res = 'sucess';
//     if ((res = 'success')) {
// 		(function () {
// 			console.log('DONE');
// 		})();
// 	} else {
// 		(function () {
// 			console.log('FAIL');
// 		})();
// 	}
// }

// const myFirstPromise = new Promise((resolve, reject) => {
//     resolve(someValue);
//     reject('Failure session!');
// });

// myFirstPromise.then(function() {
//     console.log('Hello from then');
// });

// const promise = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		res = 'success';
// 		if (res == 'success') {
// 			resolve('DONE!');
// 		} else {
// 			reject('FAIL!');
// 		}
// 	}, 1000);
// });

// promise.then(function(data) {
//     console.log('then');
//     console.log(data);

// }).catch(function() {
//     console.log('Catch');
// });


// Final function with promise
// Could be function ?
// const checkRooms = new Promise(function(resolve, reject) {
//     setTimeout(function () {
//         console.log('Check rooms in the hotel...');
//         let avaliableRooms = true;
//         if (avaliableRooms) {
//             resolve('There some free rooms! )');
//         } else {
//             reject('There are not free rooms! (');
//         }
//     }, 1500);
// }).then(function(data) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log('Check tickets....');
//             console.log('Answer on previous step: ', data)
//             const availableTickets = true;
//             if (availableTickets) {
//                 resolve('Sucess');
//             } else {
//                 let message = 'Fail';
//                 throw new Error(message);
//             }
//         }, 1000);
//     });
// }).then(function(data) {
//     console.log('---- then 2. sumbitVacation ----');
// 	console.log('Answer on previous step:', data);
// 	console.log('Going to vacation! 🌴 :)');
// }).catch(function(data) {
//     console.log('---- catch ----');
// 	console.log('Answer on previous step:', data);
// 	console.log('Vacation is canceled 😢 :(');
// })


function promiseFunction() {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			res = 'success123';
			if (res == 'success') {
				resolve('DONE!');
			} else {
				reject('FAIL!');
			}
		}, 500);
	});
}

async function startPromise() {
    try {
        const result = await promiseFunction();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

startPromise();

// Real example
// From chat gpt through

// function fetchData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Data fetched successfully');
//       }, 2000);
//     });
//   }

// fetchData()
//   .then(data => {
//     document.getElementById('container').innerHTML = data;
//   })
//   .catch(error => {
//     document.getElementById('container').innerHTML = 'Error fetching data';
// });