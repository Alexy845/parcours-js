function fold(tab, func, acc){
    for(let i = 0; i < tab.length; i++){
        acc = func(acc, tab[i]);
    }
    return acc;
}