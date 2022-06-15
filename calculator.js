function clearScreen() {
    document.getElementById("result").value = "";
}

function backspace() {
    document.getElementById("result").value="Yesko function ko kam timro dhanyabad";
}


function display(value) {
    document.getElementById("result").value += value;
}


function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}