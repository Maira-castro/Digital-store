import React from "react";

 const CardMarket = () => {
  return (
    <div className="flex justify-center w-full flex-col">
      <div className="flex justify-center p-4 bg-white-color relative">
        <div>
          <p className="ssm:text-sm ssm:px-1 ssm:py-1 xl:px-3 xl:py-2 w-max rounded-2xl xl:text-2xl absolute text-dark-gray-2 bg-promo">
            <b>30% OFF</b>
          </p>
        </div>

        <img
          src="./assets/produto.png"
          alt=""
          className="w-full max-w-[200px] h-auto object-contain"
        />
      </div>
      <h4 className="ssm:text-sm xl:text-xl">
        <b>Tênis</b>
      </h4>
      <h2 className="ssm:text-lg xl:text-3xl">K-Swiss V8 - Masculino</h2>
      <div className="flex gap-2 ssm:text-lg xl:text-3xl">
        <h1 className="line-through opacity-70">$200</h1>
        <h1>$100</h1>
      </div>
    </div>
  );
};

export default CardMarket;
