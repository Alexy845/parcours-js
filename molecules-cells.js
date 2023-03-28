function RNA(string){
    let arr = [];
    let str = '';
    if (string && string.length > 0) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] === 'A') {
                str += 'U';
            } else if (string[i] === 'C') {
                str += 'G';
            } else if (string[i] === 'G') {
                str += 'C';
            } else if (string[i] === 'U') {
                str += 'A';
            } else {
                return null;
            }
        }
    }
    return str;
}

function DNA(string){
    let arr = [];
    let str = '';
    if (string && string.length > 0) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] === 'A') {
                str += 'T';
            } else if (string[i] === 'C') {
                str += 'G';
            } else if (string[i] === 'G') {
                str += 'C';
            } else if (string[i] === 'T') {
                str += 'A';
            }
        }
    }
    return str;
}