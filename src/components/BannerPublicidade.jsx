import React from "react"

const Banner = () => {
    return(
        <section className="flex max-h-full max-w-full pl-5 pt-7 justify-content-evenly align-content-center">
            <div className="">
                <img src="/assets/airoferta.png" alt="" />
            </div>
            <div className=" align-content-center mb-8">
        <h6 className="text-xl m-0" style={{ color: "var(--primary-color)" }}>
        Oferta especial
        </h6>
        <h1 className="text-7xl m-0 mt-4 line-height-1 font-bold text-black-alpha-80">
        Air Jordan edição de <br />
        colecionador
        </h1>
        <p className="my-5 text-xl text-black-alpha-70">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br /> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br /> aliquip
        </p>
        <button
          className="transition-colors transition-duration-300 hover:bg-pink-800 hover:text-white
          text-white font-medium border-none px-6 py-2 border-round-lg cursor-pointer text-lg"
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          Ver Ofertas
        </button>
      </div>
        </section>
    )
}

export default Banner