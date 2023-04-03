function flow(funcs) {
  return function (value) {
    return funcs.reduce(function (acc, func) {
      return func(acc);
    }, value);
  };
}