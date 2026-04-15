// // DOM: Document Object Model
// // The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing developers to manipulate the content, structure, and style of web pages dynamically using JavaScript.

// // document.getElementById example
// let element = document.getElementById("myElement"); // Output: The element with the ID "myElement"
// console.log(element); // Output: The element with the ID "myElement"

// // document.getElementsByClassName example
// let elementsByClass = document.getElementsByClassName("myClass"); // Output: A live HTMLCollection of elements with the class "myClass"
// console.log(elementsByClass); // Output: A live HTMLCollection of elements with the class "myClass"

// // document.querySelector example
// let firstParagraph = document.querySelector("p"); // Output: The first <p> element in the document
// console.log(firstParagraph); // Output: The first <p> element in the document

// // document.querySelectorAll example
// let allParagraphs = document.querySelectorAll("p"); // Output: A NodeList of all <p> elements in the document
// console.log(allParagraphs); // Output: A NodeList of all <p> elements in the document

// // Creating a new element
// let div= document.createElement("div"); // Output: A new <div> element
// div.textContent = "This is a new div."; // Output: The text content of the new <div> is set to "This is a new div."
// console.log(div); // Output: A new <div> element with the text "This is a new div."
// div.innerHTML = "<p>This is a paragraph inside the new div.</p>"; // Output: The inner HTML of the new <div> is set to a new <p> element
// console.log(div); // Output: The new <div> element with the inner HTML set to a new <p> element
// div.innerText = "This is a new text inside the div."; // Output: The inner text of the new <div> is set to "This is a new text inside the div."
// console.log(div); // Output: The new <div> element with the inner text set to "This is a new text inside the div."
// document.body.append(div); // Output: The new <div> element is added to the end of the body 

// // Creating and appending multiple elements
// let main=document.createElement("main"); // Output: A new <main> element
// let article=document.createElement("article"); // Output: A new <article> element
// let section=document.createElement("section"); // Output: A new <section> element
// main.append(article);
// main.append(section);
// document.body.append(main); // Output: The new <main> element with the <article> and <section> elements is added to the end of the body

// // appendChild - This method is used to add a child node to the end of the list of children of a specified parent node. It returns the appended child node.
// main.appendChild(section)


// // CSS Manipulation
// let p= document.createElement("p"); // Output: A new <p> element
// p.innerText = "This is a styled paragraph."; // Output: The inner text of the new <p> is set to "This is a styled paragraph."
// p.style.color = "blue"; // Output: The text color of the new <p> is set to blue
// p.style.fontSize = "20px"; // Output: The font size of the new <p> is set to 20 pixels
// p.style.backgroundColor = "lightgray"; // Output: The background color of the new <p> is set to light gray
// document.body.append(p); // Output: The new <p> element with the specified styles is added to the end of the body   


// // ClassList
// let container = document.querySelector("#container"); // Output: The first element with the ID "container"
// container.classList.add("active"); // Output: The class "active" is added to the element with the ID "container"
// container.classList.remove("active"); // Output: The class "active" is removed from the element with the ID "container"  
// container.classList.toggle("active"); // Output: The class "active" is toggled on the element with the ID "container"
// console.log(container.classList); // Output: The DOMTokenList of classes for the element with the ID "container"


let btn=document.getElementById("myButton"); // Output: The element with the ID "myButton"
btn.addEventListener("click",()=>{ //addeventListener accepts three parameters: the event type (in this case, "click"), a callback function to be executed when the event occurs, and an optional boolean parameter that specifies whether the event should be captured or bubbled. In this case, the callback function is an arrow function that toggles the "dark-mode" class on the body element and updates the button text accordingly.
    document.body.classList.toggle("dark-mode"); // Output: The class "dark-mode" is toggled on the body element when the button is clicked
    (document.body.classList.contains("dark-mode"))? btn.innerText="Light":btn.innerText="Dark";
})

// contains
console.log(document.body.classList.contains("dark-mode")); // Output: true if the body element has the class "dark-mode", otherwise false
(document.body.classList.contains("dark-mode"))? btn.innerText="Light":btn.innerText="Dark"; // Output: The button text is set to "Light" if the body element has the class "dark-mode", otherwise it is set to "Dark"