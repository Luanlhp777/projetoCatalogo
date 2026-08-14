# Backend — Catálogo de Produtos com Node.js e Express

Repositório criado para registrar os estudos de desenvolvimento backend utilizando **Node.js e Express**.

Nesta aula foi desenvolvida a estrutura inicial de uma API para um catálogo de produtos, aplicando separação de responsabilidades entre **rotas, controllers e dados**.

---

## Sobre o projeto

A aplicação implementa uma API simples para gerenciamento de produtos.

Nesta etapa, foram desenvolvidas funcionalidades para:

* Listar produtos cadastrados
* Cadastrar novos produtos
* Receber dados em formato JSON
* Validar campos obrigatórios
* Gerar IDs automaticamente
* Retornar códigos de status HTTP adequados
* Organizar o backend em diferentes camadas

Os dados ainda são armazenados temporariamente em memória e são perdidos quando o servidor é reiniciado.

---

## Tecnologias utilizadas

* JavaScript
* Node.js
* Express
* npm
* Git
* GitHub

---

## Conceitos praticados

* Desenvolvimento backend
* API REST
* Node.js
* Express
* Rotas
* Controllers
* Separação de responsabilidades
* `express.Router()`
* `express.json()`
* Métodos HTTP
* `GET`
* `POST`
* `req.body`
* `res.json()`
* `res.status()`
* Validação de dados
* Status HTTP `200`, `201` e `400`
* CommonJS
* `require()`
* `module.exports`
* Dados temporários em memória

---

## Estrutura do projeto

```text
backend/
├── src/
│   ├── controllers/
│   │   └── produtoController.js
│   │
│   ├── data/
│   │   └── produtos.js
│   │
│   ├── routes/
│   │   └── produtoRoutes.js
│   │
│   └── app.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## Organização da aplicação

O projeto foi dividido em diferentes responsabilidades:

```text
app.js
   ↓
routes
   ↓
controllers
   ↓
data
```

### `app.js`

Responsável por:

* criar a aplicação Express
* configurar middlewares
* registrar as rotas
* iniciar o servidor

### `routes/`

Responsável por definir os endpoints disponíveis na API.

### `controllers/`

Responsável pela lógica executada quando uma rota é acessada.

### `data/`

Responsável, nesta etapa, por armazenar os produtos temporariamente em memória.

---

## Servidor Express

O servidor é criado utilizando:

```javascript
const express = require("express");

const app = express();
const PORTA = 3000;
```

Para permitir o recebimento de JSON:

```javascript
app.use(express.json());
```

A rota dos produtos é registrada através de:

```javascript
app.use("/api/produtos", produtoRoutes);
```

O servidor é iniciado com:

```javascript
app.listen(PORTA, () => {
    console.log(`Servidor executando em http://localhost:${PORTA}`);
});
```

---

## Rotas de produtos

As rotas foram separadas no arquivo:

```text
src/routes/produtoRoutes.js
```

Foi utilizado:

```javascript
const router = express.Router();
```

As rotas disponíveis são:

```javascript
router.get("/", listarProdutos);
router.post("/", cadastrarProduto);
```

Como o prefixo `/api/produtos` foi definido no `app.js`, os endpoints finais são:

```text
GET  /api/produtos
POST /api/produtos
```

---

## GET — Listar produtos

A rota:

```text
GET /api/produtos
```

retorna todos os produtos cadastrados.

Controller:

```javascript
function listarProdutos(req, res) {
    res.json(produtos);
}
```

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nome": "Notebook",
    "descricao": "Notebook para estudos e programação",
    "preco": 3500
  },
  {
    "id": 2,
    "nome": "Mouse",
    "descricao": "Mouse USB",
    "preco": 80
  }
]
```

---

## POST — Cadastrar produto

A rota:

```text
POST /api/produtos
```

permite cadastrar um novo produto.

Exemplo de JSON enviado:

```json
{
  "nome": "Monitor",
  "descricao": "Monitor para computador",
  "preco": 900
}
```

Os dados são recebidos através de:

```javascript
const { nome, descricao, preco } = req.body;
```

