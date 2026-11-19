/* exported typewrite */
var mydiv = document.getElementById("mydiv");

const typewrite = () => {
    var text = document.getElementById("inputText").value;
    mydiv.textContent = "";
    for (let i = 0; i < text.length; i++){
        const j = i;
        setTimeout(()=>{
            mydiv.textContent += text[j];
        },100*j)
    }
}