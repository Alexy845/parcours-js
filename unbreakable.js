function split(string, separator) {
    if (separator === '') {
        return string.split('');
    }
    let split = [];
    let start = 0;
    for (let i = 0; i < string.length; i++){
        if (string.slice(i, i + separator.length) === separator) {
            split.push(string.slice(start, i));
            start = i + separator.length;
        }
    }
    split.push(string.slice(start));
    return split;
}

function join(array, separator) {
    let joined = '';
    for (let i = 0; i < array.length; i++){
        joined += array[i];
        if (i !== array.length - 1) {
            joined += separator;
        }
    }
    return joined;
}