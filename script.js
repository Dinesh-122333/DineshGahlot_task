function showExamples(category) {
    const photoData = {
        event: ['./assets/Images/EventPhotography/Event1.jpg', './assets/Images/EventPhotography/Event2.jpg', './assets/Images/EventPhotography/Event3.jpg', './assets/Images/EventPhotography/Event4.jpg', './assets/Images/EventPhotography/Event5.jpg', './assets/Images/EventPhotography/Event6.jpg'],
        food: ['./assets/Images/FoodPhotography/Food1.jpg', './assets/Images/FoodPhotography/Food2.jpg', './assets/Images/FoodPhotography/Food3.jpg', './assets/Images/FoodPhotography/Food4.jpg', './assets/Images/FoodPhotography/Food5.jpg', './assets/Images/FoodPhotography/Food6.jpg'],
        nature: ['./assets/Images/NaturePhotography/Nature1.jpg', './assets/Images/NaturePhotography/Nature2.jpg', './assets/Images/NaturePhotography/Nature3.jpg', './assets/Images/NaturePhotography/Nature4.jpg', './assets/Images/NaturePhotography/Nature5.jpg', './assets/Images/NaturePhotography/Nature6.jpg'],
        wedding: ['./assets/Images/WeddingPhotography/wedding1.jpg', './assets/Images/WeddingPhotography/wedding2.jpg', './assets/Images/WeddingPhotography/wedding3.jpg', './assets/Images/WeddingPhotography/wedding4.jpg', './assets/Images/WeddingPhotography/wedding5.jpg', './assets/Images/WeddingPhotography/wedding6.jpg'],
        portrait: ['./assets/Images/PortraitPhotography/Portrait1.jpg', './assets/Images/PortraitPhotography/Portrait2.jpg', './assets/Images/PortraitPhotography/Portrait3.jpg', './assets/Images/PortraitPhotography/Portrait4.jpg', './assets/Images/PortraitPhotography/Portrait5.jpg', './assets/Images/PortraitPhotography/Portrait6.jpg'],
        wild: ['./assets/Images/WildlifePhotography/Wildlife1.jpg', './assets/Images/WildlifePhotography/Wildlife2.jpg', './assets/Images/WildlifePhotography/Wildlife3.jpg', './assets/Images/WildlifePhotography/Wildlife4.jpg', './assets/Images/WildlifePhotography/Wildlife5.jpg', './assets/Images/WildlifePhotography/Wildlife6.jpg']
        // Add more categories and their respective photo URLs here
    };

    const photos = photoData[category];

    const examplesContainer = document.getElementById('examplesContainer');
    examplesContainer.innerHTML = '';

    // Check if mainTitle element exists
    const mainTitle = document.getElementById('mainTitle');
    if (mainTitle) {
        // If it exists, set its text content
        mainTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    } else {
        // If it doesn't exist, create a new h2 element and set its text content
        const newMainTitle = document.createElement('h2');
        newMainTitle.id = 'mainTitle';
        newMainTitle.classList.add('text-center', 'main_font', 'header_color', 'py-5');
        newMainTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        examplesContainer.prepend(newMainTitle);
    }

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('row', 'row-cols-3');
    photos.forEach(photo => {
        const col = document.createElement('div');
        col.classList.add('col', 'mb-3');
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        const img = document.createElement('img');
        img.classList.add('img-fluid');
        img.src = photo;
        img.alt = 'Photo';
        imageContainer.appendChild(img);
        col.appendChild(imageContainer);
        gridContainer.appendChild(col);
    });

    examplesContainer.appendChild(gridContainer);
}
function clearExamples() {
    // Get the examples container
    const examplesContainer = document.getElementById('examplesContainer');
    
    // Remove all child elements
    while (examplesContainer.firstChild) {
        examplesContainer.removeChild(examplesContainer.firstChild);
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        var scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});