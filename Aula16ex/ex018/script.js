var arr = []

//------------------------------------------------
function isNumero(n){
//------------------------------------------------
    if (Number(n) >=1 && Number(n)<= 100){
        return true
    }
    return false
}

//------------------------------------------------
function inLista(n, l){
//------------------------------------------------
    if (l.indexOf(Number(n)) == -1){
        return false
    }
    return true
}

//------------------------------------------------
function adicionar(){ 
//------------------------------------------------
    document.getElementById('res').innerHTML=''
    var n_number = document.getElementById('number')
    
    if (isNumero(n_number.value) && !inLista(n_number.value,arr)){
        arr.push(Number(n_number.value))
        
        var opt = document.createElement('option')
        opt.innerHTML = `O valor ${n_number.value} foi informado`
        document.getElementById('sel').add(opt)
    } else {
        alert('Número inválido ou já encontrado na lista')
    }

    n_number.value = ''
    document.getElementById('number').focus()
}

//------------------------------------------------
function finalizar(){
//------------------------------------------------
    if (arr.length == 0) {
        alert('Lista Vazia, adicione valores')
        return false
    }
    v_div = document.getElementById('res')
    v_div.innerHTML = `<p>Ao todo, temos ${arr.length} números cadastrados</p>`
   
    arr.sort()
    v_div.innerHTML += `<p>O maior valor informado foi ${arr[arr.length -1]} </p>`
    v_div.innerHTML += `<p>O menor valor informado foi ${arr[0]} </p>`
    
    var soma = 0
    for ( c=0; c<arr.length; c++){
        soma += arr[c]
    }
    v_div.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`

    var media = soma / arr.length
    v_div.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

}