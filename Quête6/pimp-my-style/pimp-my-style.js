import {styles} from './pimp-my-style.data.js'
let i = 0
let j = 14
let k = 0
export const pimp = () =>{
    const elem = document.querySelector("button")
    const mat = Math.floor(i/styles.length)
        if (mat%2 == 0) {
            j = 14
            elem.classList.add(styles[k])
            i++
            k++
            if(k == 15){
                elem.classList.add('unpimp')
            }
        }
        if (mat%2 != 0){
            k = 0
            elem.classList.add('unpimp')
            elem.classList.remove(styles[j])
            i++
            j--
            if(j == -1){
                elem.classList.remove('unpimp')
            }
            
     }
}