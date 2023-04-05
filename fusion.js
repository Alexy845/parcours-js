function fusion(obj1, obj2) {
    if (!obj1) return obj2;
    if (!obj2) return obj1;
    let fusioned = {};
    for (let key in obj1) {
        if (!obj1.hasOwnProperty(key)) continue;
        if (obj2.hasOwnProperty(key)) {
            if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
                fusioned[key] = obj1[key].concat(obj2[key]);
            }
            if (typeof obj1 === "string" && typeof obj2 === "string") {
                fusioned[key] = obj1[key] + " " + obj2[key];
            }
            if (typeof obj1 === "number" && typeof obj2 === "number") {
                fusioned[key] = obj1[key] + obj2[key];
            }
            if (typeof obj1 === "object" && typeof obj2 === "object") {
                fusioned[key] = fusion(obj1[key], obj2[key]);
            } else {
                fusioned[key] = obj2[key];
            }
        } else {
            fusioned[key] = obj1[key];
        }
    }
    for (let key in obj2) {
        if (!obj2.hasOwnProperty(key)) continue;
        if (!obj1.hasOwnProperty(key)) {
            fusioned[key] = obj2[key];
        }
    }
    return fusioned;
}