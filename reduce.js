function fold(tab, func, acc){
    for(let i = 0; i < tab.length; i++){
        acc = func(acc, tab[i]);
    }
    return acc;
}

function foldRight(tab, func, acc){
    for(let i = tab.length - 1; i >= 0; i--){
        acc = func(acc, tab[i]);
    }
    return acc;
}