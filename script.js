



function f1() {
    document.execCommand("bold", false, null);
}
function f2() {
    document.execCommand("underline", false, null);
}
function f3() {
    document.execCommand("italic", false, null);
}
function openColorPicker() {
    let colorPicker = document.getElementById("colorPicker");
    colorPicker.click();
}

// Handle the selected color
document.getElementById("colorPicker").addEventListener("input", function(event) {
    let selectedColor = event.target.value;
    document.execCommand("foreColor", false, selectedColor);
});


