let amigo = {
    nome:'José',
    sexo:'M',
    peso: 85.4,
    egordar(p){
        console.log('Engordou')
        this.peso += p
    }
}

console.log(typeof amigo)
console.log(`O ${amigo.nome} pesa ${amigo.peso}kg`)
amigo.egordar(2)
console.log(`O ${amigo.nome} pesa ${amigo.peso}kg`)