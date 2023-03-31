function ionOut(str){
    return str.match(/\w+t(?=ion)/gi) ?? []; 
}