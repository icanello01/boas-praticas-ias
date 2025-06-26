// index.js

// Importa módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

// Middleware para ler JSON no corpo das requisições
app.use(bodyParser.json());

// "Banco de dados" em memória
let produtos = [];

/**
 * Validação dos dados do produto
 */
function validarProduto(dados) {
  const { nome, preco, descricao } = dados;
  if (!nome || typeof nome !== 'string') return 'Nome é obrigatório e deve ser uma string.';
  if (preco === undefined || typeof preco !== 'number' || preco < 0) return 'Preço é obrigatório e deve ser um número positivo.';
  if (!descricao || typeof descricao !== 'string') return 'Descrição é obrigatória e deve ser uma string.';
  return null;
}

/**
 * Listar todos os produtos
 */
app.get('/produtos', (req, res) => {
  res.json(produtos);
});

/**
 * Criar um novo produto
 */
app.post('/produtos', (req, res) => {
  const erro = validarProduto(req.body);
  if (erro) return res.status(400).json({ erro });

  const novoProduto = {
    id: uuidv4(),
    nome: req.body.nome,
    preco: req.body.preco,
    descricao: req.body.descricao
  };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

/**
 * Editar um produto existente
 */
app.put('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const produto = produtos.find(p => p.id === id);
  if (!produto) return res.status(404).json({ erro: 'Produto não encontrado.' });

  const erro = validarProduto(req.body);
  if (erro) return res.status(400).json({ erro });

  produto.nome = req.body.nome;
  produto.preco = req.body.preco;
  produto.descricao = req.body.descricao;

  res.json(produto);
});

/**
 * Excluir um produto
 */
app.delete('/produtos/:id', (req, res) => {
  const { id } = req.params;
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ erro: 'Produto não encontrado.' });

  produtos.splice(index, 1);
  res.status(204).send();
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});