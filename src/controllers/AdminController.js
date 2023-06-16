const express = require('express');
const router = express.Router();

// Rota GET para "/admin/users"
router.get('/admin/users', (req, res) => {
  // Função de retorno de chamada da rota "/admin/users"
  // Aqui você pode adicionar a lógica para lidar com a solicitação GET para "/admin/users"
  // e enviar uma resposta apropriada para o cliente.
  return res.json({}); // Retorna uma resposta JSON vazia
});

module.exports = router;