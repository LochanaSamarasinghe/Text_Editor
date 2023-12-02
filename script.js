function openColorPicker() {
    let colorPicker = document.getElementById("colorPicker");
    colorPicker.click();
}

// Handle the selected color
document.getElementById("colorPicker").addEventListener("input", function(event) {
    let selectedColor = event.target.value;
    document.execCommand("foreColor", false, selectedColor);
});
