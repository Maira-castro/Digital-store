import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductOptions = ({
  options,
  radius = "4px", // Valor padrão definido aqui
  shape,
  type,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  // Define os estilos básicos
  const getStyle = (option) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: shape === "circle" ? "31px" : "46px", // Ajuste para largura fixa
    height: shape === "circle" ? "31px" : "46px", // Altura fixa
    padding: shape === "square" ? "0 12px" : "0",
    borderRadius: shape === "circle" ? "50%" : radius,
    border: `1px solid ${selectedOption === option ? "#C92071" : "#CCCCCC"}`,
    cursor: "pointer",
    fontSize: type === "text" ? "24px" : "0",
    color: type === "text" ? "#474747" : "transparent",
    backgroundColor: type === "color" ? option : "transparent",
    transition: "border 0.3s ease",
  });

  return (
    <div
      style={{
        display: "flex",
        gap: "12px", // Espaçamento entre as opções
        flexWrap: "wrap",
        marginTop: "16px",
        marginBottom:"10px", // Espaçamento superior
      }}
    >
      {options.map((option, index) => (
        <div
          key={index}
          style={getStyle(option)}
          onClick={() => setSelectedOption(option)}
          title={type === "color" ? option : undefined}
        >
          {type === "text" ? option : null}
        </div>
      ))}
    </div>
  );
  
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(["square", "circle"]).isRequired,
  type: PropTypes.oneOf(["text", "color"]).isRequired,
};



export default ProductOptions;
