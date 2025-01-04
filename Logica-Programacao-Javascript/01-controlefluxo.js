// Controle de fluxo e condicionais
const numero1 = 100
const numero2 = 200
const numeroCorreto = 30
const stringNumero = '30'

if (numero1 > 1)
    console.log('Este número é maior que 1')

else {
    console.log ('Este número é menor ou igual a 200')
}

if (numero2 <= numero1) {
    console.log(`${numero2} é menor ou igual ao número ${numero1}`)
}

if (numeroCorreto == stringNumero){
    console.log ('Os números são iguais em valor apenas (podem ter ocorrido coerções implícitas)')
}

if (numero1 === 200) {
    console.log('Este numero é igual a 200')

}