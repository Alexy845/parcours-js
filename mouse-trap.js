let isInsideBox = false;

export function createCircle() {
    document.body.addEventListener('click', function (e) {

        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.top = `${e.pageY - 25}px`;
        circle.style.left = `${e.pageX - 25}px`;

        const box = document.querySelector('.box').getBoundingClientRect();
        if (e.pageX < box.left || e.pageX > box.right || e.pageY < box.top || e.pageY > box.bottom) {
            circle.style.backgroundColor = 'white';
            isInsideBox = false;
        } else {
            circle.style.backgroundColor = 'var(--purple)';
            isInsideBox = true;
        }

        document.body.appendChild(circle);
    });
}

export function moveCircle() {
    document.body.addEventListener('mousemove', function (e) {
        const circle = document.querySelector('.circle');
        if (circle) {
            const box = document.querySelector('.box').getBoundingClientRect();
            const circlePos = circle.getBoundingClientRect();
            if (circlePos.left > box.left && circlePos.right < box.right && circlePos.top > box.top && circlePos.bottom < box.bottom) {
                circle.style.top = `${e.pageY - 25}px`;
                circle.style.left = `${e.pageX - 25}px`;
                if (isInsideBox) {
                    if (circlePos.left === box.left || circlePos.right === box.right || circlePos.top === box.top || circlePos.bottom === box.bottom) {
                        circle.style.backgroundColor = 'var(--purple)';
                    } else {
                        circle.style.backgroundColor = 'white';
                    }
                }
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