---

## Validação

Antes de cadastrar um produto, a aplicação verifica se `nome` e `preco` foram informados:

```javascript
if (!nome || preco === undefined) {
    return res.status(400).json({
        mensagem: "Nome e preço são obrigatórios."
    });
}
```

Caso algum desses campos esteja ausente, a API retorna:

```text
400 Bad Request
```

---

## Criação do produto

Após a validação, um novo objeto é criado:

```javascript
const novoProduto = {
    id: produtos.length > 0
        ? produtos[produtos.length - 1].id + 1
        : 1,
    nome,
    descricao: descricao || "",
    preco: Number(preco)
};
```

O produto recebe:

* ID automático
* Nome
* Descrição
* Preço convertido para número

Depois é adicionado ao array:

```javascript
produtos.push(novoProduto);
```

---

## Status 201 — Created

Após o cadastro, a API responde:

```javascript
res.status(201).json(novoProduto);
```

O código:

```text
201 Created
```

indica que um novo recurso foi criado com sucesso.

---

## Dados temporários

Nesta etapa ainda não existe integração com banco de dados.

Os produtos ficam armazenados em:

```text
src/data/produtos.js
```

Exemplo:

```javascript
const produtos = [
    {
        id: 1,
        nome: "Notebook",
        descricao: "Notebook para estudos e programação",
        preco: 3500
    }
];
```

Como os dados ficam apenas na memória da aplicação:

> Ao reiniciar o servidor, novos produtos cadastrados durante a execução são perdidos.

Esse armazenamento temporário permite estudar primeiro a arquitetura da API antes da integração com um banco de dados.

---

## Fluxo da aplicação

```text
Cliente
   ↓
Requisição HTTP
   ↓
app.js
   ↓
produtoRoutes.js
   ↓
produtoController.js
   ↓
produtos.js
   ↓
Resposta JSON
```

Exemplo de cadastro:

```text
POST /api/produtos
        ↓
produtoRoutes
        ↓
cadastrarProduto()
        ↓
Validação
        ↓
Criação do objeto
        ↓
produtos.push()
        ↓
201 Created
```

---

## Como executar

Clone o repositório:

```bash
git clone https://github.com/Luanlhp777/backend.git
```

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Execute em modo de desenvolvimento:

```bash
npm run dev
```

Ou execute normalmente:

```bash
npm start
```

O servidor estará disponível em:

```text
http://localhost:3000
```

---

## Endpoints

| Método | Endpoint        | Função            |
| ------ | --------------- | ----------------- |
| `GET`  | `/api/produtos` | Listar produtos   |
| `POST` | `/api/produtos` | Cadastrar produto |

---

## Exemplo de cadastro

### Requisição

```http
POST /api/produtos
Content-Type: application/json
```

```json
{
  "nome": "SSD",
  "descricao": "SSD 1 TB",
  "preco": 450
}
```

### Resposta

```json
{
  "id": 4,
  "nome": "SSD",
  "descricao": "SSD 1 TB",
  "preco": 450
}
```

Status:

```text
201 Created
```

---

## Objetivos da aula

* Evoluir a criação de APIs com Express
* Organizar um projeto backend
* Separar rotas e controllers
* Trabalhar com dados temporários
* Criar endpoints REST
* Utilizar `GET` e `POST`
* Receber JSON através do `req.body`
* Validar dados recebidos
* Trabalhar com códigos de status HTTP
* Compreender separação de responsabilidades

---

## Próximas evoluções

A estrutura atual permite evoluir o projeto futuramente com:

* Busca de produto por ID
* Atualização de produtos com `PUT`
* Exclusão com `DELETE`
* Validações mais completas
* Tratamento de erros
* Middlewares
* Banco de dados
* Models
* Variáveis de ambiente
* CRUD completo
* Integração com front-end

---

## Autor

**Luan Araujo**

Estudante de Desenvolvimento de Sistemas

GitHub: `Luanlhp777`

---

Projeto acadêmico desenvolvido para prática de **Node.js, Express, APIs REST e organização de aplicações backend**.
