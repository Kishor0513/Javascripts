const hatcheck = document.querySelector("#hat");
const glassescheck = document.querySelector("#eyeglasses");
const tiecheck = document.querySelector("#tie");

const hat = document.querySelector(".hat");
const glasses = document.querySelector(".glasses");
const tie = document.querySelector(".tie");

hatcheck.addEventListener("change", hatfun);
function hatfun() {
    if (hatcheck.checked == true) {
        hat.style.bottom = "165px";
    } else {
        hat.style.bottom = "400px";
    }
}

glassescheck.addEventListener("change", glassesfun);
function glassesfun() {
    if (glassescheck.checked == true) {
        glasses.style.right = "50%";
    } else {
        glasses.style.right = "-50%";
    }
}
tiecheck.addEventListener("change", tiefun);
function tiefun() {
    if (tiecheck.checked == true) {
        tie.style.bottom = "10px";
    } else {
        tie.style.bottom = "-80px";
    }
}  
