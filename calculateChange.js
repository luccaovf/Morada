function calculateChange(valor) {
    const cedulas = [100, 50, 20, 10, 5, 2];
    let resultado = {};
    
    cedulas.forEach(cedula => {
      resultado[cedula] = Math.floor(valor / cedula);
      valor = valor % cedula;
    });
  
    return resultado;
  }
  
  module.exports = calculateChange;