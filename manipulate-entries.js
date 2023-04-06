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
    return Number(reduceEntries(entries, (acc, [key, value]) => acc + value, 0).toFixed(2));
}

function lowCarbs(entries) {
    return filterEntries(entries, (entry) => {
        let value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1];
        return parseInt(value) <= 50;});
}

function cartTotal(obj) {
    return reduceEntries(obj, (acc, [key, value]) => acc + value.price * value.quantity, 0);
}

