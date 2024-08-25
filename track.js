const steps = document.querySelectorAll(".step");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentStep = 0;

// Initialize the progress bar
updateProgressBar();

// Next Button Event Listener
nextBtn.addEventListener("click", () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateProgressBar();
    }
});

// Previous Button Event Listener
prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        updateProgressBar();
    }
});

// Function to Update Progress Bar
function updateProgressBar() {
    steps.forEach((step, index) => {
        if (index <= currentStep) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });

    // Disable buttons if at the start or end of the progress
    prevBtn.disabled = currentStep === 0;
    nextBtn.disabled = currentStep === steps.length - 1;
}
