var animateButton = function(e) {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');

    setTimeout(function(){
        e.target.classList.remove('animate');
    }, 700);
    e.target.classList.remove('animate');
    e.target.classList.add('animate');

    setTimeout(function(){
        e.target.classList.remove('animate');
    }, 700);
}

let className = document.getElementsByClassName('confettiButton');
for (let i = 0; i < className.length; i++) {
    className[i].addEventListener('click', animateButton, false);
}