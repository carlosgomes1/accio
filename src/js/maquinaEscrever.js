function typeWrite( element ) {
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach((letra, i) => {
        setTimeout(function() {
            element.innerHTML += letra
        }, 120 * i)
    })
}

const title = document.querySelector('h1')

typeWrite(title)