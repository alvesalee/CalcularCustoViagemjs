const precoGasolina = 5.30;
const precoEtanol = 3.50;
const tipoCombustivel = 'Gasolina';
const kmPorLitro = 7;
const distanciaKm = 100;

const litrosConsumindos = distanciaKm / kmPorLitro;
if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumindos * precoEtanol;
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = litrosConsumindos * precoGasolina;
    console.log(valorGasto.toFixed(2))
} 