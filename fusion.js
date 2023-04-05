function fusion(obj1, obj2) {
    // objets vide on renvoie l'autre objet
    if (!obj1) return obj2;
    if (!obj2) return obj1;

    // si tableau on concatène
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        return obj1.concat(obj2);
    }

   // Si chaînes de caractères, on concatène
    if (typeof obj1 === "string" && typeof obj2 === "string") {
        return { str: obj1 + " " + obj2 };
    }

    // Si nombres, on additionne
    if (typeof obj1 === "number" && typeof obj2 === "number") {
        return obj1 + obj2;
    }

    // Si objets, on fusionne
    if (typeof obj1 === "object" && typeof obj2 === "object") {
        let result = {};
        for (let key in obj1) {
            if (key in obj2) {
                result[key] = fusion(obj1[key], obj2[key]);
            } else {
                result[key] = obj1[key];
            }
        }
        for (let key in obj2) {
            if (!(key in obj1)) {
                result[key] = obj2[key];
            }
        }
        return result;
    }

    // Si incompatible, on renvoie le deuxième objet
    return obj2;
}