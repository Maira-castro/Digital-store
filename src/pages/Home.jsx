import React from "react";

const Home = () => {
  return (
    <section
      className="flex max-h-full max-w-full pl-8 "
      style={{ backgroundColor: "var(--light-gray-3)" }}
    >
      <div className=" align-content-center -mr-8 pr-8">
        <h6 className="text-3xl m-0" style={{ color: "var(--warning)" }}>
          Melhores ofertas personalizadas
        </h6>
        <h1 className="text-8xl m-0 mt-3 line-height-1">
          Queima de
          <br /> stoque Nike 🔥
        </h1>
        <p className="my-5 text-2xl text-black-alpha-70">
          Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor
          laboris eiusmod irure consectetur.
        </p>
        <button
          className="transition-colors transition-duration-300 hover:bg-pink-800 hover:text-white
          text-white border-none px-7 py-3 border-round-lg cursor-pointer text-xl"
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          Ver Ofertas
        </button>
      </div>
      <div className="h-screen align-content-center">
        <img
          className="h-full w-full -ml-8"
          src="/assets/home-img.svg"
          alt="foto-tenis-nikea-air"
        />
      </div>
    </section>
  );
};

export const Colecao = () => {
  return (
    <section className="overflow-x-hidden pl-8 pr-8 ">
      <div className="py-2 text-3xl">
        <h3>Coleções em destaque</h3>
      </div>
      <div className="flex my-0 pb-5 grid justify-content-center text-3xl gap-4">
        <div className="col p-5 border-round-lg bg-contain bg-no-repeat bg-right " style={{background: 'var(--colecao)', backgroundImage: 'url(/assets/coleção/1-supreme.svg)' }}>
          <p className="px-3 py-2 w-max border-round-2xl text-black-alpha-70"
            style={{ background: "var(--promo)" }}>
            <b>30% OFF</b>
          </p>
          <h2 >
            Novo drop <br /> Supreme
          </h2>
          <button className="transition-colors transition-duration-300 hover:bg-primary hover:text-white
          font-bold border-none px-6 py-3 border-round-lg cursor-pointer text-2xl" style={{ background: "var(--white)", color: "var(--primary-color)", }}>Comprar</button>
        </div>
        <div className=" p-5 border-round-lg col bg-contain bg-no-repeat bg-right" style={{background: 'var(--colecao)', backgroundImage: 'url(/assets/coleção/2-adidas.svg)' }}>
          <p className="px-3 py-2 w-max border-round-2xl text-black-alpha-70"
            style={{ background: "var(--promo)"}}>
            <b>30% OFF</b>
          </p>
          <h2 >
            Coleção <br /> Adidas
          </h2>
          <button className="transition-colors transition-duration-300 hover:bg-primary hover:text-white
          font-bold button-destaque border-none px-6 py-3 border-round-lg cursor-pointer text-2xl " style={{background: "var(--white)", color: "var(--primary-color)" }}>Comprar </button>
        </div>
        <div className="p-5 border-round-lg col bg-contain bg-no-repeat bg-right" style={{background: 'var(--colecao)', backgroundImage: 'url(/assets/coleção/3-BeatsBass.svg)' }}>
          <p
            className="px-3 py-2 w-max border-round-2xl text-black-alpha-70"
            style={{ background: "var(--promo)" }}>
            <b>30% OFF</b>
          </p>
          <h2>
            Novo <br />
            Beats Bass
          </h2>
          <button className="transition-colors transition-duration-300 hover:bg-primary hover:text-white
          font-bold border-none px-6 py-3 border-round-lg cursor-pointer text-2xl" style={{ background: "var(--white)", color: "var(--primary-color)" }}>Comprar</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
