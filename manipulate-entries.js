function filterEntries(obj, filter) {
    let res = {};
    for (let key in obj) {
        if (filter([key, obj[key]])) {
            res[key] = obj[key];
        }
    }
    return res;
}

function mapEntries(obj, map) {
    let res = {};
    for (let key in obj) {
        let [newKey, newValue] = map([key, obj[key]]);
        res[newKey] = newValue;
    }
    return res;
}

function reduceEntries(obj, reducer, initialValue) {
    let res = initialValue;
    for (let key in obj) {
        res = reducer(res, [key, obj[key]]);
    }
    return res;
}



