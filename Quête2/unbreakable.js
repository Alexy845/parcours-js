function split(string, sep) {
    let arr = [];
    let str = '';
    if (sep.length > string.length || !string) {
        arr.push(string);
        return arr;
    }
    if (string && sep !== undefined) {
        if (sep.length === 0) {
            for (let i = 0; i < string.length; i++) {
                arr.push(string[i]);
            }
        } else {
            for (let i = 0; i < string.length; i++) {
                if (string[i] === sep[0] && string.slice(i, i + sep.length) === sep) {
                    arr.push(str);
                    str = '';
                    i += sep.length - 1;
                } else {
                    str += string[i];
                }
            }
            if (str !== '') {
                arr.push(str);
            }
            if (string.slice(-sep.length) === sep) {
                arr.push('');
            }
        }
    }
    return arr;
}

function join(array, sep) {
    let str = '';
    if (array && Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            str += array[i];
            if (i !== array.length - 1 && sep) {
                str += sep;
            }
        }
    }
    return str;
}
