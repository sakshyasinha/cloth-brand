function showSection(section) {
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(s => {
        s.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal.style.display === 'block') {
        closeModal('cart-modal');
    } else {
        displayCart();
        cartModal.style.display = 'block';
    }
}

function openProductModal(product) {
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-price').textContent = product.price;

    const productModal = document.getElementById('product-modal');
    productModal.style.display = 'flex';
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function openModal(productName, productImage, productPrice) {
    document.getElementById("modal-product-name").innerText = productName;
    document.getElementById("modal-product-image").src = productImage;
    document.getElementById("modal-product-price").innerText = `${productPrice}`;

    const modal = document.getElementById("product-modal");
    modal.style.display = "flex";
}

function closeProductModal() {
    closeModal('product-modal');
}

window.onclick = function(event) {
    const productModal = document.getElementById('product-modal');
    const cartModal = document.getElementById('cart-modal');
    if (event.target === productModal) {
        closeProductModal();
    } else if (event.target === cartModal) {
        closeModal('cart-modal');
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
        productGrid.innerHTML = '';
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
    updateCartCount();
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
    cartTotalElement.innerText = `Total: ₹${total}`;
}

window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

function addToCartFromModal() {
    const productName = document.getElementById("modal-product-name").innerText;
    const productPrice = document.getElementById("modal-product-price").innerText.trim();

    const priceNumber = parseInt(productPrice.replace('₹', '').trim());
    addToCart(productName, priceNumber);
    closeProductModal();
}
