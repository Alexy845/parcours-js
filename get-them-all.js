export const getArchitects = () => {
    const archi = Array.from(document.querySelectorAll('a'))
    const nonArchi = Array.from(document.querySelectorAll(':not(a)'))
    return [archi, nonArchi]
  }
  
  export const getClassical = () => {
    const classicalArchi = Array.from(document.querySelectorAll('.classical'))
    const nonClassicalArchi = Array.from(document.querySelectorAll(':not(.classical)'))
    return [classicalArchi, nonClassicalArchi]
  }
  
  export const getActive = () => {
    const activeClassicalArchi = Array.from(document.querySelectorAll('.classical.active'))
    const nonActiveClassicalArchi = Array.from(document.querySelectorAll('.classical:not(.active)'))
    return [activeClassicalArchi, nonActiveClassicalArchi]
  }
  
  export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano')
    const activeClassicalArchiBonanno = Array.from(document.querySelectorAll('.classical.active:not(#BonannoPisano)'))
    return [bonannoPisano, activeClassicalArchiBonanno]
  }
  
