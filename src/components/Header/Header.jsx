import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const phoneNumber = '6691200921';
  const message =
    'Hola, quiero programar una consulta para hablar sobre un proyecto de construcción.';

  const getMenuStyles = (menuOpened) => {
    if (window.innerWidth <= 768) {
      return { display: menuOpened ? 'flex' : 'none' };
    }
    return {};
  };

  const handleContactClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter innerWidth paddings ">
        {/* logo */}
        <img src="./logo_ocm.png" alt="logo" width={100} />

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#Experiencia">Experiencia</a>
            <a href="#Servicios">Servicios</a>
            <a href="#Empresa">Empresa</a>
            <button className="button" onClick={handleContactClick}>
              Contacto
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
