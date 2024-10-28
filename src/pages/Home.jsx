import React, { useState } from "react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className=""
      style={{ backgroundColor: "var(--light-gray-3)" }}
    >
      <div className="xl:px-20 sm:px-5 xl:flex xl:h-screen sm:place-content-center sm:grid">
      <div className="xl:order-none sm:order-2 xl:content-center sm:text-sm">
        <h6 className="xl:text-3xl font-bold sm:text-xl" style={{ color: "var(--warning)" }}>
          Melhores ofertas personalizadas
        </h6>
        <h1 className="xl:text-8xl sm:text-4xl">Queima de stoque Nike🔥</h1>
        <p className="xl:text-xl xl:py-6 sm:text-lg sm:py-3">
          Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor
          laboris eiusmod irure consectetur.
        </p>
        <button
          className=" border-none content-center xl:my-7 xl:text-xl xl:py-4 xl:px-16 text-white font-bold rounded-2xl sm:px-8 sm:py-2 sm:text-lg sm:my-2"
          style={{
            backgroundColor: isHovered
              ? "var(--tertiary-color)"
              : "var(--primary)",
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
      <div>
        <img
          className="xl:size-full xl:w-screen sm:order-1 xl:order-2"
          src="/assets/home-img.svg"
          alt="foto-tenis-nikea-air"
        />
      </div></div>
      <div className="flex justify-center pb-6 gap-3">
        <i className="p-2 bg-gray-500 hover:bg-pink-700 rounded-full cursor-pointer"></i><i className="p-2 bg-gray-500 rounded-full cursor-pointer"></i><i className="p-2 bg-gray-500 rounded-full cursor-pointer "></i><i className="p-2 bg-gray-500 rounded-full cursor-pointer"></i>
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
        hoveredButton === buttonId ? "var(--primary)" : "var(--white)",
      color: hoveredButton === buttonId ? "var(--white)" : "var(--primary)",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    }),
  };

  return (
    <section className="overflow-x-hidden xl:px-20 lg:px-14 md:px-10 sm:px-5 bg-gradient-to-t from-gray-100" style={{backgroundColor:'var(--light-gray-3)'}}>
      <div className="py-2 my-7 flex justify-between">
        <h3 className="text-3xl">Coleções em destaque</h3>
      </div>
      <div className="flex z-10 flex-wrap justify-between text-3xl gap-3 pb-5">
        <div
          className="w-full sm:w-1/1 md:w-1/2 lg:w-1/4 flex-grow flex-shrink-0 pl-6 px-10 py-16 rounded-lg bg-right bg-no-repeat bg-contain"
          style={{
            backgroundColor: "var(--colecao)",
            backgroundImage: "url(/assets/coleção/1-supreme.svg)",
          }}
        >
          <div className="text-left">
            <p
              className="px-3 py-2 w-max rounded-2xl text-2xl text-gray-700"
              style={{ backgroundColor: "var(--promo)" }}
            >
              <b>30% OFF</b>
            </p>
            <h2 className="text-5xl font-bold my-7">
              {" "}
              Novo drop <br /> Supreme{" "}
            </h2>
            <button
              className=" font-bold border-none px-6 py-3 rounded-lg cursor-pointer text-2xl"
              style={styles.button(1)}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
            >
              Comprar
            </button>
          </div>
        </div>
        <div
          className="w-full sm:w-1/1 md:w-1/2 lg:w-1/4 flex-grow flex-shrink-0 pl-6 px-10 py-16 rounded-lg bg-right bg-no-repeat bg-contain"
          style={{
            backgroundColor: "var(--colecao)",
            backgroundImage: "url(/assets/coleção/2-adidas.svg)",
          }}
        >
          <div className="text-left">
            <p
              className="px-3 py-2 w-max rounded-2xl text-2xl text-gray-700"
              style={{ backgroundColor: "var(--promo)" }}
            >
              <b>30% OFF</b>
            </p>
            <h2 className="text-5xl font-bold my-7">
              {" "}
              Coleção <br /> Adidas{" "}
            </h2>
            <button
              className="
         font-bold border-none px-6 py-3 rounded-lg cursor-pointer text-2xl"
              style={styles.button(2)}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
            >
              Comprar
            </button>
          </div>
        </div>
        <div
          className="w-full sm:w-1/1 md:w-1/2 lg:w-1/4 flex-grow flex-shrink-0 pl-6 px-10 py-16 rounded-lg bg-right bg-no-repeat bg-contain"
          style={{
            backgroundColor: "var(--colecao)",
            backgroundImage: "url(/assets/coleção/3-BeatsBass.svg)",
          }}
        >
          <div className="text-left">
            <p
              className="px-3 py-2 w-max rounded-2xl text-2xl text-gray-700"
              style={{ backgroundColor: "var(--promo)" }}
            >
              <b>30% OFF</b>
            </p>
            <h2 className="text-5xl font-bold my-7">
              {" "}
              Novo <br /> Beats Bass{" "}
            </h2>
            <button
              className="
         font-bold border-none px-6 py-3 rounded-lg cursor-pointer text-2xl"
              style={styles.button(3)}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="flex justify-center pb-6 text-2xl">
        <h3 className="text-3xl">Coleções em destaque</h3>
        </div>
        <div className="flex justify-center py-4 gap-16 text-lg text-gray-800">
          <div className="text-center">
            <div className="rounded-full p-5 flex justify-center" style={{backgroundColor:'var(--white)'}}>
            <img  src="./assets/coleção/1-camisetas.svg" alt="" /></div>
            <h4 className="text-xl">Camisetas</h4>
          </div>
          <div className="text-center">
            <div className="rounded-full p-5 flex justify-center" style={{backgroundColor:'var(--white)'}}>
            <img  src="./assets/coleção/2-calças.svg" alt="" /></div>
            <h4 className="text-xl">Calças</h4>
          </div>
          <div className="text-center">
            <div className="rounded-full p-5 flex justify-center" style={{backgroundColor:'var(--white)'}}>
            <img className=""  src="./assets/coleção/2-calças.svg" alt="" /></div>
            <h4 className="text-xl">Bonés</h4>
          </div>
          <div className="text-center">
            <div className="rounded-full p-5 flex justify-center" style={{backgroundColor:'var(--white)'}}>
            <img   src="./assets/coleção/4-phones.svg" alt="" /></div>
            <h4 className="text-xl">Headphones</h4>
          </div>
          <div className="text-center">
            <div className="rounded-full p-5 flex justify-center" style={{backgroundColor:'var(--white)'}}>
            <img className="" src="./assets/coleção/5-tenis.svg" alt="" />
            </div>
            <h4 className="text-xl">Tênis</h4>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex justify-between">
          <h2 className="text-3xl" >Produtos em Alta</h2>
          <h4 className="text-xl text-pink-700">ver mais ➞</h4>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 py-8 gap-5">
          <div className="justify-center">
            <div className="p-2 bg-white">
            <p className="px-3 py-2 w-max rounded-2xl text-2xl text-gray-700 absolute" style={{ backgroundColor: "var(--promo)" }}><b>30% OFF</b></p>
            <img src="./assets/produto.png" alt="" />
            </div>
            <h4><b>Tênis</b></h4>
            <h2 className="text-2xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 text-2xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
          </div>
          <div className="">
          <div className="p-2 bg-white">
            <p
              className="px-3 py-2 w-max rounded-2xl text-2xl absolute text-gray-700"
              style={{ backgroundColor: "var(--promo)" }}
            >
              <b>30% OFF</b>
            </p>
            <img src="./assets/produto.png" alt="" />
            </div>
            <h4><b>Tênis</b></h4>
            <h2 className="text-2xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 text-2xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
          </div>
          <div className="">
            <div className="bg-white p-2">
            <img src="./assets/produto.png" alt="" />
            </div>
            <h4><b>Tênis</b></h4>
            <h2 className="text-2xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 text-2xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
            </div>
          <div className="">
            <div className="bg-white p-2"><img src="./assets/produto.png" alt="" /></div>
            <h4><b>Tênis</b></h4>
            <h2 className="text-2xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 text-2xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
            </div>
          <div className="">
            <div className="bg-white p-2"><img src="./assets/produto.png" alt="" /></div>
            <h4><b>Tênis</b></h4>
            <h2 className="text-2xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 text-2xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
            </div>
          <div className="">
            <div className="bg-white p-2"><img src="./assets/produto.png" alt="" /></div>
            <h4><b>Tênis</b></h4>
            <h2 className="text-2xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 text-2xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
            </div>
          <div className="">
            <div className="bg-white p-2"><img src="./assets/produto.png" alt="" /></div>
            <h4><b>Tênis</b></h4>
            <h2 className="text-2xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 text-2xl">
              <h1 className="line-through opacity-70">$200</h1>
              <h1>$100</h1>
            </div>
            </div>
          <div className="">
            <div className="bg-white p-2"><img src="./assets/produto.png" alt="" />
            </div>
            <h4><b>Tênis</b></h4>
            <h2 className="text-2xl">K-Swiss V8 - Masculino</h2>
            <div className="flex gap-2 text-2xl">
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
