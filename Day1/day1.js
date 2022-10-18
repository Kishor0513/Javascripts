function add() {
    var a,b,c;
    a = Number(document.getElementById("fnumber").value);
    b = Number(document.getElementById("lnumber").value);
    c = a + b;
    document.getElementById("answer").value = c;

}
function sub() {
    var a,b,c;
    a = Number(document.getElementById("fnumber").value);
    b = Number(document.getElementById("lnumber").value);
    c = a - b;
    document.getElementById("answer").value = c;

}
function mul() {
    var a,b,c;
    a = Number(document.getElementById("fnumber").value);
    b = Number(document.getElementById("lnumber").value);
    c = a * b;
    document.getElementById("answer").value = c;

}
function div() {
    var a,b,c;
    a = Number(document.getElementById("fnumber").value);
    b = Number(document.getElementById("lnumber").value);
    c = a / b;
    document.getElementById("answer").value = c;

}
function mod() {
    var a,b,c;
    a = Number(document.getElementById("fnumber").value);
    b = Number(document.getElementById("lnumber").value);
    c = a % b;
    document.getElementById("answer").value = c;

}