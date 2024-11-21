import React from 'react';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px; 
  justify-content: center;
  margin-top: 45px;
  margin-bottom: 20px;
`;

// const ProductListing = ({ products }) => {
//   return (
//     <ProductListContainer>
//       {products.map((product, index) => (
//         <ProductCard key={index} {...product} />
        
//       ))}
//     </ProductListContainer>
//   );
// };
const ProductListing = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ProductListContainer>
  );
};


export default ProductListing;