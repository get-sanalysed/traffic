const status_text = document.getElementById("status");

// Keep each light and its button together in one list
const lights = [
    { name: "Red",    light: document.getElementById("redLight"),    button: document.getElementById("redButton") },
    { name: "Yellow", light: document.getElementById("yellowLight"), button: document.getElementById("yellowButton") },
    { name: "Green",  light: document.getElementById("greenLight"),  button: document.getElementById("greenButton") }
];


// Update the look of one light and its button
function setLight(item, isOn) {

    // Add or remove the "on" class (this makes it glow)
    item.light.classList.toggle("on", isOn);
    item.button.classList.toggle("active", isOn);

    // Update the button text
    item.button.textContent = item.name + ": " + (isOn ? "ON" : "OFF");
}


// Switch one light. Only one light can be ON at a time.
function switchLight(chosen) {

    // Was the chosen light already ON?
    const wasOn = chosen.light.classList.contains("on");

    // Turn every light OFF first
    lights.forEach(function (item) {
        setLight(item, false);
    });

    // If it was OFF, turn it ON. If it was ON, it stays OFF.
    if (!wasOn) {
        setLight(chosen, true);
        status_text.textContent = chosen.name + " light is ON";
    } else {
        status_text.textContent = "All lights are OFF";
    }
}


// Clicking a light or its button switches it
lights.forEach(function (item) {
    item.light.addEventListener("click", function () { switchLight(item); });
    item.button.addEventListener("click", function () { switchLight(item); });
});