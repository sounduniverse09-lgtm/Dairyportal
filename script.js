const products = [
    { id: 1, name: "Milk (1L)", price: 50, image: "Milk.jpg" },
    { id: 2, name: "Curd (500g)", price: 40, image: "images/curd.jpg" },
    { id: 3, name: "Paneer (250g)", price: 80, image: "images/paneer.jpg" },
    { id: 4, name: "Butter (100g)", price: 60, image: "images/butter.jpg" }
];

let cartCount = 0;

function loadProducts() {
    const productsDiv = document.getElementById('products');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    alert(`${product.name} added to cart!`);
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

// Initialize
loadProducts();

