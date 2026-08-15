import { useState } from "react";

function FormProduto({ aoCadastrar }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [erro, setErro] = useState(""); // Erro para validar produto

  function enviarFormulario(evento) {
    evento.preventDefault();

    // Erro para validar produto
    if (!nome.trim()) {
      setErro("Informe o nome do produto.");
      return;
    }

    if (!preco || Number(preco) <= 0) {
      setErro("O preço deve ser maior que zero.");
      return;
    }

    setErro("");

    aoCadastrar({
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco: Number(preco)
    });

    setNome("");
    setDescricao("");
    setPreco("");
  }

  return (
    <form className="formulario" onSubmit={enviarFormulario}>
      <h2>Novo produto</h2>

      <label>
        Nome
        <input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Ex.: Teclado"
        />
      </label>

      <label>
        Descrição
        <input
          type="text"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          placeholder="Descrição do produto"
        />
      </label>

      <label>
        Preço
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={preco}
          onChange={(evento) => setPreco(evento.target.value)}
          placeholder="0,00"
        />
      </label>

      {/* Erro para validar produto */}
      {erro && <p className="mensagem erro">{erro}</p>}

      <button type="submit">Cadastrar produto</button>
    </form>
  );
}

export default FormProduto;
