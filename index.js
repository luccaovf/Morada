const express = require('express');
const calculateChange = require('./calculateChange'); // Importar a função

const app = express();

app.use(express.json()); //json para resposta

//rota de api
app.post('/api/saque', (req, res) => {
  const { valor } = req.body;

  if (!valor || !Number.isInteger(valor) || valor <= 1) {
    return res.status(400).json({ error: "Valor inválido" });
  }

  try {
    const resultado = calculateChange(valor);
    res.json(resultado);
  } catch (e){
    res.json({ error: e.message });
  }
});

const PORT = 5000; 
app.listen(PORT, () => {//iniciando servidor
  console.log(`Servidor rodando na porta ${PORT}`);
});