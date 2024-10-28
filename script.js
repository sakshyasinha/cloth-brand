const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

function showSection(section) {
    document.getElementById('mens').style.display = 'none';
    document.getElementById('women').style.display = 'none';
    document.getElementById('children').style.display = 'none';

    document.getElementById(section).style.display = 'block';

    const heading = document.getElementById('main-heading');
    if (section === 'mens') {
        heading.textContent = "MEN'S FASHION";
    } else if (section === 'women') {
        heading.textContent = "WOMEN'S FASHION";
    } else if (section === 'children') {
        heading.textContent = "CHILDREN'S FASHION";
    }
}

function openModal(productName, productImage, productPrice) {
    document.getElementById('modal-product-name').textContent = productName;
    document.getElementById('modal-product-image').src = productImage;
    document.getElementById('modal-product-price').textContent = productPrice;

    document.getElementById('product-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}
