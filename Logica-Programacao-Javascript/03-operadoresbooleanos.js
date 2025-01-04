//Operadores Booleanos, Lógica Booleana

console.log('Exemplo de uso de condicionais')

if (true){
    console.log('Sempre aparecerei')
}

if (false){
    console.log('Nunca aparecerei')
}

const numero1 = 100
const numero2 = 20

console.log(numero1 > numero2) //true
console.log(numero1 < numero2) //false
console.log(numero1 == '100') //true
console.log(numero1 === '100') //false

console.log('-> || é OU (verdadeiro se uma condição for verdadeira) <-')

// OR/ou: ||
// AND/e: &&

//expressões com OU || sempre retornam verdadeiro...
//a menos que TODAS as expressões sejam FALSAS.

console.log(true || true)
console.log(true || false)
console.log(false || false)

console.log('&& é E (verdadeiro se ambas forem verdadeiras')

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log('Exemplo de uso de operadores lógicos com múltiplas condições')

console.log(1 < -50 || 300 < 5 || 10 > 60)
console.log(1 < -50 || 300 < 5 || 10 > 60 || 90 > 60 )



