function reverse(str) {
    let reversed = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i]);
    }
    if (typeof str === 'string') {
        return reversed.join('');
    } else {
        return reversed;
    }
}