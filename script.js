function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.product-grid').forEach(section => {
        section.style.display = 'none';
    });
    // Show the selected section
    document.getElementById(sectionId).style.display = 'grid';
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
        </div>
    `;
    document.body.appendChild(modal);
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) modal.remove();
}
