//cada produto sendo renderizado em um card
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Card = styled.div`
  margin-top:-10px;
  border-radius: 8px;
  padding: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Image = styled.img`
  background-color: white;
  width: 292px;
  height: 321px;
  object-fit: cover;
  margin:0;
  line-height: 1.2;
`;

const ProductName = styled.h2`
  font-size: 18px;
  color: #333;
  margin:0;
  padding: 0;
  line-height: 1.2;
`;
const PriceContainer = styled.div`
  display: inline-flex;;
  align-items: center;
  gap:3px;
  margin:0;
  padding: 0;
`;

const Price = styled.p`
  font-size: 24px;
  color: ${({ $discount }) => ($discount ? '#8F8F8F' : '#1F1F1F')};
  text-decoration: ${({ $discount }) => ($discount ? 'line-through' : 'none')};
  margin: 0; 
  line-height: 1.2;
`;

const PriceDiscount = styled.p`
  font-size: 24px;
  color: #1F1F1F;
  margin: 0; 
  line-height: 1.2;
`;
const Type = styled.h5`
 color:#999;
 text-align: left;
 margin: 0; 
 line-height: 1.2;
`;


const ProductCard = ({id,images = [], name, price, priceDiscount, type }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    
    <Card onClick={handleCardClick}>
      <Image src={images[0]?.src} alt={name} />
      <Type>{type}</Type>
      <ProductName>{name}</ProductName>
      <PriceContainer>
        <Price $discount={priceDiscount}>R$ {price} </Price>
        {priceDiscount && <PriceDiscount>R$ {priceDiscount}</PriceDiscount>}
      </PriceContainer>
    </Card>

  );
}

export default ProductCard;
