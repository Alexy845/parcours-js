export const getArchitects = () => {
    const architects = Array.from(document.querySelectorAll('a'))
    const nonArchitects = Array.from(document.querySelectorAll(':not(a)'))
    return [architects, nonArchitects]
  }
  
  
  export const getClassical = () => {
    const [architects, nonArchitects] = getArchitects()
    const classicalArchitects = architects.filter(a => a.classList.contains('classical'))
    const nonClassicalArchitects = architects.filter(a => !a.classList.contains('classical'))
    return [classicalArchitects, [...nonClassicalArchitects, ...nonArchitects]]
  }
  
  export const getActive = () => {
    const [classicalArchitects, nonClassicalArchitects] = getClassical()
  
    console.log('classicalArchitects:', classicalArchitects)
    console.log('nonClassicalArchitects:', nonClassicalArchitects)
  
    const activeClassicalArchitects = classicalArchitects.filter(a => a.classList.contains('active'))
    const nonActiveClassicalArchitects = classicalArchitects.filter(a => !a.classList.contains('active'))
  
    console.log('activeClassicalArchitects:', activeClassicalArchitects)
    console.log('nonActiveClassicalArchitects:', nonActiveClassicalArchitects)
  
    return [activeClassicalArchitects, [...nonActiveClassicalArchitects, ...nonClassicalArchitects, ...nonArchitects]]
  }
  
  
  export const getBonannoPisano = () => {
    const classicalArchitects = document.querySelectorAll('.architect.classical.active:not(#BonannoPisano)')
    const remainingArchitects = Array.from(classicalArchitects).filter(a => a.classList.contains('active'))
    const targetArchitect = document.getElementById('BonannoPisano')
    return [targetArchitect, remainingArchitects]
  }
