
function plus() {
    var x = parseFloat(document.getElementById("intFirst").value);
    var y = parseFloat(document.getElementById("intSecond").value);
    var z = x + y;
    document.getElementById("result").innerHTML = z;
}

function minus(){
    var x = parseFloat(document.getElementById("intFirst").value);
    var y = parseFloat(document.getElementById("intSecond").value);
    var z = x - y;
    document.getElementById("result").innerHTML = z;
}

function divided(){
    var x = parseFloat(document.getElementById("intFirst").value);
    var y = parseFloat(document.getElementById("intSecond").value);
    var z = x / y;
    document.getElementById("result").innerHTML = z;
}

function multiplied(){
    var x = parseFloat(document.getElementById("intFirst").value);
    var y = parseFloat(document.getElementById("intSecond").value);
    var z = x * y;
    document.getElementById("result").innerHTML = z;
}