




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
function f4() {
    document.execCommand("justifyLeft", false, null);
}

function f5() {
    document.execCommand("justifyCenter", false, null);
}

function f6() {
    document.execCommand("justifyRight", false, null);
}

function f7() {
    document.execCommand("justifyFull", false, null);
}



