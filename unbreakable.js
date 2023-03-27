function split(string){
    let split = [];
    for (let i = 0; i < string.length; i++){
        split.push(string[i]);
    }
    return split;
}

function join(array){
    let joined = '';
    for (let i = 0; i < array.length; i++){
        joined += array[i];
    }
    return joined;
}