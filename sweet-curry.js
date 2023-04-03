function mult2(x) {
    return function(y) {
        return x * y;
    }
}

function add3(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
  }
  

function sub4(x) {
    return function(y) {
        return function(z) {
            return function(a) {
                return x - y - z - a;
            }   
        }
    }
}