# Projeto Catálogo Full Stack

Projeto acadêmico desenvolvido para praticar a construção de uma aplicação **Full Stack**, integrando um frontend desenvolvido com React a uma API backend construída com Node.js e Express.

O projeto está sendo desenvolvido de forma incremental durante as aulas, com novas funcionalidades sendo adicionadas conforme o avanço dos estudos.

---

## Sobre o projeto

O objetivo é desenvolver um sistema de catálogo de produtos com separação entre:

* Frontend
* Backend
* API REST
* Regras de negócio
* Gerenciamento de produtos

A aplicação está organizada em um único repositório contendo os dois projetos.

---

## Estrutura

```text
projetoCatalogo/
├── backend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

# Backend

O backend foi desenvolvido utilizando:

* Node.js
* Express
* JavaScript
* API REST

Atualmente possui estrutura organizada em:

```text
backend/src/
├── controllers/
├── data/
├── routes/
└── app.js
```

Entre as funcionalidades já estudadas estão:

* Listagem de produtos
* Cadastro de produtos
* Rotas HTTP
* Controllers
* Validação de dados
* Respostas JSON
* Códigos de status HTTP

Endpoint principal:

```text
/api/produtos
```

---

# Frontend

O frontend foi desenvolvido utilizando:

* React
* JavaScript
* JSX
* Vite
* CSS

Entre os conceitos praticados estão:

* Componentes
* `useState`
* Formulários controlados
* Eventos
* Props
* Validação de campos
* Organização da interface

A estrutura inclui componentes relacionados ao cadastro e exibição de produtos.

---

## Arquitetura

O objetivo do projeto é estabelecer a seguinte comunicação:

```text
Usuário
   ↓
Frontend React
   ↓
Requisição HTTP
   ↓
API Node.js + Express
   ↓
Processamento
   ↓
Resposta JSON
   ↓
Frontend
```

---

## Tecnologias

### Frontend

* React
* Vite
* JavaScript
* JSX
* CSS

### Backend

* Node.js
* Express
* JavaScript
* API REST

### Versionamento

* Git
* GitHub

---

## Como executar

Clone o repositório:

```bash
git clone https://github.com/Luanlhp777/projetoCatalogo.git
```

Entre na pasta:

```bash
cd projetoCatalogo
```

---

## Backend

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Execute o servidor:

```bash
npm run dev
```

O backend será executado localmente.

Depois volte para a raiz:

```bash
cd ..
```

---

## Frontend

Entre na pasta:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

O Vite informará no terminal o endereço local da aplicação.

---

## Fluxo de desenvolvimento

Durante as aulas, o projeto seguirá evoluindo com novas funcionalidades.

Fluxo básico utilizado para salvar as alterações:

```bash
git status
git add .
git commit -m "Descrição da alteração"
git push origin main
```

---

## Funcionalidades atuais

Nesta fase do projeto estão sendo trabalhados:

* Estrutura do frontend
* Estrutura do backend
* Cadastro de produtos
* Listagem de produtos
* Formulários
* API REST
* Rotas
* Controllers
* Comunicação entre as camadas

---

## Próximas evoluções

O projeto poderá receber:

* Integração completa entre frontend e backend
* Requisições com `fetch`
* Listagem dinâmica de produtos
* Cadastro através da API
* Atualização de produtos
* Exclusão de produtos
* CRUD completo
* Tratamento de erros
* Banco de dados
* Persistência de informações
* Melhorias na interface

---

## Objetivo acadêmico

O projeto tem como objetivo consolidar conceitos de desenvolvimento Full Stack, trabalhando de forma prática a comunicação entre uma interface React e uma API desenvolvida com Node.js e Express.

---

## Autor

**Luan Araujo**

Estudante de Desenvolvimento de Sistemas

GitHub: `Luanlhp777`

---

Projeto acadêmico em desenvolvimento.
