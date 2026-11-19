/* exported convert */
function convert() {
    let to_convert = document.getElementById("to_convert").value;
    to_convert = parseFloat(to_convert)
    let x = parseInt(document.getElementById("x").value, 10);
    let y = parseInt(document.getElementById("y").value, 10);

    // Validate provided inputs
    if (x === y || x < 2 || y < 2 || isNaN(to_convert)) {
        alert("HUH!? -_-");
        return 0;
    }

    // Organising results
    let res;
    if (x === 10) {
        res = Con_Dec_to_Basey(to_convert, y);
    } else if (y === 10) {
        res = Conv_Basex_to_Dec(to_convert, x);
    } else {
        res = Conv_Basex_to_Dec(to_convert, x);
        res = Con_Dec_to_Basey(res, y);
    }

    // Visualizing results
    let final = document.getElementById("res");
    final.value = res;
}


function Con_Dec_to_Basey(to_convert, y) {
    // Converting Integral part
    let integral_part = parseInt(to_convert, 10);
    let res = [];
    while (parseInt(integral_part, 10) !== 0) {
        integral_part /= y;
        let element = (integral_part - parseInt(integral_part, 10)) * y;
        res.unshift(parseInt(element, 10));
    }

    // Converting Decimal part
    let decimal_part = to_convert - parseInt(to_convert, 10);
    let res_dec = [];
    let precision = 10; // Special case for binary
    while (decimal_part !== 0) {
        decimal_part = (decimal_part - parseInt(decimal_part, 10)) * y
        // Special case for binary
        if (res_dec.includes(parseInt(decimal_part, 10))) {
            if (precision === 0) {
                break;
            }
            precision -= 1;
        }
        res_dec.push(parseInt(decimal_part, 10));
    }

    let final;
    if (res_dec.length === 0) {
        final = res.join(" ");
    } else {
        final = res.join(" ") + " . " + res_dec.join(" ");
    }
    return final;
}


function Conv_Basex_to_Dec(to_convert, x) {
    let i = 0;
    let res = 0;

    let integral_part = parseInt(to_convert, 10).toString().split("").reverse().join("");
    for (const number of integral_part) {
        let element = parseInt(number, 10) * (x ** i);
        res += element;
        i += 1;
    }

    let decimal_part = to_convert.toString().split(".")[1];
    if (decimal_part) {
        i = -1;
        for (const decimal of decimal_part) {
            let element = parseInt(decimal, 10) * (x ** i);
            res += element;
            i += -1;
        }
    }

    return res;
}