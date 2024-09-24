import React from 'react';
import './Companies.css';

const Companies = () => {
  return (
    <div>
      <section id="Experiencia" className="c-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="v-right flexColStart">
            <span className="greenText">Confianza y Compromiso</span>
            <span className="primaryText">Valiosos Clientes</span>
            <span className="secondaryText">
              En OCIMA, nos esforzamos por ofrecer siempre el mejor servicio{' '}
              <br /> y cultivar relaciones duraderas.
            </span>
          </div>
        </div>
        <div className="paddings innerWidth flexCenter c-container">
          <img src="./cfe.png" alt="" />
          <img src="./e-2.png" alt="" />
          <img src="./e-3.jpeg" alt="" />
          <img src="./e-4.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Companies;
