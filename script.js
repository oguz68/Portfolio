// Scroll to Top Button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = "↑ Top";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.display = "none";
scrollToTopButton.style.padding = "10px 15px";
scrollToTopButton.style.backgroundColor = "#1abc9c";
scrollToTopButton.style.color = "white";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "5px";
scrollToTopButton.style.cursor = "pointer";
document.body.appendChild(scrollToTopButton);

// Show button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Scroll to top on button click
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dynamic Year in Footer
const footer = document.querySelector('.footer');
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
footer.appendChild(document.createTextNode(' © '));
footer.appendChild(yearSpan);

// Greeting Message Based on Time
const greetingElement = document.createElement('h4');
const currentHour = new Date().getHours();
let greetingMessage;

if (currentHour < 12) {
    greetingMessage = "Good Morning!";
} else if (currentHour < 18) {
    greetingMessage = "Good Afternoon!";
} else {
    greetingMessage = "Good Evening!";
}

greetingElement.textContent = greetingMessage;
const header = document.querySelector('.header');
header.appendChild(greetingElement);

// Create a color selection dropdown
const colorPicker = document.createElement('select');
colorPicker.style.position = 'fixed';
colorPicker.style.top = '20px';
colorPicker.style.right = '30px';
colorPicker.style.padding = '5px';
colorPicker.style.border = '1px solid #ccc';
colorPicker.style.borderRadius = '5px';
colorPicker.style.zIndex = '1000';

// Add accessibility-friendly color options to the dropdown
const colors = [
    { name: "Yellow (High Contrast)", value: "#FFFF33" },   // Bright Yellow
    { name: "Blue (High Contrast)", value: "#005FCC" },     // Strong Blue
    { name: "Green (Protanopia-friendly)", value: "#44D62C" }, // Vivid Green
    { name: "Orange (Deuteranopia-friendly)", value: "#FFAA00" }, // Bright Orange
    { name: "Pink (Tritanopia-friendly)", value: "#FF69B4" }, // Hot Pink
];

colors.forEach(color => {
    const option = document.createElement('option');
    option.value = color.value;
    option.textContent = color.name;
    colorPicker.appendChild(option);
});

// Append the color picker to the body
document.body.appendChild(colorPicker);

// Select all text-containing elements across the document
const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');

// Loop through each selected element
textElements.forEach(element => {
    // Add mouseover event listener
    element.addEventListener('mouseover', () => {
        const selectedColor = colorPicker.value; // Get the selected color
        element.style.backgroundColor = selectedColor;
        element.style.transition = "background-color 0.3s ease"; // Smooth transition
    });

    // Add mouseout event listener
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = "transparent"; // Reset background color
    });
});


// Select all images inside elements with the class 'project-section'
const images = document.querySelectorAll('.project-section img');

// Create a modal element to display the clicked image in a larger view
const modal = document.createElement('div'); // Create a new div for the modal
modal.className = 'modal'; // Assign the class 'modal' for styling purposes
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span> <!-- Close button to exit the modal -->
        <img src="" alt="Project Image"> <!-- Placeholder for the clicked image -->
        <p id="project-details"></p> <!-- Placeholder for project details or description -->
    </div>
`;
document.body.appendChild(modal); // Append the modal to the document's body

// Loop through each image and add an event listener to show the modal on click
images.forEach(image => {
    image.addEventListener('click', () => {
        // When an image is clicked, set the modal image source to the clicked image's source
        const modalImg = modal.querySelector('img'); // Select the modal's image element
        modalImg.src = image.src; // Set the src to the clicked image's src

        // Show the modal by changing its display style to 'block'
        modal.style.display = 'block'; // Makes the modal visible
    });
});

// Add an event listener to the close button that hides the modal when clicked
modal.querySelector('.close').addEventListener('click', () => {
    // Hide the modal by changing its display style to 'none'
    modal.style.display = 'none'; // Closes the modal
});
