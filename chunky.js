function chunk (array, size) {
    let arr = [];
    if (array && Array.isArray(array)) {
        for (let i = 0; i < array.length; i += size) {
            arr.push(array.slice(i, i + size));
        }
    }
    return arr;
}