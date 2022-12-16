window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    console.log(offset);

    if (offset > 200 && offset < 300) {
        
    } else if (offset > 300 && offset < 400) {

    }
});

function displayJumbotron(jumbotronID, displayType) {
    const j = document.getElementById(jumbotronID);
    setInterval(async () => {
        if (displayType == 'grid' || displayType == 'flex') {
            j.style.display = 'block';
        } 
    }, 1000);
}

