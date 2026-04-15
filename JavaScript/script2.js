// synchronous function
function greet() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!

// asynchronous function using setTimeout
function greetAsync() {
    setTimeout(() => {
        console.log("Hello, World! (from async function)");
    }, 2000);
}
greetAsync(); // Output after 2 seconds: Hello, World! (from async function)

// async & await example
async function fetchData() {
    let response = await fetch('https://fakestoreapi.com/products');
    console.log(response); // Output: Response object
    let data = await response.json(); // Output: Array of products from the API
    console.log(data);

    console.log(data[3]);
    console.log(data[3].title);
    console.log(data[3].price);
}

fetchData(); // Output: Array of products from the API


