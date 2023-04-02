const filterShortStateNames = (states) => {
  return states.filter(state => state.length < 7);
}