function ionOut(str){
    return str.match(/ion(?![a-z])/gi) || [];
}