// Show different sections of products
function showSection(section) {
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(s => {
        s.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}

// Filter Products
function filterProducts() {
    const searchBar = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product-item');
    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchBar)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Sort Products
function sortProducts() {
    const sortOption = document.getElementById('sort').value;
    const productGrid = document.querySelector('.product-grid');
    const products = Array.from(document.querySelectorAll('.product-item'));

    products.sort((a, b) => {
        const priceA = parseFloat(a.getAttribute('data-price'));
        const priceB = parseFloat(b.getAttribute('data-price'));
        return sortOption === 'asc' ? priceA - priceB : priceB - priceA;
    });

    products.forEach(product => {
        productGrid.appendChild(product);
    });
}

// Open Modal
function openModal(name, image, price) {
    document.getElementById('modal-product-name').textContent = name;
    document.getElementById('modal-product-image').src = image;
    document.getElementById('modal-product-price').textContent = price;
    document.getElementById('product-modal').style.display = 'flex';
    document.getElementById('product-modal').classList.add('show');
}

// Close Modal
function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
    document.getElementById('product-modal').classList.remove('show');
}

// Scroll to Top
window.onscroll = function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle Dark Mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
