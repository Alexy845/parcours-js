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
    let undef = false;
    if (acc === undefined) {
        acc = "";
        undef = true;
    }

    let result = Object.keys(obj).reduce((acc, key) => {
        return fn(acc, key);
    }, acc);

    if (typeof result !== "number") {
        if (result.slice(0, 2) === ", ") result = result.slice(2);
        if (undef && result[0] === ":") result = result.slice(1);
    }
    return result;
}

