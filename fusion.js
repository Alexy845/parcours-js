function fusion(obj1, obj2) {
    if (!obj1) return obj2;
    if (!obj2) return obj1;

    let fusioned = {};

    // fusion des clés de obj1 et obj2
    for (let key in obj1) {
        if (!obj1.hasOwnProperty(key)) continue;
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj1[key] === typeof obj2[key]) {
                if (Array.isArray(obj1[key])) {
                    fusioned[key] = obj1[key].concat(obj2[key]);
                } else if (typeof obj1[key] === "string") {
                    fusioned[key] = obj1[key] + " " + obj2[key];
                } else if (typeof obj1[key] === "number") {
                    fusioned[key] = obj1[key] + obj2[key];
                } else if (typeof obj1[key] === "object") {
                    fusioned[key] = fusion(obj1[key], obj2[key]);
                }
            } else {
                if (typeof obj1[key] === "string" && typeof obj2[key] === "number") {
                    fusioned[key] = obj2[key].toString() + obj1[key];
                } else if (typeof obj1[key] === "number" && typeof obj2[key] === "string") {
                    fusioned[key] = obj1[key] + parseInt(obj2[key]);
                } else {
                    fusioned[key] = obj2[key];
                }
            }
        } else {
            fusioned[key] = obj1[key];
        }
    }

    // ajouter les clés de obj2 qui ne sont pas dans obj1
    for (let key in obj2) {
        if (!obj2.hasOwnProperty(key)) continue;
        if (!obj1.hasOwnProperty(key)) {
            fusioned[key] = obj2[key];
        }
    }

    return fusioned;
}
