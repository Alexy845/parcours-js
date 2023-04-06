export function createCircle(){
    document.body.addEventListener('click', function(e){
        const pageX = e.pageX;
        const pageY = e.pageY;
        const circle = document.createElement('div');
        circle.style.position = 'absolute';
        circle.style.top = pageY + 'px';
        circle.style.left = pageX + 'px';
        circle.style.width = '50px';
        circle.style.height = '50px';
        circle.style.borderRadius = '50%';
        circle.style.backgroundColor = 'white';
        document.body.appendChild(circle);
    });
}

export function moveCircle(){

}

export function setBox(){
    
}