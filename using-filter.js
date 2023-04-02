const filterShortStateName = (states) => {
  return states.filter(state => state.length < 7);
}