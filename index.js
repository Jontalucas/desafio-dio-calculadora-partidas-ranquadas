function calcularRanque(vitorias, derrotas){
    saldo = vitorias - derrotas;
    if (saldo <= 10) {
        ranque = "Ferro"
    } else if (saldo <= 20){
        ranque = "Bronze"
    } else if (saldo <= 50){
        ranque = "Prata"
    } else if (saldo <= 80){
        ranque = "Ouro"
    } else if (saldo <= 90){
        ranque = "Diamante"
    }else if (saldo <= 100){
        ranque = "Lendário"
    } else {
        ranque = "Imortal"
    }
    return [saldo, ranque]
}
const prompt = require("prompt-sync")({ sigint: true })
const vitorias = prompt("Numero de vitorias: ")
const derotas = prompt("Numero de derrotas: ")

const ranqueSaldo = calcularRanque(vitorias, derotas)

console.log("O Herói tem de saldo de **" + ranqueSaldo[0] + "** está no nível de **"+ ranqueSaldo[1] +"**")