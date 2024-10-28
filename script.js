// Function to show a specific product section
function showSection(section) {
    const sections = document.querySelectorAll('.product-section');
    sections.forEach(s => {
        s.style.display = 'none'; // Hide all sections
    });
    document.getElementById(section).style.display = 'block'; // Show selected section
}

// Function to toggle the cart modal
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal.style.display === 'block') {
        closeModal('cart-modal'); // Use closeModal function for consistency
    } else {
        displayCart(); // Update cart display
        cartModal.style.display = 'block'; // Show cart modal
    }
}

// Function to close any modal by its ID
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none'; // Hide the modal
}

// Function to open the product modal
function openProductModal(product) {
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-price').textContent = product.price;

    const productModal = document.getElementById('product-modal');
    productModal.style.display = 'flex'; // Show the modal
}

// Function to update cart count
function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length; // Update the cart count
}

// Open modal with specific product details
function openModal(productName, productImage, productPrice) {
    document.getElementById("modal-product-name").innerText = productName;
    document.getElementById("modal-product-image").src = productImage;
    document.getElementById("modal-product-price").innerText = `₹${productPrice}`;

    const modal = document.getElementById("product-modal");
    modal.style.display = "flex"; // Show modal
}

// Close the product modal
function closeProductModal() {
    closeModal('product-modal'); // Use closeModal function for consistency
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const productModal = document.getElementById('product-modal');
    const cartModal = document.getElementById('cart-modal');
    if (event.target === productModal) {
        closeProductModal();
    } else if (event.target === cartModal) {
        closeModal('cart-modal'); // Use closeModal function for consistency
    }
};

// Function to filter products based on search input
function filterProducts() {
    const searchValue = document.getElementById('search-bar').value.toLowerCase();
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach(item => {
        const productName = item.getAttribute('data-name').toLowerCase();
        item.style.display = productName.includes(searchValue) ? 'block' : 'none'; // Show/hide items
    });
}

// Function to sort products based on selected criteria
function sortProducts() {
    const sortValue = document.getElementById('sort').value;
    const productSections = document.querySelectorAll('.product-section');

    productSections.forEach(section => {
        const products = Array.from(section.querySelectorAll('.product-item'));
        products.sort((a, b) => {
            const priceA = parseInt(a.getAttribute('data-price'));
            const priceB = parseInt(b.getAttribute('data-price'));
            return sortValue === 'asc' ? priceA - priceB : priceB - priceA; // Sort based on selected order
        });

        const productGrid = section.querySelector('.product-grid');
        productGrid.innerHTML = ''; // Clear existing products
        products.forEach(product => productGrid.appendChild(product)); // Append sorted products
    });
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cart implementation
let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Function to add products to the cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: parseInt(productPrice) });
    updateCartCount(); // Update cart count
}

// Function to display cart items
function displayCart() {
    cartItemsElement.innerHTML = ''; // Clear cart items
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - ₹${item.price}`;
        cartItemsElement.appendChild(itemElement); // Add item to cart display
    });
    cartTotalElement.innerText = `Total: ₹${total}`; // Display total
}

// Scroll event for "Back to Top" button
window.onscroll = function() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block"; // Show button
    } else {
        backToTopButton.style.display = "none"; // Hide button
    }
};

// Function to handle adding products to the cart from the product modal
function addToCartFromModal() {
    const productName = document.getElementById("modal-product-name").innerText;
    const productPrice = document.getElementById("modal-product-price").innerText.replace('₹', '').trim();
    addToCart(productName, productPrice);
    closeProductModal(); // Close the modal after adding to cart
}

// Example usage of opening the product modal
// Assuming you have a product object with the necessary details
const exampleProduct = {
    name: "Example Product",
    image: "path/to/image.jpg",
    price: "500" // Price should be a number without the currency symbol
};

// Call this function when you want to open the modal
openProductModal(exampleProduct);
