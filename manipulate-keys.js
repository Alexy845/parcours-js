function filterKeys(obj, fn) {
    const result = {};
    for (const key in obj) {
        if (fn(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}

function mapKeys(obj, fn) {
    const result = {};
    for (const key in obj) {
        result[fn(key)] = obj[key];
    }
    return result;
}

function reduceKeys(obj, fn, acc) {
    if (acc === undefined) {
        acc = 0;
    }

    let result = acc;
    for (const key in obj) {
        result = fn(result, key);
    }
    return result;
}