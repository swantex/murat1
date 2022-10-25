window.addEventListener('scroll', function () {
    let mountains = document.getElementById("navbarParalax");
    let value = window.scrollY;
    
    // console.log(value);
    mountains.style.top = value * 1.05 + 'px';
});