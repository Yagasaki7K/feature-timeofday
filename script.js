window.setInterval(function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')

    var data = new Date() 
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `<strong>AGORA SÃO ${hora} HORAS E ${minutos} MINUTOS</strong><br><br>`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'img/morning.png'
        document.body.style.background = '#fdca93'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'img/day.png'
        document.body.style.background = '#3b77b3'
    } else {
        // BOA NOITE
        img.src = 'img/night.png'
        document.body.style.background = '#111728'
    }
})
