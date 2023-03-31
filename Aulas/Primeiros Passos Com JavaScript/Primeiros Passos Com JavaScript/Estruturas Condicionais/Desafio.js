/*
Você terá 5 variáveis. Sendo Elas:
 1- Preço do Etanol;
 2- Preço da Gasolina;
 3- O tipo de combustível que está no seu carro;
 4- Gasto médio de combustível do carro por KM;
 5- Distância em KM da viagem;
*/

const precoEtanol = 4.19;
console.log("O preço do litro do etanol é de " + precoEtanol + " reais.");

const precoGasolina = 5.47;
console.log("O preço do litro da gasolina é de " + precoGasolina + " reais.");

const kmPorLitros = 10;
console.log("O seu carro faz " + kmPorLitros + " Km por litro.");

const distanciaViagem = 429;
console.log("A distância da sua viagem é de " + distanciaViagem + " Kms.");

const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaViagem / kmPorLitros;

if (tipoCombustivel === 'Gasolina') {
    const custoViagem = litrosConsumidos * precoEtanol;
    console.log("O custo para fazer a sua viagem vai ser de: " + custoViagem.toFixed(2) + " Reais.");
} else {
    const custoViagem = litrosConsumidos * precoGasolina;
    console.log("O custo para fazer a sua viagem vai ser de: " + custoViagem.toFixed(2) + " Reais.");
}

