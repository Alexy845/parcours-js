function repeat(string,number) {
    if (number === 0) {
        return '';
    }
    if (number === 1) {
        return string;
    }
    return string + repeat(string, number - 1);
}
