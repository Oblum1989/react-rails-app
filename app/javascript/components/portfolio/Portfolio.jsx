import React from 'react';
import Proy1 from '../../../assets/images/proy1.png';
import Proy2 from '../../../assets/images/proy2.png';
import Proy3 from '../../../assets/images/proy3.png';
import Proy4 from '../../../assets/images/proy4.png';
import Proy5 from '../../../assets/images/proy5.png';
import Proy6 from '../../../assets/images/proy6.png';

const Portfolio = () => (
  <div id="tf-portfolio">
    <div className="container">
      <div className="section-title">
        <h3>My Latest Works</h3>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="proyecto">
            <img src={Proy1} className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>Network diseño de Apps para empresa</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="proyecto">
            <img src={Proy2} className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>StudioDev creación de aplicaciones </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="proyecto">
            <img src={Proy3} className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>SuperBlog - Blog creado con Rails</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row toppadding">
        <div className="col-md-4">
          <div className="proyecto">
            <img src={Proy4} className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>Aplicacion en Rails clon de Stack OverFlow</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="proyecto">
            <img src={Proy5} className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>PetShop Baco - Ecommerce para una veterinaria</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="proyecto">
            <img src={Proy6} className="img-responsive" alt='#' />
            <div className="proy-description">
              <p>Ecommerce ejercicio practico en Bootstrap</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default Portfolio;