export function generateLetters(){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=1;i<=120;i++){
        let letter = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        let div = document.createElement('div')
        div.id = 'letter-' + letter
        div.innerHTML = letter
        div.fontSize = (i+10)+'px';
        if (i <= 40 ){
            div.fontWeight = "300";
        } else if (i <= 80) {
            div.fontWeight = "400";
        } else {
            div.fontWeight = "600";
        }
        document.body.append(div)
    }
}