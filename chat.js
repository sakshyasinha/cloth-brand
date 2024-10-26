const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});


function showSection(section) {
    // Hide all sections
    document.getElementById('mens').style.display = 'none';
    document.getElementById('women').style.display = 'none';
    document.getElementById('children').style.display = 'none';

    // Show the selected section
    document.getElementById(section).style.display = 'block';

    // Update the main heading text based on the section
    const heading = document.getElementById('main-heading');
    if (section === 'mens') {
        heading.textContent = "MEN'S FASHION";
    } else if (section === 'women') {
        heading.textContent = "WOMEN'S FASHION";
    } else if (section === 'children') {
        heading.textContent = "CHILDREN'S FASHION";
    }
}
