// Function to greet the user
function greetUser() {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    // Check if the element exists before trying to modify it
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = `${greeting}, welcome to my website!`;
    }
}

// Call the function when the page loads
window.onload = greetUser;


