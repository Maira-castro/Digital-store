//compontente para ordenar os itens
import React from 'react';
import styled from 'styled-components';

const SortContainer = styled.div`
  width: 308px;
  height: 60px;
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  margin-left: -310px;
  
  @media (max-width: 768px) {
    justify-content: center;
    display: flex;
    width: 50%;
    margin-left: 10px;
    }
  `;

const Label = styled.label`
  font-size: 16px;
  color: #474747;
  margin-bottom: 8px;
  margin-left: 10px;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  padding: 8px;
  font-size: 16px;
  color: #474747;
  border: 1px solid #474747;
  border-radius: 8px;
  background-color: #fff;
`;

const SortProducts = ({ onSortChange }) => {
    return (
      <SortContainer>
        <Label htmlFor="sort">Ordenar por:</Label>
        <Select id="sort" onChange={(e) => onSortChange(e.target.value)}>
          <option value="priceAsc">Menor preço</option>
          <option value="priceDesc">Maior preço</option>
        </Select>
      </SortContainer>
    );
  };

export default SortProducts;
