import React, { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="ssm:px-2 ssm:justify-center ssm:text-center bg-light-gray-3 xl:px-12 xl:text-start">
  <div className="ssm:flex ssm:flex-col xl:h-full xl:content-center xl:flex-row xl:flex">
    <div className="ssm:order-2 xl:order-1 ssm:flex ssm:items-center ssm:justify-center xl:justify-start">
      <div className="ssm:text-center xl:text-start ">
        <h6 className="ssm:text-primary ssm:text-sm xl:text-3xl xl:text-warning">
          <b>Melhores ofertas personalizadas</b>
        </h6>
        <h1 className="ssm:text-3xl xl:text-8xl">
          Queima de <br className="ssm:block xl:hidden" /> estoque Nike 🔥
        </h1>
        <p className="ssm:text-sm ssm:mt-2 xl:text-2xl xl:mt-4">
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </p>
        <button
          className="ssm:w-full ssm:rounded-md ssm:my-3 border-none xl:w-auto xl:my-7 xl:text-xl xl:py-4 xl:px-16 text-white font-bold xl:rounded-2xl"
          style={{
            backgroundColor: isHovered ? "#991956" : "#C92071",
            color: "white",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Ver Ofertas
        </button>
      </div>
    </div>
    <div className="ssm:order-1 xl:order-2 xl:-ml-60">
      <img
        className="xl:size-full xl:w-screen sm:order-1 xl:order-2 "
        src="/assets/home-img.svg"
        alt="foto-tenis-nike-air"
      />
    </div>
  </div>
  <div className="flex justify-center pb-6 gap-3">
    <i className="p-2 bg-gray-500 hover:bg-pink-700 rounded-full cursor-pointer"></i>
    <i className="p-2 bg-gray-500 rounded-full cursor-pointer"></i>
    <i className="p-2 bg-gray-500 rounded-full cursor-pointer"></i>
    <i className="p-2 bg-gray-500 rounded-full cursor-pointer"></i>
  </div>
</section>

  );
};

export const Colecao = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (buttonId) => {
    setHoveredButton(buttonId);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const styles = {
    button: (buttonId) => ({
      backgroundColor:
        hoveredButton === buttonId ? "#C92071" : "#ffffff",
      color: hoveredButton === buttonId ? "#ffffff" : "#C92071",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    }),
  };

  return (
    <section className="overflow-x-hidden bg-gradient-to-t ssm:bg-light-gray-3 ssm:px-2 xl:px-12" >
      <div className="">
        <h3 className="ssm:text-xl xl:text-3xl">Coleções em destaque</h3>
      </div>
      <div className="ssm:py-3 xl:flex xl:gap-5">
        <div
          className="w-full ssm:px-2 ssm:py-1 ssm:my-2 ssm:w-1/1 sm:w-1/2 lg:w-1/4 flex-grow flex-shrink-0 xl:pl-6 xl:px-10 xl:py-16 rounded-lg bg-right bg-no-repeat bg-contain bg-colecao"
          style={{
            backgroundImage: "url(/assets/coleção/1-supreme.svg)",
          }}
        >
          <div className="text-left ssm:p-2">
            <p
              className="ssm:px-1 ssm:py-1 ssm:text-base xl:px-3 xl:py-2 w-max rounded-2xl xl:text-2xl text-gray-700 bg-promo"
            >
              <b>30% OFF</b>
            </p>
            <h2 className="ssm:text-2xl ssm:my-5 xl:text-5xl font-bold my-7">
              {" "}
              Novo drop <br /> Supreme{" "}
            </h2>
            <button
              className="font-bold border-none ssm:px-3 ssm:py-2 ssm:text-lg xl:px-6 xl:py-3 rounded-lg cursor-pointer xl:text-2xl"
              style={styles.button(1)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              Comprar
            </button>
          </div>
        </div>
        <div
          className="w-full ssm:px-2 ssm:py-1 ssm:my-2 ssm:w-1/1 sm:w-1/2 lg:w-1/4 flex-grow flex-shrink-0 xl:pl-6 xl:px-10 xl:py-16 rounded-lg bg-right bg-no-repeat bg-contain bg-colecao"
          style={{
            backgroundImage: "url(/assets/coleção/2-adidas.svg)",
          }}
        >
          <div className="text-left ssm:p-2">
            <p
              className="ssm:px-1 ssm:py-1 ssm:text-base xl:px-3 xl:py-2 w-max rounded-2xl xl:text-2xl text-gray-700 bg-promo"
            >
              <b>30% OFF</b>
            </p>
            <h2 className="ssm:text-2xl ssm:my-5 xl:text-5xl font-bold my-7">
              {" "}
              Coleção <br /> Adidas{" "}
            </h2>
            <button
              className="font-bold border-none ssm:px-3 ssm:py-2 ssm:text-lg xl:px-6 xl:py-3 rounded-lg cursor-pointer xl:text-2xl"
              style={styles.button(2)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              Comprar
            </button>
          </div>
        </div>
        <div
          className="w-full ssm:px-2 ssm:py-1 ssm:my-2 ssm:w-1/1 sm:w-1/2 lg:w-1/4 flex-grow flex-shrink-0 xl:pl-6 xl:px-10 xl:py-16 rounded-lg bg-right bg-no-repeat bg-contain bg-colecao"
          style={{
            backgroundImage: "url(/assets/coleção/3-BeatsBass.svg)",
          }}
        >
          <div className="text-left ssm:p-2">
            <p
              className="ssm:px-1 ssm:py-1 ssm:text-base xl:px-3 xl:py-2 w-max rounded-2xl xl:text-2xl text-gray-700 bg-promo"
            >
              <b>30% OFF</b>
            </p>
            <h2 className="ssm:text-2xl ssm:my-5 xl:text-5xl font-bold my-7">
              {" "}
              Novo <br /> Beats Bass{" "}
            </h2>
            <button
              className="font-bold border-none ssm:px-3 ssm:py-2 ssm:text-lg xl:px-6 xl:py-3 rounded-lg cursor-pointer xl:text-2xl"
              style={styles.button(3)}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className="py-10 ">
        <div className="flex justify-center pb-6 text-2xl">
        <h3 className="text-3xl">Coleções em destaque</h3>
        </div>
        <div className="flex justify-center py-4 gap-16 text-lg text-dark-gray">
          <div className="text-center">
            <div className="rounded-full p-6 flex justify-center bg-white-color" >
            <img  src="./assets/coleção/1-camisetas.svg" alt="" /></div>
            <h4 className="text-xl">Camisetas</h4>
          </div>
          <div className="text-center">
            <div className="rounded-full p-6 flex justify-center bg-white-color" >
            <img  src="./assets/coleção/2-calças.svg" alt="" /></div>
            <h4 className="text-xl">Calças</h4>
          </div>
          <div className="text-center">
            <div className="rounded-full p-6 flex justify-center bg-white-color">
            <img className=""  src="./assets/coleção/2-calças.svg" alt="" /></div>
            <h4 className="text-xl">Bonés</h4>
          </div>
          <div className="text-center">
            <div className="rounded-full p-6 flex justify-center bg-white-color" >
            <img   src="./assets/coleção/4-phones.svg" alt="" /></div>
            <h4 className="text-xl">Headphones</h4>
          </div>
          <div className="text-center">
            <div className="rounded-full p-6 flex justify-center bg-white-color" >
            <img className="" src="./assets/coleção/5-tenis.svg" alt="" />
            </div>
            <h4 className="text-xl">Tênis</h4>
          </div>
        </div>
      </div>

      <div className="xl:pb-10">
        <div className="flex justify-between">
          <h2 className="ssm:text-lg xl:text-3xl" >Produtos em Alta</h2>
          <h4 className="ssm:text-base xl:text-xl text-primary">
          <Link to="/products">ver mais ➞</Link></h4> 
        </div>
        <div className="grid ssm:grid-cols-2 ssm:gap-2 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 py-8 gap-5">
          <div className="justify-center">
            <div className="ssm:p-1 xl:p-2 bg-white-color">
            <p className="ssm:text-sm ssm:px-1 ssm:py-1 xl:px-3 xl:py-2 w-max rounded-2xl xl:text-2xl absolute text-dark-gray-2 bg-promo"><b>30% OFF</b></p>
            <img src="./assets/produto.png" alt="" />
            </div>
            <h4 className="ssm:text-sm xl:text-xl"><b>Tênis</b></h4>
            <h2 className="ssm:text-lg xl:text-3xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 ssm:text-lg xl:text-3xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
          </div>
          <div className="">
          <div className="ssm:p-1 xl:p-2 bg-white-color">
            <p className="ssm:text-sm ssm:px-1 ssm:py-1 xl:px-3 xl:py-2 w-max rounded-2xl xl:text-2xl absolute text-dark-gray-2 bg-promo"><b>30% OFF</b></p>
            <img src="./assets/produto.png" alt="" />
            </div>
            <h4 className="ssm:text-sm xl:text-xl"><b>Tênis</b></h4>
            <h2 className="ssm:text-lg xl:text-3xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 ssm:text-lg xl:text-3xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
          </div>
          <div className="">
            <div className="bg-white-color ssm:p-1 xl:p-2">
            <img src="./assets/produto.png" alt="" />
            </div>
            <h4 className="ssm:text-sm xl:text-xl"><b>Tênis</b></h4>
            <h2 className="ssm:text-lg xl:text-3xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 ssm:text-lg xl:text-3xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
            </div>
            <div className="">
            <div className="bg-white-color ssm:p-1 xl:p-2">
            <img src="./assets/produto.png" alt="" />
            </div>
            <h4 className="ssm:text-sm xl:text-xl"><b>Tênis</b></h4>
            <h2 className="ssm:text-lg xl:text-3xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 ssm:text-lg xl:text-3xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
            </div>
            <div className="">
            <div className="bg-white-color ssm:p-1 xl:p-2">
            <img src="./assets/produto.png" alt="" />
            </div>
            <h4 className="ssm:text-sm xl:text-xl"><b>Tênis</b></h4>
            <h2 className="ssm:text-lg xl:text-3xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 ssm:text-lg xl:text-3xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
            </div>
            <div className="">
            <div className="bg-white-color ssm:p-1 xl:p-2">
            <img src="./assets/produto.png" alt="" />
            </div>
            <h4 className="ssm:text-sm xl:text-xl"><b>Tênis</b></h4>
            <h2 className="ssm:text-lg xl:text-3xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 ssm:text-lg xl:text-3xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
            </div>
            <div className="">
            <div className="bg-white-color ssm:p-1 xl:p-2">
            <img src="./assets/produto.png" alt="" />
            </div>
            <h4 className="ssm:text-sm xl:text-xl"><b>Tênis</b></h4>
            <h2 className="ssm:text-lg xl:text-3xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 ssm:text-lg xl:text-3xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
            </div>
            <div className="">
            <div className="bg-white-color ssm:p-1 xl:p-2">
            <img src="./assets/produto.png" alt="" />
            </div>
            <h4 className="ssm:text-sm xl:text-xl"><b>Tênis</b></h4>
            <h2 className="ssm:text-lg xl:text-3xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 ssm:text-lg xl:text-3xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
            </div>
        </div>
      </div>

    </section>
  );
};

export default Home;
