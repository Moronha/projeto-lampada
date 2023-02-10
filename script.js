let lampadas = document.querySelectorAll('img');

function ligaDesliga(event) {
    if (event.currentTarget.getAttribute('src') == 'img/off.png') {
        event.currentTarget.src = 'img/on.png';
    } else {
        event.currentTarget.src = 'img/off.png';
    }

}

lampadas.forEach((lampada) => {
    lampada.addEventListener('click', ligaDesliga);

});