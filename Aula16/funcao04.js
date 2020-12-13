// 5! = 5 * 4 * 3 * 2 * 1 = 120

function fatorial(n){
    let fat = 1

    for (c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))


//==============================================
//recursiva
// 5! = 5 * 4!

// n! = n * (n-1)!
// exceto 1! = 1


function fatorial2(n){
    if (n == 1) {
        return 1 ///exceto 1! = 1
    } else {
        return n * fatorial2(n -1)
    }
}

console.log(fatorial2(5))