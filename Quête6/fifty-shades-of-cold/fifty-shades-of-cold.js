import { colors } from './fifty-shades-of-cold.data.js'
export function generateClasses() {
    let style = document.createElement('style')
    style.innerHTML = ''
    for (let i = 0; i < colors.length; i++) {
        style.innerHTML += '.' + colors[i] + '{background:' + colors[i] + ';}'
    }
    document.head.appendChild(style)
}
export function generateColdShades() {
    colors.forEach(color => {
        if(test_color(color)){
            const div = document.createElement('div');
        div.className = color;
        div.textContent = color;
        document.body.appendChild(div);
        }
    });
}
function test_color(color) {
    const colorl = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]
    for (let i = 0; i < colorl.length; i++) {
        if (color.includes(colorl[i])) {
            return true
        }
    }
    return false
}

export function choseShade(d){
    let elem = document.querySelectorAll('div')
    for(let i = 0;i<colors.length;i++){
        let style = elem[i].className
        let flag = elem[i].classList.contains(d)
        if(!flag){
            elem[i].classList.remove(style)
            elem[i].classList.add(d)
        } 
    }
}