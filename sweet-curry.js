function mult2(x) {
    return function(y) {
        return x * y;
    }
}

function add3(x) {
    return function(y) {
        y = y + 3;
        return x + y;
    }
}

function sub4(x) {
    return x - 4;
}