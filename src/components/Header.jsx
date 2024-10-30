import React, { useState } from "react";
import styled from "styled-components";
import "../index.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="">
      <div className="ssm:max-w-7xl sm:px-6 xl:px-0 xl:py-12 mx-auto">
        <div
          className="flex 
 items-center justify-between h-16"
        >
          <div className="flex items-center ssm:order-2 xl:order-1 ">
            <div className="xl:order-1 xl:-mx-60">
              {/* Logo   
 da sua loja */}
              <img src="./assets/logo.svg" alt="Logo" className="ssm:size-32 xl:size-96 " />
            </div>
            <div className="xl:hidden md:block ssm:hidden">
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

          <div className="xl:order-3 md:block ssm:hidden">
            <div className="ml-4 flex items-center md:ml-6 ">
            <button
                className="border-none content-center my-3 ssm:rounded-lg ssm:text-base ssm:py-2 ssm:px-10 xl:text-base xl:py-2 xl:px-7 text-white font-bold rounded-2xl xl:order-2"
                style={{
                  backgroundColor: isHovered ? "#991956" : "#C92071",
                  color: "white",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Entrar
              </button>
              <button className="bg-white hover:bg-gray-100 text-dark-gray-2 font-bold py-2 px-4 rounded underline">
                Cadastre-se
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden ssm:order-1 xl:order-2 ssm:pl-8">
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

          <div className="flex justify-center content-center ssm:order-3 xl:order-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 order-2 xl:bg-light-gray-3 xl:rounded-r-lg xl:pl-1 "
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/200/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <div
              className={
                isSearchOpen
                  ? "block xl:flex order-1 "
                  : "hidden absolute top-full left-0 bg-white shadow-md rounded-md p-4"
              }
            >
              <input type="text" placeholder="Pesquisar" className="w-full xl:bg-light-gray-3 xl:pr-36 xl:pl-2 xl:py-4 xl:rounded-l-lg " />
            </div>

            
          </div>
          <div className="order-4 flex ssm:pr-8 xl:size-16 xl:-mr-36">
              <img src="./assets/mini-cart.svg" alt="" />
            </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="ssm:flex ssm:content-between ">
          <div className="ssm:flex ssm:flex-col ssm:gap-6 ssm:p-9 ssm:h-full ssm:absolute ssm:bg-white-color ssm:rounded-br-lg">
            <h1>Páginas</h1>
            <a href="text-pink">Home</a>
            <a href="">Produtos</a>
            <a href="">Categorias</a>
            <a href="">Meus Pedidos</a>

            <div className="ssm:border-t-primary ssm:flex ssm:flex-col ssm:text-center border-t px-8 ">
              <button
                className="border-none content-center my-3 ssm:rounded-lg ssm:text-base ssm:py-2 ssm:px-10 xl:text-lg xl:py-3 xl:px-14 text-white font-bold rounded-2xl "
                style={{
                  backgroundColor: isHovered ? "#991956" : "#C92071",
                  color: "white",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Entrar
              </button>
              <a className=" underline cursor-pointer" href="">
                Cadastre-se
              </a>
            </div>
          </div>
        </div>
        
      )}
    </nav>
  );
};

export default Header;
