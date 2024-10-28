import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex   
 items-center justify-between h-16"
        >
          <div className="flex items-center order-2">
            <div className="">
              {/* Logo   
 da sua loja */}
              <img src="./assets/logo.svg" alt="Logo" className="ssm:size-32" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Links de navegação para telas maiores */}
                <a href="#" className="text-gray-900 font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-900 font-medium">
                  Produtos
                </a>
                <a href="#" className="text-gray-900 font-medium">
                  Categorias
                </a>
                <a href="#" className="text-gray-900 font-medium">
                  Meus Pedidos
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Entrar
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded">
                Cadastre-se
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden sm:order-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white   
 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>  
              {/* Ícone de menu hambúrguer */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center content-center order-3">
        <button
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/200/svg"   

            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <div   
 className={isSearchOpen ? 'block' : 'hidden absolute top-full left-0 bg-white shadow-md rounded-md p-2'}>
          <input type="text" placeholder="Pesquisar" className="w-full" />
        </div>
      

          <div className="order-4"><img src="./assets/mini-cart.svg" alt="" />
          </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="">
          <div className="ssm:flex ssm:flex-col ssm:gap-3 ssm:p-6 ssm:max-h-full">
            <h1>Páginas</h1>
            <a href="text-pink">Home</a>
            <a href="">Produtos</a>
            <a href="">Categorias</a>
            <a href="">Meus Pedidos</a>

            <div className="ssm:border-t-primary flex">
              <button>Entrar</button>
              <a href="">cadastre-se</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
