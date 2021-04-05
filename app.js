

const heading = document.querySelector('h1');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    console.log('you clicked me');
});
btn.addEventListener('mousedown', function(){
    console.log('down');
});
btn.addEventListener('mouseup', function(){
    console.log('up');
});

heading.addEventListener('mouseenter', function(){
    heading.classList.add('blue');
});

