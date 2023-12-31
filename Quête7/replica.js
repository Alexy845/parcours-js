function replica(target, ...sources) {
    if (typeof target !== 'object' || target === null) {
        throw new Error('Target must be an object');
    }

    for (const source of sources) {
        if (typeof source !== 'object' || source === null) {
            continue;
        }

        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                const sourceValue = source[key];
                const targetValue = target[key];

                if (typeof sourceValue === 'object' && sourceValue !== null) {
                    if (sourceValue instanceof RegExp) {
                        target[key] = new RegExp(sourceValue);
                    } else if (typeof targetValue !== 'object' || targetValue === null) {
                        target[key] = Array.isArray(sourceValue) ? [] : {};
                    }

                    if (Array.isArray(sourceValue)) {
                        target[key] = replica([], sourceValue);
                    } else if (Array.isArray(targetValue)) {
                        target[key] = replica({}, sourceValue);
                    } else {
                        replica(target[key], sourceValue);
                    }
                } else {
                    target[key] = sourceValue;
                }
            }
        }
    }

    return target;
}
