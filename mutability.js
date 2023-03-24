const clone1 = Object.assign({}, person);
const clone2 = {...person};
const samePerson = person;

person.age++;
person.country = 'FR';