export const getArchitects = () => {
    const architects = []
    const notArchitects = []
    const people = document.querySelectorAll('a')
  
    for (const person of people) {
      if (person.classList.contains('architect')) {
        architects.push(person)
      } else {
        notArchitects.push(person)
      }
    }
  
    return [architects, notArchitects]
  }
  
  
export const getClassical = () => {

}

export const getActive = () => {

}

export const getBonannoPisano = () => {

}
