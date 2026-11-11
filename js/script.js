
function init() {
    const input = document.getElementById("entryinput");
    const button = document.getElementById("entrybutton");
    const output = document.getElementById("textoutput");

    button.addEventListener("click", function() {
        const message = input.value;

        alert("Huthef: " + message);
        output.textContent = message;
    });
}

window.addEventListener("load", init);
