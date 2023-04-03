export const build = () => {
    const arr = []
    const brick = document.createElement('div')
    brick.setAttribute('id', 'brick')
    const break1 = document.createElement('div')
    break1.setAttribute('id', 'break')
    arr.push(brick)
    arr.push(break1)
    return arr
}

export const repair = () => {
    const arr = []
    const brick = document.getElementById('brick')
    const break1 = document.getElementById('break')
    arr.push(brick)
    arr.push(break1)
    return arr
}

export const destroy = () => {
    const arr = []
    const brick = document.getElementById('brick')
    const break1 = document.getElementById('break')
    brick.remove()
    break1.remove()
    arr.push(brick)
    arr.push(break1)
    return arr
}

