function split(string, separator){
    let split = [];
    for (let i = 0; i < string.length; i++){
        if (string[i] === separator){
            split.push('');
            i = i + 1;
        }
    }
    split.push(string[i]);
    return split;
}

function join(array){
    let joined = '';
    for (let i = 0; i < array.length; i++){
        joined += array[i];
    }
    return joined;
}