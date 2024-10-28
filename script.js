function showSection(section) {
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(s => {
        s.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}

function openModal(productName, productImage, productPrice) {
    document.getElementById("modal-product-name").innerText = productName;
    document.getElementById("modal-product-image").src = productImage;
    document.getElementById("modal-product-price").innerText = `${productPrice}`;
    
    const modal = document.getElementById("product-modal");
    const modalContent = modal.querySelector(".modal-content");

    modal.style.display = "flex"; // Show modal
    modal.classList.add("show");
    modalContent.classList.add("show"); // Fade-in effect
}

function closeModal() {
    const modal = document.getElementById("product-modal");
    modal.classList.remove("show");
    modal.style.display = "none"; // Hide modal
}

window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    if (event.target === modal) {
        closeModal();
    }
};

function filterProducts() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        const productName = item.getAttribute('data-name').toLowerCase();
        item.style.display = productName.includes(searchValue) ? 'block' : 'none';
    });
}

function sortProducts() {
    const sortValue = document.getElementById('sort').value;
    const productSections = document.querySelectorAll('.product-section');
    
    productSections.forEach(section => {
        const products = Array.from(section.querySelectorAll('.product-item'));
        products.sort((a, b) => {
            const priceA = parseInt(a.getAttribute('data-price'));
            const priceB = parseInt(b.getAttribute('data-price'));
            return sortValue === 'asc' ? priceA - priceB : priceB - priceA;
        });

        const productGrid = section.querySelector('.product-grid');
        productGrid.innerHTML = ''; // Clear existing products
        products.forEach(product => productGrid.appendChild(product));
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: parseInt(productPrice) });
    cartCountElement.innerText = cart.length;
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal.style.display === 'block') {
        cartModal.style.display = 'none';
    } else {
        displayCart();
        cartModal.style.display = 'block';
    }
}

function displayCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - ₹${item.price}`;
        cartItemsElement.appendChild(itemElement);
    });
    cartTotalElement.innerText = `Total: ₹${total}`; // Display total
}

// Scroll event for "Back to Top" button
window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
