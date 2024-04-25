let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
const intervalTime = 3000; // Change the interval time as needed (in milliseconds)

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}



// Automatically advance the carousel
setInterval(nextSlide, intervalTime);


function showExamples(type) {
    // Define example images for each type of photography
    const exampleImages = {
        event: [
            "./assets/Images/EventPhotography/Event1.jpg",
            "./assets/Images/EventPhotography/Event2.jpg",
            "./assets/Images/EventPhotography/Event3.jpg",
            "./assets/Images/EventPhotography/Event4.jpg",
            "./assets/Images/EventPhotography/Event5.jpg",
        ],
        food: [
            "./assets/Images/FoodPhotography/Food1.jpg",
            "./assets/Images/FoodPhotography/Food2.jpg",
            "./assets/Images/FoodPhotography/Food3.jpg",
            "./assets/Images/FoodPhotography/Food4.jpg",
            "./assets/Images/FoodPhotography/Food5.jpg",
        ],
        nature: [
            "./assets/Images/NaturePhotography/Nature1.jpg",
            "./assets/Images/NaturePhotography/Nature2.jpg",
            "./assets/Images/NaturePhotography/Nature3.jpg",
            "./assets/Images/NaturePhotography/Nature4.jpg",
            "./assets/Images/NaturePhotography/Nature5.jpg",
        ],
        wedding: [
            "./assets/Images/WeddingPhotography/wedding1.jpg",
            "./assets/Images/WeddingPhotography/wedding2.jpg",
            "./assets/Images/WeddingPhotography/wedding3.jpg",
            "./assets/Images/WeddingPhotography/wedding4.jpg",
            "./assets/Images/WeddingPhotography/wedding5.jpg",
        ],
        portrait: [
            "./assets/Images/PortraitPhotography/Portrait1.jpg",
            "./assets/Images/PortraitPhotography/Portrait2.jpg",
            "./assets/Images/PortraitPhotography/Portrait3.jpg",
            "./assets/Images/PortraitPhotography/Portrait4.jpg",
            "./assets/Images/PortraitPhotography/Portrait5.jpg",
        ],
        wild: [
            "./assets/Images/WildlifePhotography/Wildlife1.jpg",
            "./assets/Images/WildlifePhotography/Wildlife2.jpg",
            "./assets/Images/WildlifePhotography/Wildlife3.jpg",
            "./assets/Images/WildlifePhotography/Wildlife4.jpg",
            "./assets/Images/WildlifePhotography/Wildlife5.jpg",
            "./assets/Images/WildlifePhotography/Wildlife6.jpg",
            "./assets/Images/WildlifePhotography/Wildlife7.jpg",
        ]
        // Add more types and corresponding example images as needed
    };

    const examplesContainer = document.getElementById("examplesContainer");
    examplesContainer.innerHTML = ""; // Clear previous examples

    // Create image elements for each example image and append them to the container
    exampleImages[type].forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", image);
        imgElement.classList.add("img-fluid", "mr-2", "mb-2");
        examplesContainer.appendChild(imgElement);
    });

    // Show the "Clear All" button container
    const clearButtonContainer = document.getElementById("clearButtonContainer");
    clearButtonContainer.classList.remove("d-none");

    // Set main title based on the selected photography type
    const mainTitle = document.getElementById("mainTitle");
    mainTitle.textContent = getMainTitle(type);
}

function clearExamples() {
    const examplesContainer = document.getElementById("examplesContainer");
    examplesContainer.innerHTML = ""; // Clear all images

    // Hide the "Clear All" button container
    const clearButtonContainer = document.getElementById("clearButtonContainer");
    clearButtonContainer.classList.add("d-none");
}

function getMainTitle(type) {
    const mainTitles = {
        event: "Event Photography",
        food: "Food Photography",
        nature: "Nature Photography",
        wedding: "Wedding Photography",
        portrait: "Portrait Photography",
        wild: "Wildlife Photography"
    };

    return mainTitles[type];
}