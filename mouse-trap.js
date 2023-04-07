export function createCircle() {
    document.body.addEventListener('click', function (e) {

        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.top = `${e.pageY - 25}px`;
        circle.style.left = `${e.pageX - 25}px`;
        circle.style.backgroundColor = 'white';
        document.body.appendChild(circle);
    });
}

export function moveCircle() {
    document.body.addEventListener('mousemove', function (e) {
        const circle = document.querySelector('.circle');
        if (circle) {
            circle.style.top = `${e.pageY - 25}px`;
            circle.style.left = `${e.pageX - 25}px`;

            const box = document.querySelector('.box').getBoundingClientRect();
            const circlePos = circle.getBoundingClientRect();
            if (circlePos.left > box.left && circlePos.right < box.right && circlePos.top > box.top && circlePos.bottom < box.bottom) {
                circle.style.backgroundColor = 'var(--purple)';
            } else {
                circle.style.backgroundColor = 'white';
            }
        }
    });

}

export function setBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    document.body.appendChild(box);
    const objetRect = box.getBoundingClientRect();
    console.log(objetRect);

}