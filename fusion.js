function fusion(obj) {
    if (typeof obj === 'array') {
        const result = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = obj[key];
            }
        }
        return result;
    }
    if (typeof obj === 'string') {
        const result = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = obj[key + ' '];
            }
        }
        return result;
    }
    if  (typeof obj === 'number') {
        const result = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] += obj[key];
            }
        }
        return result;
    }
    if (typeof obj === 'object') {  
        const result = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = obj[key];
            }
        }
        return result;
    }
    else 
}