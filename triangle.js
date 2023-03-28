function triangle(string, x) {
    if (string && string.length > 0 && x && x > 0) {
        let str = '';
        for (let i = 0; i < x; i++) {
            str += string;
            console.log(str);
        }
    }
}