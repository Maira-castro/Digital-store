import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { darken } from "polished";

// Estilos principais
const BuyBoxContainer = styled.div`
  border: 1px solid #cccccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  background-color: white;
`;

const Name = styled.h1`
  font-size: 32px;
  color: #1f1f1f;
  margin: 0 0 8px;
`;

const Reference = styled.p`
  font-size: 12px;
  color: #666666;
  margin: 0 0 16px;
`;

const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6aa1c;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  color: white;

  img {
    margin-left: 4px;
    width: 16px;
    height: 16px;
    filter: brightness(0) invert(1);
  }
`;

const RatingText = styled.span`
  font-size: 14px;
  color: #8f8f8f;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const Price = styled.span`
  font-size: ${(props) => (props.discount ? "16px" : "32px")};
  color: ${(props) => (props.discount ? "#CCCCCC" : "#474747")};
  text-decoration: ${(props) => (props.discount ? "line-through" : "none")};
`;

const PriceDiscount = styled.span`
  font-size: 32px;
  color: #474747;
`;

const Legend = styled.h2`
  font-size: 20px;
  color: #666666;
  margin-bottom: 4px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #474747;
  margin-bottom: 16px;
`;

const CTAButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: white;
  background-color: #f6aa1c;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${darken(0.1, "#F6AA1C")};
  }
`;

const ChildrenContainer = styled.div`
  margin: 16px 0;
`;

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <BuyBoxContainer>
      {/* Nome e Referência */}
      <Name>{name}</Name>
      {reference && <Reference>REF: {reference}</Reference>}

      {/* Avaliações */}
      <RatingsContainer>
        {stars && (
          <Stars>
            {stars}
            <img src="/assets/star-icon.svg" alt="Estrela" />
          </Stars>
        )}
        {rating && <RatingText>({rating} avaliações)</RatingText>}
      </RatingsContainer>

      {/* Preços */}
      <PriceContainer>
        {priceDiscount ? (
          <>
            <Price discount>{price}</Price>
            <PriceDiscount>R$ {priceDiscount}</PriceDiscount>
          </>
        ) : (
          <Price>R$ {price}</Price>
        )}
      </PriceContainer>

      {/* Descrição */}
      {description && (
        <>
          <Legend>Descrição do produto</Legend>
          <Description>{description}</Description>
        </>
      )}

      {/* Variações de Produto */}
      <Legend>Tamanho</Legend>
      <ChildrenContainer>{children}</ChildrenContainer>

      {/* Botão de Comprar */}
      <CTAButton>COMPRAR</CTAButton>
    </BuyBoxContainer>
  );
};
// Validação de Propriedades
BuyBox.propTypes = {
  name: PropTypes.string.isRequired,
  reference: PropTypes.string,
  stars: PropTypes.number.isRequired,
  rating: PropTypes.number,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  priceDiscount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  description: PropTypes.string,
  children: PropTypes.node,
};
export default BuyBox;