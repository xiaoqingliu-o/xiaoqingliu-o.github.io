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

document.addEventListener("DOMContentLoaded", () => {
    const themes = [
        {
            id: "theme-1",
            figures: [
                "images/figures/NC2022.jpg",
                "images/figures/NC2025.jpg"
            ]
        },
        {
            id: "theme-2",
            figures: [
                "images/figures/GCA2020.jpg",
                "images/figures/ANNReview.jpg"
            ]
        },

      {
            id: "theme-3",
            figures: [
                "images/figures/GRL2024.jpg",
                "images/figures/GRL2025.jpg"
            ]
        }
        // Add more themes and figures as needed
    ];

    themes.forEach(theme => {
        const themeDiv = document.getElementById(theme.id);
        const figuresDiv = themeDiv.querySelector(".figures");

        theme.figures.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = `Figure related to ${theme.id}`;
            figuresDiv.appendChild(img);
        });
    });
});

