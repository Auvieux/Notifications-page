const marcar = document.querySelector('.header_a')

marcar.addEventListener('click', noLeido)

function noLeido() {
    const noLeidos = document.querySelectorAll('.sin-leer')
    const punto = document.querySelectorAll('.punto')
    noLeidos.forEach(noti => noti.classList.remove('sin-leer'))
    punto.forEach(noti => noti.classList.remove('punto'))
}