function get(src, path) {
    const props = path.split(".");
    let value = src;
    for (const prop of props) {
      value = value[prop];
      if (value === undefined) {
        return undefined;
      }
    }
    
    return value;
  }
  