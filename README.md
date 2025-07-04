# API de Gerenciamento de Produtos

## Descrição Geral

Esta API permite o gerenciamento completo de produtos, incluindo cadastro, atualização, listagem, consulta e remoção. Ideal para sistemas de e-commerce, inventário ou qualquer aplicação que necessite de controle de produtos.

## Objetivos

- Facilitar o gerenciamento de produtos de forma simples e segura.
- Permitir integração com diferentes sistemas.
- Garantir escalabilidade e manutenção facilitada.

## Funcionalidades

- Cadastro de novos produtos.
- Listagem de todos os produtos.
- Consulta de produto por ID.
- Atualização de informações de produtos.
- Remoção de produtos.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT para autenticação

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. Acesse a pasta do projeto:
    ```bash
    cd seu-repositorio
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Configure as variáveis de ambiente no arquivo `.env`.
5. Inicie o servidor:
    ```bash
    npm start
    ```

## Endpoints

| Método | Endpoint         | Descrição                  |
|--------|------------------|---------------------------|
| GET    | /produtos        | Lista todos os produtos   |
| GET    | /produtos/:id    | Consulta produto por ID   |
| POST   | /produtos        | Cadastra novo produto     |
| PUT    | /produtos/:id    | Atualiza produto por ID   |
| DELETE | /produtos/:id    | Remove produto por ID     |

## Exemplos de Requisições

### Cadastro de Produto

**POST /produtos**

```json
{
  "nome": "Camiseta",
  "descricao": "Camiseta 100% algodão",
  "preco": 49.90,
  "estoque": 100
}
```

**Resposta:**
```json
{
  "id": "60f7c2b5e1b1c8a1b8e4d123",
  "nome": "Camiseta",
  "descricao": "Camiseta 100% algodão",
  "preco": 49.90,
  "estoque": 100,
  "criadoEm": "2024-06-01T12:00:00Z"
}
```

### Listagem de Produtos

**GET /produtos**

**Resposta:**
```json
[
  {
     "id": "60f7c2b5e1b1c8a1b8e4d123",
     "nome": "Camiseta",
     "descricao": "Camiseta 100% algodão",
     "preco": 49.90,
     "estoque": 100
  }
]
```

---

Para mais detalhes, consulte a documentação completa ou abra uma issue.
