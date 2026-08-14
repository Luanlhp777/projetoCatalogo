# Frontend — Cadastro de Produtos com React

Repositório criado para registrar os estudos de desenvolvimento frontend utilizando **React e Vite**.

Nesta aula foi iniciada a construção da interface de um catálogo de produtos, com foco na criação de componentes, gerenciamento de estado e formulários controlados.

---

## Sobre o projeto

O projeto implementa a estrutura inicial de um frontend para cadastro de produtos.

Nesta etapa foi desenvolvido um formulário com os seguintes campos:

* Nome do produto
* Descrição
* Preço

O formulário utiliza estados do React para controlar os valores digitados pelo usuário.

---

## Tecnologias utilizadas

* React
* JavaScript
* JSX
* Vite
* CSS
* npm
* Git
* GitHub

---

## Conceitos praticados

* Componentes React
* JSX
* `useState`
* Formulários controlados
* Eventos
* `onChange`
* `onSubmit`
* `preventDefault()`
* Props
* Validação simples
* Manipulação de strings
* Conversão de valores
* Organização de componentes

---

## Estrutura do projeto

```text
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FormProduto.jsx
│   │   ├── Header.jsx
│   │   ├── ListaProduto.jsx
│   │   └── Produto.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## Componente principal

O arquivo:

```text
src/App.jsx
```

é responsável por montar a estrutura principal da aplicação.

Nesta etapa ele renderiza o componente:

```jsx
<FormProduto />
```

Estrutura simplificada:

```jsx
export default function App() {
  return (
    <main className="container">
      <FormProduto />
    </main>
  );
}
```

---

## FormProduto

O formulário foi separado no componente:

```text
src/components/FormProduto.jsx
```

Essa separação facilita a organização e reutilização do código.

---

## useState

O formulário utiliza o hook:

```javascript
useState
```

para armazenar os valores digitados.

Exemplo:

```javascript
const [nome, setNome] = useState("");
const [descricao, setDescricao] = useState("");
const [preco, setPreco] = useState("");
```

Cada campo possui:

* valor atual
* função responsável por atualizar o valor

---

## Inputs controlados

Os campos são controlados pelo estado do React.

Exemplo:

```jsx
<input
  type="text"
  value={nome}
  onChange={(evento) => setNome(evento.target.value)}
/>
```

Fluxo:

```text
Usuário digita
      ↓
onChange
      ↓
setNome()
      ↓
Estado atualizado
      ↓
Input atualizado
```

---

## Envio do formulário

O formulário utiliza:

```jsx
onSubmit={enviarFormulario}
```

A função responsável pelo envio começa com:

```javascript
evento.preventDefault();
```

Isso impede que o navegador recarregue a página ao enviar o formulário.

---

## Validação

Antes do cadastro é feita uma validação simples:

```javascript
if (!nome.trim() || !preco) {
  return;
}
```

Isso impede o envio quando:

* o nome estiver vazio
* o preço não tiver sido informado

---

## Preparação do produto

Os dados são organizados em um objeto:

```javascript
{
  nome: nome.trim(),
  descricao: descricao.trim(),
  preco: Number(preco)
}
```

O método:

```javascript
trim()
```

remove espaços desnecessários no início e no final dos textos.

O preço é convertido utilizando:

```javascript
Number(preco)
```

---

## Props

O componente recebe:

```javascript
aoCadastrar
```

através de props:

```javascript
export default function FormProduto({ aoCadastrar })
```

A intenção é permitir que o componente pai forneça uma função responsável por cadastrar o produto.

Exemplo:

```javascript
aoCadastrar({
  nome,
  descricao,
  preco
});
```

---

## Limpeza dos campos

Após o envio, os estados são redefinidos:

```javascript
setNome("");
setDescricao("");
setPreco("");
```

Com isso, os campos do formulário ficam vazios novamente.

---

## Componentes preparados

A pasta `components` possui:

```text
FormProduto.jsx
Header.jsx
ListaProduto.jsx
Produto.jsx
```

Nesta etapa, o `FormProduto.jsx` já possui implementação.

Os demais componentes estão preparados para a continuidade do projeto.

---

## Fluxo atual

```text
App
 ↓
FormProduto
 ↓
Usuário preenche os campos
 ↓
useState
 ↓
onSubmit
 ↓
Validação
 ↓
Objeto do produto
 ↓
aoCadastrar()
```

---

## Integração futura com o backend

Este frontend pode posteriormente consumir a API de produtos desenvolvida no projeto backend.

Fluxo esperado:

```text
React
   ↓
Formulário
   ↓
Requisição HTTP
   ↓
API Node.js + Express
   ↓
Cadastro do produto
```

---

## Como executar

Clone o repositório:

```bash
git clone https://github.com/Luanlhp777/frontend.git
```

Entre na pasta:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute em modo de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação.

---

## Scripts disponíveis

```bash
npm run dev
```

Executa o projeto em modo de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção.

```bash
npm run preview
```

Executa uma prévia da versão de produção.

```bash
npm run lint
```

Executa a análise estática do código.

---

## Objetivos da aula

* Criar um projeto frontend com React
* Utilizar Vite
* Criar componentes
* Trabalhar com JSX
* Utilizar `useState`
* Criar formulários controlados
* Capturar valores digitados
* Trabalhar com eventos
* Validar dados
* Entender o uso de props
* Preparar a interface para integração com uma API

---

## Próximas evoluções

O projeto poderá evoluir com:

* Implementação do componente `Header`
* Implementação de `Produto`
* Implementação de `ListaProduto`
* Armazenamento da lista de produtos
* Integração com API backend
* Requisições `GET`
* Requisições `POST`
* Uso de `fetch`
* Tratamento de erros
* Mensagens de sucesso
* Estilização da interface
* CRUD completo

---

## Autor

**Luan Araujo**

Estudante de Desenvolvimento de Sistemas

GitHub: `Luanlhp777`

---

Projeto acadêmico desenvolvido para prática de **React, componentes, useState e formulários controlados**.
