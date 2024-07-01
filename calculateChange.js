function calculateChange(valor) {
    const cedulas = [100, 50, 20, 10, 5, 2];
    let resultado = {};
    
    if(valor % 5 === 0) { //algoritmo guloso para valores divisiveis por 5
      cedulas.forEach(cedula => {
        resultado[cedula] = Math.floor(valor / cedula);
        valor = valor % cedula;
      });
   } else { //algoritmo programacao dinamica pra outros valores
    const n = cedulas.length;

    // dp[i] será o número mínimo de cédulas para valor i
    const dp = Array(valor + 1).fill(Infinity);
    //notas usadas
    const usedNotes = Array(valor + 1).fill(0);

    dp[0] = 0;

    for (let i = 1; i <= valor; i++) {
      for (let j = 0; j < n; j++) {
        if (i >= cedulas[j] && dp[i - cedulas[j]] + 1 < dp[i]) {
          dp[i] = dp[i - cedulas[j]] + 1;
          usedNotes[i] = cedulas[j];
        }
      }
    }

    // Se não for possível trocar o valor, dp[valor] será Infinity
    if (dp[valor] === Infinity) {
      throw new Error("Não foi possivel calcular o troco!");
    }

    // Reconstruir o resultado usando usedNotes
    cedulas.forEach(cedula => resultado[cedula] = 0);

    let remainingValue = valor;
    while (remainingValue > 0) {
      let note = usedNotes[remainingValue];
      resultado[note]++;
      remainingValue -= note;
    }
   }
  
    return resultado;
  }
  
  module.exports = calculateChange;