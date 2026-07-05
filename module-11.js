// select element by ID
let title = document.getElementById('title');
console.log(title); // Output: <h1 id="title">Hello World</h1>

// select element by class name
let items = document.getElementsByClassName('item');
console.log(items); // Output: HTMLCollection of elements with class "item"

// select element by tag name
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // Output: HTMLCollection of <p> elements

// query selector
let firstItem = document.querySelector('.item');
console.log(firstItem); // Output: <li class="item">Item 1</li>

// query selector all
let allItems = document.querySelectorAll('.item');
console.log(allItems); // Output: NodeList of elements with class "item"

// change text content
title.textContent = "Hello JavaScript";
console.log(title.textContent); // Output: Hello JavaScript
title.innerHTML = "<span>Hello JavaScript</span>";
console.log(title.innerHTML); // Output: <span>Hello JavaScript</span>

// changing styles
title.style.color = "blue";
title.style.fontSize = "24px";
title.style.backgroundColor = "yellow";
title.style.padding = "10px";
title.style.border = "2px solid black";
title.style.borderRadius = "5px";
title.style.textAlign = "center";

// changing attributes
let photo = document.getElementById('photo');
photo.src = "new-image.jpg";
photo.alt = "New Image";

photo.setAttribute('title', 'This is a new image');
photo.removeAttribute('alt');
console.log(photo.getAttribute('title')); // Output: This is a new image

// creating new elements
let newItem = document.createElement('li');
newItem.textContent = "Item 4";
newItem.className = "item";
let list = document.getElementById('list');
list.appendChild(newItem);

// removing elements
let itemToRemove = document.querySelector('.item');
list.removeChild(itemToRemove); // Removes the first item with class "item" from the list

let oldParagraph = document.getElementsByTagName('p')[0];
oldParagraph.remove(); // Removes the first <p> element from the DOM

// appending elements
let newParagraph = document.createElement('p');
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph); // Appends the new paragraph to the body of the document

// DOM navigation
let parent = document.getElementById('list');
console.log(parent.children); // Output: HTMLCollection of <li> elements within the list
console.log(parent.firstElementChild); // Output: <li class="item">Item 1</li>
console.log(parent.lastElementChild); // Output: <li class="item">Item 4</li>
console.log(parent.parentElement); // Output: <div id="container">...</div>

// class manipulation
let firstItemClass = document.querySelector('.item');
firstItemClass.classList.add('highlight');

firstItemClass.classList.remove('item');

firstItemClass.classList.toggle('highlight'); // Toggles the 'highlight' class on the first item

firstItemClass.classList.replace('highlight', 'active'); // Replaces 'highlight' class with 'active' class

firstItemClass.classList.contains('active'); // Returns true if 'active' class is present, false otherwise

firstItemClass.classList.item(0); // Returns the first class name of the element
firstItemClass.classList.length; // Returns the number of classes on the element
firstItemClass.classList.value; // Returns a string of all class names on the element
firstItemClass.classList.toString(); // Returns a string representation of the class list