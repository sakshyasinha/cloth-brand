const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
        document.getElementById('back-to-top').style.display = 'block';
    } else {
        navbar.classList.remove('shrink');
        document.getElementById('back-to-top').style.display = 'none';
    }
});

function showSection(section) {
    document.getElementById('mens').style.display = 'none';
    document.getElementById('women').style.display = 'none';
    document.getElementById('children').style.display = 'none';
    document.getElementById(section).style.display = 'block';
}

function openModal(productName, productImage, productPrice) {
    document.getElementById('modal-product-name').innerText = productName;
    document.getElementById('modal-product-image').src = productImage;
    document.getElementById('modal-product-price').innerText = productPrice;
    document.getElementById('product-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function filterProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    document.querySelectorAll('.product-item').forEach(item => {
        const name = item.dataset.name.toLowerCase();
        item.style.display = name.includes(query) ? 'block' : 'none';
    });
}

function sortProducts() {
    const grid = document.getElementById('product-grid');
    const items = Array.from(grid.children);
    const order = document.getElementById('sort').value;
    items.sort((a, b) => {
        const priceA = parseInt(a.dataset.price);
        const priceB = parseInt(b.dataset.price);
        return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
    items.forEach(item => grid.appendChild(item));
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
