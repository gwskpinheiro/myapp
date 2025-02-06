import React from 'react';
import '../css/Historia.css';

function Historia() {
  return (
    <div className="historia">
      <h1>Nossa História</h1>
      
      <img src="https://santoandre.biz/wp-content/uploads/2017/02/Padaria_Brasileira_Foto_1977b-site.jpg" alt="Imagem antiga da padaria" className="historia-img" />

      <p>
        A Padaria Pão do Sol começou com um simples sonho de oferecer produtos frescos e de qualidade para a comunidade. Fundada em 1995, em um bairro tranquilo da cidade, nasceu da paixão por pães e doces feitos com ingredientes selecionados, misturados com muito carinho e dedicação.
      </p>

      <p>
        Tudo começou com um forno caseiro, onde José, o fundador, aprendeu com sua avó a arte de amassar e assar pães. Inspirado na tradição familiar, ele decidiu abrir sua própria padaria para compartilhar esse sabor especial com a vizinhança.
      </p>

      <p>
        Com o passar dos anos, a Pão do Sol se tornou um ponto de encontro para famílias e amigos. O aroma irresistível de pães recém-assados continua encantando a todos, e a tradição se mantém viva a cada fornada.
      </p>

      <section className="historia-valores">
        <h2>Nossos Valores</h2>
        <ul>
          <li>✔️ Tradição e qualidade desde 1995</li>
          <li>✔️ Ingredientes selecionados e frescos</li>
          <li>✔️ Atendimento acolhedor e familiar</li>
          <li>✔️ Inovação sem perder a essência artesanal</li>
        </ul>
      </section>
    </div>
  );
}

export default Historia;