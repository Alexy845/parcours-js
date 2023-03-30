function vowelDots(str){
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            output += '.';
        } else {
            output += str[i];
        }
    }
    return output;    
}

console.log(vowelDots('hello world'));