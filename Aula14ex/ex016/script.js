function contar(){
    var n_ini = Number(document.getElementById('num_inicio').value)
    var n_fim = Number(document.getElementById('num_fim').value)
    var n_pas = Number(document.getElementById('num_passo').value)
    var txt_res = '' 
    var t_res = document.getElementById('div_res')

    if ( n_ini == '' || n_fim == '' ) {
        t_res.innerHTML = 'Faltando Dados. Impossível contar'
    } else if (n_pas == 0) {
        t_res.innerHTML = 'Passo não pode ser zero!'
    } else {
        if (n_fim >= n_ini) {
            for(n_ini ; n_ini <= n_fim; n_ini += n_pas){
                txt_res += n_ini + ' &#128073 '
            }
        
            t_res.innerHTML = txt_res + ' &#127987 '
        } else { 
            for(n_ini ; n_ini >= n_fim; n_ini -= n_pas){
                txt_res += n_ini + ' &#128073 '
            }
        
            t_res.innerHTML = txt_res + ' &#127987 '
        }

    }
}