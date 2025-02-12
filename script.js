// Display the current date dynamically
document.getElementById("date").textContent = "Published on " + new Date().toDateString();

// Populate common mental health symptoms dynamically
const symptoms = [
    "Feeling sad or down",
    "Excessive fears or worries",
    "Extreme mood swings",
    "Withdrawal from friends and activities",
    "Changes in eating or sleeping habits"
];

const symptomList = document.getElementById("symptom-list");

symptoms.forEach(symptom => {
    let li = document.createElement("li");
    li.textContent = symptom;
    symptomList.appendChild(li);
});

// Toggle visibility of self-care tips
document.getElementById("show-tips").addEventListener("click", function () {
    var tipsList = document.getElementById("tips-list");
    if (tipsList.style.display === "none") {
        tipsList.style.display = "block";
        this.textContent = "Hide Self-Care Tips";
    } else {
        tipsList.style.display = "none";
        this.textContent = "Show Self-Care Tips";
    }
});