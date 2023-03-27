function slice (str, start, end) {
    if (end === undefined) {
        end = str.length;
    }
    if (start < 0) {
        start = str.length + start;
    }
    if (end < 0) {
        end = str.length + end;
    }

    let sliced = [];
    for (let i = start; i < end; i++) {
        sliced += str[i];
    }
    return sliced;
}
