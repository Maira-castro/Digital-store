import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="">
            <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-header.svg" alt="Logo-header-top"/>
        <input type="search" />
        <i></i></div>
        <div className="cad-button">
          <a href="">Cadastre-se</a>
          <button>Entrar</button>
        </div>
        <img src="/src/assets/mini-cart.svg" alt="mini-cart" />
      </div>
      <div className="menu-nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="">Produtos</a>
          </li>
          <li>
            <a href="">Categorias</a>
          </li>
          <li>
            <a href="">Meus Pedidos</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
