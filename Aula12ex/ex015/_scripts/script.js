function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano ){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')                // <img id='foto>
        
        var genero = '' 
        if (fsex[0].checked) {          //checar qual radio esta checked
            genero = 'Homem'
            if (idade <= 2){
                img.setAttribute('src', '_imagens/baby.png')
            } else if (idade <= 10){
                img.setAttribute('src', '_imagens/menino.png')
            } else if (idade <= 21) {
                img.setAttribute('src', '_imagens/jovemhomem.png')
            } else if (idade <= 50) {
                img.setAttribute('src', '_imagens/adultohomem.png')
            } else {
               img.setAttribute('src', '_imagens/idosohomem.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade <= 2){
                img.setAttribute('src', '_imagens/baby.png')
            } else if (idade <= 10){
                img.setAttribute('src', '_imagens/menina.png')
            } else if (idade <= 21) {
                img.setAttribute('src', '_imagens/jovemmulher.png')
            } else if (idade <= 50) {
                img.setAttribute('src', '_imagens/adultomulher.png')
            } else {
                img.setAttribute('src', '_imagens/idosomulher.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}