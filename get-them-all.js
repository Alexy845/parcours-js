export const getArchitects = () => {
    const architects = Array.from(document.querySelectorAll('a'))
    const nonArchitects = Array.from(document.querySelectorAll(':not(a)'))
    return [architects, nonArchitects]
  }
  
  export const getClassical = () => {
    const classicalArchitects = Array.from(document.querySelectorAll('.classical'))
    const nonClassicalArchitects = Array.from(document.querySelectorAll(':not(.classical)'))
    return [classicalArchitects, nonClassicalArchitects]
  }
  
  export const getActive = () => {
    const activeClassicalArchitects = Array.from(document.querySelectorAll('.classical.active'))
    const nonActiveClassicalArchitects = Array.from(document.querySelectorAll('.classical:not(.active)'))
    return [activeClassicalArchitects, nonActiveClassicalArchitects]
  }
  
  export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano')
    const activeClassicalArchitectsExceptBonanno = Array.from(document.querySelectorAll('.classical.active:not(#BonannoPisano)'))
    return [bonannoPisano, activeClassicalArchitectsExceptBonanno]
  }
  
