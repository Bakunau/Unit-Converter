// Get HTML elements
const convertButton = document.getElementById("btn"); // Button to trigger conversion
const lengthParagraph = document.getElementById("length"); // Paragraph to display length conversion results
const userInput = document.getElementById("user-input"); // Input field for user-provided value
const volumeParagraph = document.getElementById("volume"); // Paragraph to display volume conversion results
const massParagraph = document.getElementById("mass"); // Paragraph to display mass conversion results

// Add click event listener to the conversion button
convertButton.addEventListener("click", function () {
    const input = parseFloat(userInput.value); // Parse user input to a float
    meterandfeet(input); // Perform length conversion
    literandgallons(input); // Perform volume conversion
    kilogramsandpounds(input); // Perform mass conversion
});

// Function to convert meters to feet and vice versa
function meterandfeet(input) {
    let metertofeet = (input / 3.281).toFixed(2); // Convert meters to feet
    let feettometer = (input * 3.281).toFixed(2); // Convert feet to meters
    let result = `${input} meter${input === 1 ? "" : "s"} = ${metertofeet} feet | ${input} feet = ${feettometer} meter${feettometer === "1.00" ? "" : "s"}`;
    lengthParagraph.innerHTML = result; // Display the result
}

// Function to convert liters to gallons and vice versa
function literandgallons(input) {
    let litertogallon = (input * 0.264).toFixed(2); // Convert liters to gallons
    let gallontoliter = (input / 0.264).toFixed(2); // Convert gallons to liters
    let result = `${input} liter${input === 1 ? "" : "s"} = ${litertogallon} gallon${litertogallon === "1.00" ? "" : "s"} | ${input} gallon${input === 1 ? "" : "s"} = ${gallontoliter} liter${gallontoliter === "1.00" ? "" : "s"}`;
    volumeParagraph.innerHTML = result; // Display the result
}

// Function to convert kilograms to pounds and vice versa
function kilogramsandpounds(input) {
    let kilogramtopound = (input * 2.204).toFixed(2); // Convert kilograms to pounds
    let poundtokilogram = (input / 2.204).toFixed(2); // Convert pounds to kilograms
    let result = `${input} kilogram${input < 2 ? "" : "s"} = ${kilogramtopound} pound${kilogramtopound === "1.00" ? "" : "s"} | ${input} pound${input === 1 ? "" : "s"} = ${poundtokilogram} kilogram${poundtokilogram === "1.00" ? "" : "s"}`;
    massParagraph.innerHTML = result; // Display the result
}

// Dark mode functionality
let darkmode = localStorage.getItem('darkmode'); // Retrieve dark mode preference from local storage
const themeSwtich = document.getElementById("theme-switch"); // Button to toggle dark mode

// Enable dark mode by adding the "darkmode" class to the body
const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active"); // Save dark mode preference
};

// Disable dark mode by removing the "darkmode" class from the body
const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null); // Clear dark mode preference
};

// Check if dark mode is already enabled and apply it
if (darkmode === "active") enableDarkmode();

// Toggle dark mode when the theme switch button is clicked
themeSwtich.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode"); // Check current dark mode state
    darkmode !== "active" ? enableDarkmode() : disableDarkmode(); // Toggle dark mode
});
