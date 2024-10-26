import React from "react";
import styled from "styled-components";
import '../index.css'

const Header = () => {
  return (
    <header className=" px-20 py-10">
      <div className="flex justify-between content-center">
        <div className="">
        <img className="h-auto w-80"
          src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/154c105f9b1a127fb30ca797a224a9a301439ed5/assets/logo-header.svg"
          alt="Logo-header-top"/>
        </div>

        <div className="search-box flex ">
      <input type="text" placeholder="Pesquisar produto..." className="w-full  pl-5 pr-80 border-none  rounded-l-lg" style={{backgroundColor:'var(--light-gray-3)'}} />
      <span className="search-icon rounded-r-lg" style={{backgroundColor:'var(--light-gray-3)'}}>
        <svg className="w-8 h-8 mt-3 mx-2 text-gray-400 hover:text-pink-700 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m-2.4-2.4A7.5 7.5 0 1116.5 9a7.5 7.5 0 01-2.4 5.25z"></path>
        </svg>
      </span>
    </div>
      
        <div className=" flex gap-20">
          <div className="content-center">
        <a href="" className="opacity-80 text-black underline font-bold text-lg" >
          Cadastre-se
        </a>
        </div>
        <div className="content-center">
        <button className="border-none py-3 px-12 text-white hover:opacity-80 font-bold rounded-2xl" style={{backgroundColor:'var(--primary)'}}>
          Entrar
        </button>
        </div>
        </div>

        <div className="content-center"><img className="w-8"  src="/assets/mini-cart.svg" alt="mini-cart" /></div>
      </div>
      

      <div className="pt-12">
        <ul className="flex gap-10 nav nav-underline text-xl text-gray-600">
          <li className="hover:border-b-4 hover:text-pink-700 hover:border-pink-700">
            <a className="menu-nav nav-link active" href="#" >
              Home
            </a>
          </li>
          <li className="nav-item hover:border-b-4 hover:text-pink-700 hover:border-pink-700">
            <a className="nav-link menu-nav " href="" >
              Produtos
            </a>
          </li>
          <li className="nav-item hover:border-b-4  hover:text-pink-700 hover:border-pink-700">
            <a className="nav-link menu-nav " href="" >
              Categorias
            </a>
          </li>
          <li className=" hover:border-b-4 hover:text-pink-700 hover:border-pink-700">
            <a className="nav-link menu-nav " href="" >
              Meus Pedidos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
