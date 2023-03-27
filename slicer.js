function slice (str, start, end) {
    let sliced = '';
    for (let i = start; i < end; i++) {
        sliced += str[i];
    }
    return sliced;
}