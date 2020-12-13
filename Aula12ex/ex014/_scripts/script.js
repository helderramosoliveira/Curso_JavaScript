function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

//    hora = 18

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12) {
        img.src = "_imagens/manha.png"
        document.body.style.background = '#8A926D'
    } else if (hora < 18) {
        img.src = "_imagens/tarde.png"
        document.body.style.background = '#9d6568'
    } else {
        img.src = "_imagens/noite.png"
        document.body.style.background = '#062343'
    }
}