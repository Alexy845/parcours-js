function pickKeys(obj, keys) {
    if (typeof keys === 'string') {
      keys = [keys];
    }
    
    const result = {};
    
    for (const key of keys) {
      if (key in obj) {
        result[key] = obj[key];
      }
    }
    
    return result;
  }
  