function contar(){
    var n_ini = Number(document.getElementById('num_inicio').value)
    var n_fim = Number(document.getElementById('num_fim').value)
    var n_pas = Number(document.getElementById('num_passo').value)
    var txt_res = '' 
    var t_res = document.getElementById('div_res')

    if ( n_ini == '' || n_fim == '' ) { //value.length == 0  também funciona
        t_res.innerHTML = 'Faltando Dados. Impossível contar'
    } else if (n_pas == 0) {
        t_res.innerHTML = 'Passo não pode ser zero!'
    } else {
        if (n_fim >= n_ini) {
            //contagem crescente
            for(n_ini ; n_ini <= n_fim; n_ini += n_pas){  // seria melhor usar um indice (i = n_ini; i <= n_fim; i += n_pas) se eu tentar pegar o valor de n_ini de novo, ferrou!
                t_res.innerHTML += n_ini + ` \u{1F449} ` //' &#128073 ' // unicode para js \u{1F603}
            }
        
            t_res.innerHTML += ' &#127987 '
        } else { 
            //contagem regressiva
            for(n_ini ; n_ini >= n_fim; n_ini -= n_pas){
                t_res.innerHTML += n_ini + ' &#128073 '
            }
        
            t_res.innerHTML +=  ' &#127987 '
        }

    }
}