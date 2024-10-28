function showSection(section) {
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(s => {
        s.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}

function filterProducts() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        const productName = item.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
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

        // Clear the section and append sorted products
        section.querySelector('.product-grid').innerHTML = '';
        products.forEach(product => {
            section.querySelector('.product-grid').appendChild(product);
        });
    });
}

function openModal(productName, productImage, productPrice) {
    // Set the product details in the modal
    document.getElementById('modal-product-name').innerText = productName;
    document.getElementById('modal-product-image').src = productImage;
    document.getElementById('modal-product-price').innerText = productPrice;

    // Show the modal
    const modal = document.getElementById('product-modal');
    modal.style.display = 'flex';  // Use 'flex' to center the modal content
    modal.classList.add('show');   // Add the 'show' class to change opacity
}

function closeModal() {
    const modal = document.getElementById('product-modal');
    modal.style.display = 'none';   // Hide the modal
    modal.classList.remove('show'); // Remove the 'show' class
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
let cart = [];
let cartCountElement = document.getElementById('cart-count');
let cartItemsElement = document.getElementById('cart-items');
let cartTotalElement = document.getElementById('cart-total');

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
    cartTotalElement.innerText = `Total: ₹${total}`;
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

