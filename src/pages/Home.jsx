import React, { useState } from "react";

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="px-20 flex h-screen"
      style={{ backgroundColor: "var(--light-gray-3)" }}
    >
      <div className="content-center">
        <h6 className="text-3xl font-bold" style={{ color: "var(--warning)" }}>
          Melhores ofertas personalizadas
        </h6>
        <h1 className="text-8xl">Queima de stoque Nike🔥</h1>
        <p className="text-xl py-6">
          Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor
          laboris eiusmod irure consectetur.
        </p>
        <button
          className=" border-none content-center my-7 text-xl py-4 px-16 text-white font-bold rounded-2xl"
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
          className="size-full w-screen"
          src="/assets/home-img.svg"
          alt="foto-tenis-nikea-air"
        />
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
    <section className="overflow-x-hidden px-20">
      <div className="py-2 my-7 flex justify-between">
        <h3 className="text-3xl">Coleções em destaque</h3>
        <h4 className="text-xl text-pink-700">ver mais ➞</h4>
      </div>
      <div className="flex flex-wrap justify-between text-3xl gap-3 pb-5">
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
          <h2>Coleção em destaque</h2>
        </div>
        <div className="flex justify-center gap-16 text-lg text-gray-800">
          <div className="">
            <img src="" alt="" />
            <h4>Camisetas</h4>
          </div>
          <div className="">
            <img src="" alt="" />
            <h4>Calças</h4>
          </div>
          <div className="">
            <img src="" alt="" />
            <h4>Bonés</h4>
          </div>
          <div className="">
            <img src="" alt="" />
            <h4>headphones</h4>
          </div>
          <div className="">
            <img src="" alt="" />
            <h4>Tênis</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
