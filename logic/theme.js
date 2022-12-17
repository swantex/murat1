try {
    const darkElements = [
        document.body,
        document.getElementById('first-jumbo'),
        document.getElementById(
            'projects'
        )
    ]
    const variedElements = [
        document.getElementById('noob-navbar'),
        document.getElementById('part-2'),
        document.getElementById('newsletter')
    ]
} catch (e) {
    // since the elements don't exist, hide the button
    try {
        const darkModeButton = document.getElementById('dark-mode-button');
        darkModeButton.style.display = 'none';
    } catch (e) {
        // wow... our button doesn't even exist
        // FIXME make sure this doesn't happen

    }
}

let darkMode = true;

function toggleMode() {
    if (darkMode) {
        darkElements.forEach(function (element) {
            element.classList.add('light-mode');
        });
        variedElements.forEach(function (element) {
            element.classList.add('varied-light-mode');
        });

        darkMode = false;
    } else {
        darkElements.forEach(function (element) {
            element.classList.remove('light-mode');
        });
        variedElements.forEach(function (element) {
            element.classList.remove('varied-light-mode');
        });
        darkMode = true;
    }
    console.log(darkMode)
}