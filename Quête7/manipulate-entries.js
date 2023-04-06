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

function totalCalories(entries) {
    return Number(reduceEntries(entries,(acc, curr) => {
                let value = (nutritionDB[curr[0]]["calories"] / 100) * curr[1];
                return acc + value;
            },0).toFixed(1));
}

function lowCarbs(entries) {
    return filterEntries(entries, (entry) => {
        let value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1];
        return parseInt(value) <= 50;});
}

function cartTotal(entries) {
    let res = {};
    for (let key in entries) {
        res[key] = {};
        for (let dbKey in nutritionDB[key]) {
            res[key][dbKey] =
                Math.round(
                    (entries[key] / 100) * nutritionDB[key][dbKey] * 1000
                ) / 1000;
        }
    }
    return res;
}
