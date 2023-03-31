/* 3 Variáveis:
1 - Preço do litro do combustível;
2 - Consumo médio de combustível por KM;
3 - Distância da viagem em KM.

*/

const precoCombustivel = 5.47;
console.log("O preço do litro do combustível é: " + precoCombustivel + ".");

const kmPorLitros = 10;
console.log("O seu carro faz " + kmPorLitros + " Km por litro.");

const distanciaViagem = 429;
console.log("A distância da sua viagem é de " + distanciaViagem + " Kms.");

const custoViagem = (distanciaViagem / kmPorLitros) * precoCombustivel;
console.log("O custo para fazer a sua viagem vai ser de: " + custoViagem.toFixed(2) + " Reais.");