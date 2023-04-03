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

function reduce(arr, func) {
    if (arr.length < 1) {
      throw new Error('Error');
    }
    let acc = arr[0];
    for (let i = 1; i < arr.length; i++) {
      acc = func(acc, arr[i], i, arr);
    }
    return acc;
  }


  