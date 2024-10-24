import React from "react";
import { InputText } from 'primereact/inputtext';
import { Transition } from "style-components";
import styled from "styled-components";

const Header = () => {
  return (
    <header className="my-6 px-8">
      <div className="flex align-items-center  justify-content-between">
        <div className="align-items-center ">
        <img className="h-4rem"
          src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-header.svg"
          alt="Logo-header-top"/>
        </div>
        <div className="">
      <span className="">
        <InputText className="px-8 py-4 text-xl" placeholder="Busca" />
        <i className=" pi pi-search" />
      </span>
      </div>
        <div className="align-items-center flex gap-5 -mr-8 text-lg">
          <div className="">
        <a href="" className="text-black-alpha-70 text-xl">
          Cadastre-se
        </a>
        </div>
        <div className="align-items-center">
        <button
          className="transition-colors transition-duration-300 hover:bg-pink-800 hover:text-white text-white border-none px-6 py-3 border-round-lg cursor-pointer text-lg"
          style={{ backgroundColor: "var(--primary-color)" }}>
          Entrar
        </button>
        </div>
        </div>
        <div className="align-items-center ml-8 mr-5"><img className="mr-8 pr-8 h-2rem" src="/assets/mini-cart.svg" alt="mini-cart" /></div>
      </div>
      <div className="mt-6">
        <ul className="flex gap-5 list-none -mb-2 p-0 text-xl ">
          <li className="">
            <a href="#" className="no-underline text-black-alpha-70">
              Home
            </a>
          </li>
          <li>
            <a href="" className="no-underline text-black-alpha-70">
              Produtos
            </a>
          </li>
          <li>
            <a href="" className="no-underline text-black-alpha-70">
              Categorias
            </a>
          </li>
          <li>
            <a href="" className="no-underline text-black-alpha-70">
              Meus Pedidos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
