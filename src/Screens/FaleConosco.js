import React from 'react';
import '../css/FaleConosco.css';

function FaleConosco() {
  return (
    <div className="fale-conosco">
      <h1>Fale Conosco</h1>
      <form>
        <label>
          Nome:
          <input type="text" placeholder="Digite seu nome" required />
        </label>
        <label>
          Email:
          <input type="email" placeholder="Digite seu email" required />
        </label>
        <label>
          Mensagem:
          <textarea placeholder="Sua mensagem" required></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FaleConosco;