import React from 'react';
import '../css/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Bem-vindo à Padaria Pão do Sol</h1>
      <p>Os melhores pães do litoral!</p>

      <section className="about">
        <h2>Sobre Nós</h2>
        <p>Na Pão do Sol, produzimos pães artesanais fresquinhos todos os dias, com ingredientes de alta qualidade e muito carinho!</p>
      </section>

      <section className="hours">
        <h2>Horário de Funcionamento</h2>
        <p>📅 Segunda a Sábado: 6h - 19h</p>
        <p>📅 Domingo: 6h - 12h</p>
      </section>

      <section className="gallery">
        <h2>Nossos Produtos</h2>
        <div className="images">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sODR3Pufyf_TAVfRe9Nw7qffK17eHOArGQ&s" alt="Pão artesanal" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOpAVko6Q-zd6b9qdUBCkTnaKijQ1a4MI8w08ddRQhV4Y74Gh909qeEFMAx4XH1r-uq4&usqp=CAU.jpg" alt="Croissant" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROueoV5zS1GM4srO3nO8idQBH4wCUiVTYTVA&s" alt="Bolo de chocolate" />
        </div>
      </section>

    </div>
  );
}

export default Home;