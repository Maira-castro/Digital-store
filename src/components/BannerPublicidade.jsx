import React, { useState } from "react";

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pt-20">
      <div className="px-10 xl:flex xl:justify-center xl:gap-40 lg:place-content-center lg:grid lg:gap-0">
        <div className="lg:flex lg:justify-center ">
          <img src="./assets/airoferta.png" alt="" />
        </div>
        <div className="lg:pb-10 ssm:pb-10">
          <h4 className="text-lg text-primary" ><b>Oferta especial</b></h4>
          <h1 className="ssm:text-3xl ssm:py-1 text-5xl py-2">Air Jordan edição <br /> de colecionador</h1>
          <p className="ssm:text-sm ssm:py-2 text-lg py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br />
            aliquip
          </p>
          <button
            className="border-none content-center my-3 ssm:rounded-lg ssm:text-base ssm:py-2 ssm:px-10 text-lg py-3 px-14 text-white font-bold rounded-2xl"
            style={{
              backgroundColor: isHovered
                ? "#991956"
                : "#C92071",
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
