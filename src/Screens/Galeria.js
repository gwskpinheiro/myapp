import React from 'react';
import '../css/Galeria.css';

function Galeria() {
  const imagens = [
    'https://cantinhodasreceitas.com.br/wp-content/uploads/2024/01/pao-frances-receita-1200x900.jpg',
    'https://static.itdg.com.br/images/640-440/cfaeadb92ac4a77e9b0ebaf46816c7e2/68843-320646-original.jpg',
    'https://d2qcpt1idvpipw.cloudfront.net/recipes/2022/01/Massa-de-salgado-frito.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sODR3Pufyf_TAVfRe9Nw7qffK17eHOArGQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOpAVko6Q-zd6b9qdUBCkTnaKijQ1a4MI8w08ddRQhV4Y74Gh909qeEFMAx4XH1r-uq4&usqp=CAU.jpg',
  ];

  const titulos = [
    'Pão Francês',
    'Bolo de Laranja',
    'Coxinha',
    'Pão Caseiro',
    'Croissant',
  ];

  return (
    <div className="galeria">
      <h1>Galeria</h1>
      <div className="grid">
        {imagens.map((src, index) => (
          <div key={index} className="imagem-container">
            <img src={src} alt={`Imagem ${index + 1}`} />
            <h2>{titulos[index]}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;