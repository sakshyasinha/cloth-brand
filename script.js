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

    // Update the heading (optional, add this if you create a main heading in the HTML)
    // document.getElementById('main-heading').innerText = section.charAt(0).toUpperCase() + section.slice(1) + "'s Fashion";
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
