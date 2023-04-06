function filterEnties(obj, filter){
    const result = {};
    for (const key in obj) {
        if (filter(key, obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}

function mapEntries(obj, map){
    const result = {};
    for (const key in obj) {
        result[key] = map(key, obj[key]);
    }
    return result;
}

function reduceEntries(obj, reduce, acc){
    let result = acc;
    for (const key in obj) {
        result = reduce(result, key, obj[key]);
    }
    return result;
}

