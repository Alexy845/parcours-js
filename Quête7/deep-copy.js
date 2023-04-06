function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
    let newObj = obj instanceof Array ? [] : {};
    if (obj instanceof RegExp) {
      return new RegExp(obj);
    }
    if (obj instanceof Date) {
      return new Date(obj.getTime());
    }
    if (obj instanceof Function) {
      return obj;
    }
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = deepCopy(obj[key]);
      }
    }
    return newObj;
  }
  