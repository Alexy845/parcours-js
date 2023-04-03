export const getArchitects = () => {
    const architects = []
    const nonArchitects = []
    const people = document.querySelectorAll('.person')
    people.forEach((person) => {
      if (person.classList.contains('architect')) {
        architects.push(person.querySelector('a'))
      } else {
        nonArchitects.push(person)
      }
    })
    return [architects, nonArchitects]
}
  
export const getClassical = () => {

}

export const getActive = () => {

}

export const getBonannoPisano = () => {

}
