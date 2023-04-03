function every(tab, func){
    for(let i = 0; i < tab.length; i++){
        if(!func(tab[i], i, tab)){
            return false;
        }
    }
    return true;
}