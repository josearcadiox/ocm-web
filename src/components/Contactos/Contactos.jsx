import React from 'react';
import './Contactos.css';
import { MdCall, MdAttachEmail, MdWork } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contactos = () => {
  return (
    <section id="Empresa" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left Side */}
        <div className="flexColStart c-left">
          <span className="greenText">Información de contacto</span>
          <span className="primaryText">Fácil de contactar</span>
          <span className="secondaryText">
            Si tienes alguna pregunta,comentario o simplemente deseas obtener
            más información sobre nuestros servicios, no dudes en ponerte en
            contacto con nosotros.
            <div className="flexColStart contactModes">
              {/* First row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdCall size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Llama</span>
                      <span className="secondaryText">667-715-1181</span>
                    </div>
                  </div>
                  <div className="flexCenter button">LLama Ahora</div>
                </div>

                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <BsFillChatDotsFill size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Mensaje</span>
                      <span className="secondaryText">667-715-1181</span>
                    </div>
                  </div>
                  <div className="flexCenter button">Enviar Mensaje</div>
                </div>
              </div>

              {/* Second row */}
              <div className="flexStart row">
                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdAttachEmail size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Informes</span>
                      <span className="secondaryText">Consultas</span>
                    </div>
                  </div>
                  <div className="flexCenter button">ocima96@yahoo.com</div>
                </div>

                <div className="flexColCenter mode">
                  <div className="flexStart">
                    <div className="flexCenter icon">
                      <MdWork size={25} />
                    </div>
                    <div className="flexColStart detail">
                      <span className="primaryText">Solicitar trabajo</span>
                      <span className="secondaryText">Adjuntar</span>
                    </div>
                  </div>
                  <div className="flexCenter button">CV</div>
                </div>
              </div>
            </div>
          </span>
        </div>
        {/* Right Side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.44642781381!2d-107.37874422473138!3d24.81440227795941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd756557cd563%3A0xe021ca9c86bee430!2sObras%20y%20Civiles%20Mar%C3%ADtimas!5e0!3m2!1ses-419!2smx!4v1719864243531!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactos;
