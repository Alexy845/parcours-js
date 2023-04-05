function pick (obj, str){
    const newObj = {};
    const keys = Object.keys(obj);
    newObj.forEach(element => {
        if(keys.includes(str)){
            newObj[element] = obj[element];
        }
    });
    return newObj;
}