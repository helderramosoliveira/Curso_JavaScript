let num = [5, 8, 2, 9, 3]

//num.push(1)         //adiciona o valor ao proximo indice disponível do array
//num.length          //saber o comprimento do array
//num.sort()          //organiza os valores do array em ordem crescente 2,3,5,8,9
//num.indexOf(pesq)   //retorna o indice em que esse valor se encontra (select dentro do array) Se não encontrar retorna -1

console.log(`Nosso vetor é ${num}`)
console.log('=================================================')
num.sort()

console.log(`Nosso vetor mudou para ${num}`)
console.log('=================================================')
num.push(1)

console.log(`Nosso agora é ${num}`)
console.log('=================================================')
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor e ${num[0]}`)
console.log('=================================================')

for ( i=0 ; i<num.length ; i++ ){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log('=================================================')

//jeito mais simples ainda e so funciona para arrays
for (let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log('=================================================')

pesq = 9
// num.indexOf(pesq) //retorna o indice em que esse valor se encontra (select dentro do array) Se não encontrar retorna -1

if (num.indexOf(pesq) != -1){ 
    console.log(`O número ${pesq} está na posição ${num.indexOf(pesq)}`)
} else {
    console.log(`O valor ${pesq} não existe no array`)
}