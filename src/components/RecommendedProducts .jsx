import React from 'react';
import { useProducts } from './ProductsContext'; 
import Section from './Section';
import ProductList from './ProductList';

const RecommendedProducts = () => {
  const { products } = useProducts();
  const recommendedProducts = products.slice(0, 4); // Mostra apenas 4 produtos

  return (
    <div style={{ backgroundColor: '#F5F5F5' }}>
    <Section
      title="Produtos recomendados"
      link={{
        text: "Ver todos →",
        href: "/products",
      }}
    >

      <ProductList products={recommendedProducts} />
    
    </Section>
    </div>
  );
};

export default RecommendedProducts;