export const build = (x) => {
    let i = 1
    let block = ''
    let counter = 2
    let interval = setInterval(function(){
        block = document.createElement('div')
        document.body.append(block)
        block.innerHTML = i
        block.id = 'brick-'+i
        ++i
        if(counter === 3){
        block.dataset.foundation = true
        counter = 0
        }
        ++counter
        console.log(block)
        if(i===x+1){
            clearInterval(interval)
        }
    },100,i)
    return block
}

export const repair = (...repairs) => {
    for (let i = 0; i < repairs.length; i++) {
        let elem = document.getElementById(repairs[i])

        let n = repairs[i].replace('brick-', '')
        if(n%3===2){
            elem.setAttribute('data-repaired',"in progress")
            elem.innerHTML = n
        }else{
            elem.setAttribute("data-repaired","true")
            elem.innerHTML = n
        }

    }
}

export const destroy = () => {
    let elements = document.querySelectorAll('div[id^="brick"]')
    elements[elements.length-1].remove()
}