function pick (obj, str){
    const newObj = {};
    Object.keys(obj).forEach((key) => {
        if (str.includes(key)) {
        newObj[key] = obj[key];
        }
    });
    return newObj;
}
