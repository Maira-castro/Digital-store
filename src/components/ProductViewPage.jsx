import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import GalleryComponent from './GalleryComponent';
import BuyBox from './BuyBox'; 
import { useProducts } from '../components/ProductsContext'; 
import ProductOptions from './ProductOptions';
import RecommendedProducts from './RecommendedProducts ';
import styled from 'styled-components';
const Legend = styled.h2`
  font-size: 20px;
  color: #666666;
  margin-bottom: 4px;
`; 
const ProductViewPage = () => {
    const { id } = useParams();
    const { products } = useProducts();
  
    // Encontrar o produto com o ID correspondente
    const product = products.find((prod) => prod.id === parseInt(id));
    const options = ["40", "41", "42", "43"]; 
    // Verificar se o produto foi encontrado
    if (!product) {
      return <div>Produto não encontrado.</div>;
    }
  
    return (
      <>
      <div style={{ display: 'flex',gap:'120px',backgroundColor:'#F5F5F5', padding:'80px',  flexWrap: "wrap",marginBottom:'-90px'}}>
        <GalleryComponent
           
          images={product.images}
          width="700px"
          height="570px"
          radius="4px"
          
        />
        <BuyBox
          name={product.name}
          reference={"1234567"}
          rating={90}
          price={product.price}
          priceDiscount={product.priceDiscount}
          description={product.description}
          stars={product.stars}
        
        >
          <ProductOptions 
          options={options} 
          shape="square" 
          type="text" 
          radius="4px" 
        />
        <Legend>Cor</Legend>
        <ProductOptions
        options={["white", "#ffcccb", "#cfed64"]}
        radius="8px"
        shape="circle"
        type="color"
      />
          </BuyBox>
      </div>
       <RecommendedProducts />
       </>
    );
  };
  
  export default ProductViewPage;


