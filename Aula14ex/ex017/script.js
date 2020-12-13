function calcular(){
    var num = document.getElementById('number').value
    var sel = document.getElementById('res')

    sel.innerHTML = ''
//    for (i=0; i<=9; i++){          // NAO PRECISA FAZER ISSO
//        sel.remove('opt_res')
//    }    

    if (num == ''){
        alert('o Número não pode ser nulo')
        
        //voltando ao padrao
        var opt = document.createElement('option')
        opt.setAttribute('id', 'opt_res')
        opt.innerHTML = 'Digite um numero acima'
        sel.add(opt)

    } else {
        for (var i = 0; i <= 9; i++) {
            var soma = Number(num) * i 
            
            var opt = document.createElement('option')
            opt.setAttribute('id', 'opt_res')
            opt.setAttribute('value', i )

            opt.innerHTML = `${num} x ${i} = <strong>${soma}</strong>` //aqui em vez de soma eu poderia usar ${num*i}

           sel.add(opt)
        }
        
    }
}