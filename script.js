function f9() {
    document.execCommand("undo", false, null);
}

function f10() {
    document.execCommand("redo", false, null);
}

window.addEventListener("load", () => {
    editable.innerHTML = "";
});