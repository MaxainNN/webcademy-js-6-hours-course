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