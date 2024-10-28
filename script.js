const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

function showSection(section) {
    document.querySelectorAll('.product-grid').forEach(grid => grid.style.display = 'none');
    document.getElementById(section).style.display = 'grid';

    document.getElementById('main-heading').textContent =
        section.charAt(0).toUpperCase() + section.slice(1) + "'s Fashion";
}

function openModal(name, image, price) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>${name}</h2>
            <img src="${image}" alt="${name}">
            <p>${price}</p>
            <button onclick="addToCart('${name}')">Add to Cart</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) modal.remove();
}

function addToCart(item) {
    alert(`${item} has been added to your cart!`);
}
