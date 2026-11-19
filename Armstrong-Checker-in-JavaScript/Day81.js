const txtInput = document.querySelector(".inputs input"),
    checkBtn = document.querySelector(".inputs button"),
    infoTxt = document.querySelector(".info-txt");
let filterInput;


// javascript program to check if x is a perfect square

// A utility function that returns true if x is perfect square
function Armstrong(number) {
    const original = Number(number);
    let remaining = original;
    let addition = 0;

    while (remaining > 0) {
        const remainder = remaining % 10;
        addition = addition + remainder * remainder * remainder;
        remaining = Math.floor(remaining / 10);
    }

    return addition === original;
}

checkBtn.addEventListener("click", () => {
    let n = filterInput;
    console.log(typeof n);

    infoTxt.style.display = "block";
    // if(isString(n)===true){
    //     return infoTxt.innerHTML = `Enter a valid input`
    // }
    // else{
    if (Armstrong(n)) {
        return infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is an Armstrong number`;
    }
    infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> is not an Armstrong number`;
});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
})