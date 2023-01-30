let bouton = document.querySelector(".download")

bouton.addEventListener("click", ()=>{
    toImg()
})

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let result = generateString(10)
result = result.slice(1)
function toImg (){
    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
        canvas.toBlob(function (blob){
            saveAs(blob, result)
        })
    });
}

