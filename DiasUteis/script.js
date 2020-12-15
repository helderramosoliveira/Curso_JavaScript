data_ini = document.getElementById('data_ini')
data_fim = document.getElementById('data_fim')
dias_uteis = document.getElementById('dias_uteis')
res = document.querySelector('div#res')
d_agora = new Date()

function carregar(){
    data_ini.value = ''
    data_fim.value = ''
    dias_uteis.value = ''

    //YYYY-MM-DD
    data_ini.value = `${d_agora.getFullYear()}-${d_agora.getMonth() + 1}-${d_agora.getDate()}`
    data_ini.focus()
}

function calcula_dias(d_ini, d_fim){
    if (d_fim.getTime() > d_ini.getTime()){
        //calcula a diferença entre as datas usando getTime()
        diff =  Math.abs(d_fim.getTime() - d_ini.getTime())
    } else {
        //calcula a diferença entre as datas usando getTime()
        diff =  Math.abs(d_ini.getTime() - d_fim.getTime())
        diff *= -1
    }

    // devolve o valor para o formado de dias (milissegundos para dias)
    return (Math.ceil(diff / (1000 * 60 * 60 * 24)))
}

function calcular(){    
    //https://metring.com.br/diferenca-entre-datas-em-javascript
    var d_ini = new Date(data_ini.value)
    var d_fim = new Date(data_fim.value) 
   
    //caso a data final seja preenchida:
    if (data_fim.value != ''){  
        days = calcula_dias(d_ini, d_fim)
        res.innerHTML = `Total de ${days} dias corridos`

        return
    }

    if (dias_uteis.value != ''){
        //calcular dias uteis
    } 

}