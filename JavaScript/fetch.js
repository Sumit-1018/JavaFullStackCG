const fetchButton = document.getElementById("fetchBtn");
const productsContainer = document.getElementById("products");
const statusText = document.getElementById("status");

function setStatus(message) {
	statusText.textContent = message;
}

function renderProducts(products) {
	productsContainer.innerHTML = "";

	if (!products.length) {
		productsContainer.innerHTML = '<div class="empty-state">No products found.</div>';
		return;
	}

	const cards = products
		.map((product) => `
			<article class="product-card">
				<img class="product-image" src="${product.image}" alt="${product.title}">
				<h2 class="product-title">${product.title}</h2>
				<p class="product-price">$${product.price.toFixed(2)}</p>
				<p class="product-category">${product.category}</p>
			</article>
		`)
		.join("");

	productsContainer.innerHTML = cards;
}

async function fetchProducts() {
	fetchButton.disabled = true;
	setStatus("Loading products...");
	productsContainer.innerHTML = "";

	try {
		const response = await fetch("https://fakestoreapi.com/products");

		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`);
		}

		const products = await response.json();
		renderProducts(products);
		setStatus(`Loaded ${products.length} products.`);
	} catch (error) {
		console.error(error);
		productsContainer.innerHTML = '<div class="empty-state">Unable to load products. Please try again.</div>';
		setStatus("Failed to fetch products.");
	} finally {
		fetchButton.disabled = false;
	}
}

fetchButton.addEventListener("click", fetchProducts);
