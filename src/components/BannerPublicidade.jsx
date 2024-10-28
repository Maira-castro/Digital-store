import React, { useState } from "react";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-20">
      <div className="px-10 xl:flex xl:justify-center xl:gap-40 lg:place-content-center lg:grid lg:gap-0">
        <div className="lg:flex lg:justify-center ">
          <img src="./assets/airoferta.png" alt="" />
        </div>
        <div className="lg:pb-10">
          <h4 className="text-lg" style={{color:'var(--primary)'}}><b>Oferta especial</b></h4>
          <h1 className="text-5xl py-2">Air Jordan edição <br /> de colecionador</h1>
          <p className="text-lg py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />
            aliquip
          </p>
          <button
            className=" border-none content-center my-3 text-lg py-3 px-14 text-white font-bold rounded-2xl"
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
      </div>
    </section>
  );
};

export default Banner;
