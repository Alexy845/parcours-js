export const getArchitects = () => {
    const arr = []
    const archi = Array.from(document.getElementsByTagName('a'))
    const nonArchi = Array.from(document.getElementsByTagName('span'))
    arr.push(archi)
    arr.push(nonArchi)
    return arr
} 

export const getClassical = () => {
    const arr =[]
    const classiqueArchi = Array.from(document.getElementsByClassName('classical'))
    const classiqueNonArchi = Array.from(document.querySelectorAll('a:not(.classical)'))
    arr.push(classiqueArchi)
    arr.push(classiqueNonArchi)
    return arr
}



export const getActive = () => {
    const arr = []
    const classiqueActiveArchi = Array.from(document.getElementsByClassName('classical active'))
    const classiqueNotActiveArchi = Array.from(document.querySelectorAll('a.classical:not(.active)'))
    arr.push(classiqueActiveArchi)
    arr.push(classiqueNotActiveArchi)
    return arr
}

export const getBonannoPisano = () =>{
    const arr = []
    const BonnanoPisano = document.getElementById("BonannoPisano")
    const nonBonnano = Array.from(document.querySelectorAll('a:not(#BonannoPisano)'))
    arr.push(BonnanoPisano)
    arr.push(nonBonnano)
    return arr
}