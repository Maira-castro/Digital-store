import React, { useState, useEffect, useContext } from 'react';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';
import SortProducts from '../components/SortProducts';
import FilterGroup from '../components/FilterGroup';
import Section from '../components/Section';
import styled from 'styled-components';
import { SearchContext } from '../components/SearchContext';
import 'boxicons';
import "../index.css"

const PageContainer = styled.div`
  display: flex;
 flex-wrap: wrap; 
 background-color:#F5F5F5;
`;

const Sidebar = styled.div`
  width: 308px;
  height: 100px;
  margin-right: 10px;
  margin-left: 20px;
  margin-top: 110px;
  margin-bottom: 550px;
  padding-top : 12px;
  background-color:white;

  @media (max-width: 768px) {
    left:-18px;
    width: 308px;
    position: absolute;
    height: auto;
    margin-top: -12px;
    display: ${props => (props.$isFilterVisible ? 'block' : 'none')};
  }

`;

const Content = styled.div`
  flex: 1;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #CCCCCC;
  margin: 10px 0;
`;

const ControlPanel = styled.div`
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 15px;
    width: 100%;
    margin-top: 0px;
  }
`;

const FilterButton = styled.button`
  padding: 10px 15px;
  background-color: #C92071;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ProductListingPage = () => {
  

  const [products, setProducts] = useState([
    { 
      id:1,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 300,
      priceDiscount: 249.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },
    { 
      id:2,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 200,
      priceDiscount: 149.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },
    { 
      id:3,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 400,
      priceDiscount: 389.9,
      marka: 'k-swiss',
      category: 'Casual',
      type: 'tenis',
    },
    {
      id:4,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 200,
      priceDiscount: 149.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },
    {
      id:5,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 49.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },
    {
      id:6,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 59.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },
    {
      id:7,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 69.9,
      marka: 'k-swiss',
      category: 'Casual',
      type: 'tenis',
    },
    {
      id:8,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 69.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },
    {
      id:9,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 69.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },
    {
      id:10,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 69.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },
    {
      id:11,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 79.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },
    {
      id:12,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 89.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },
    {
      id:13,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 99.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },
    {
      id:14,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 109.9,
      marka: 'k-swiss',
      category: 'Casual',
      type: 'tenis',
    },
    {
      id:15,
      name: "K-Swiss V8 - Masculino",
      image: "./assets/produto.png",
      price: 109.9,
      marka: 'k-swiss',
      category: 'Esporte e lazer',
      type: 'tenis',
    },

  ]);



  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState('priceAsc');
  const [selectedMarka, setSelectedMarka] = useState({ opt1: false, opt2: false });
  const [selectedCategory, setSelectedCategory] = useState({ optA: false, optB: false });
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const { searchTerm } = useContext(SearchContext);


  useEffect(() => {

    const filtered = products.filter(product => {
      const markaMatch = selectedMarka[product.marka] || Object.values(selectedMarka).every(val => !val);
      const categoryMatch = selectedCategory[product.category] || Object.values(selectedCategory).every(val => !val);
      const searchMatch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.marka.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());


      return markaMatch && categoryMatch && searchMatch;
    });
    setFilteredProducts(filtered);
  }, [selectedMarka, selectedCategory, searchTerm, products]);

  useEffect(() => {
    // Ordena os produtos filtrados
    let sorted = [...filteredProducts];
    if (sortOrder === 'priceAsc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'priceDesc') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedProducts(sorted);
  }, [sortOrder, filteredProducts]);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };
  //logica para filtrar a marka
  const handleCheckboxChange = (option) => {
    setSelectedMarka((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };
  //logica para filtrar a categoria
  const handleCategoryChange = (category) => {
    setSelectedCategory((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedOption((prevValue) => (prevValue === value ? null : value));
  };

  const toggleFilterVisibility = () => {
    setIsFilterVisible(prev => !prev);
  };



  const filterOptions1 = [
    { text: 'Addidas', value: 'Addidas' },
    { text: 'Calenciaga', value: 'Calenciaga' },
    { text: 'K-Swiss', value: 'k-swiss' },
    { text: 'Nike', value: 'Nike' },
    { text: 'Puma', value: 'Puma' },

  ];

  const filterOptions2 = [
    { text: 'Esporte e lazer', value: 'Esporte e lazer' },
    { text: 'Casual', value: 'Casual' },
    { text: 'Utilitário', value: 'Utilitário' },
    { text: 'Corrida', value: 'Corrida' },

  ];

  const filterOptions3 = [
    { text: 'Masculino' },
    { text: 'Feminino' },
    { text: 'Unisex' },

  ];
  const filterOptions4 = [
    { text: 'Novo', value: 'Novo' },
    { text: 'Usado', value: 'Usado' },

  ];

  const totalProducts = filteredProducts.length; // Total de produtos filtrados

  return (
    <div style={{ display: 'flex' }}>
      <PageContainer >

        <Sidebar $isFilterVisible={isFilterVisible}>
          {isFilterVisible && (
            <button
              onClick={toggleFilterVisibility}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '10px',
                marginLeft: '0px',
                color: '#474747'
              }}
            >
              <span >Filtrar por:</span>
              <box-icon name="x" color="#474747" size="16px"></box-icon>
            </button>
          )}

          <h2 className="filter-title" style={{ fontSize: '14px', color: '#474747', marginBottom: '10px', marginLeft: '12px' }}>Filtrar por:</h2>
          <Divider />

          <FilterGroup
            titulo="Marka"
            inputType="checkbox"
            options={filterOptions1}
            onChange={handleCheckboxChange} 
          />
          <FilterGroup
            titulo="Categoria"
            inputType="checkbox"
            options={filterOptions2}
            onChange={handleCategoryChange} 
          />
          <FilterGroup
            titulo="Gênero"
            inputType="checkbox"
            options={filterOptions3}
            onChange={""} 
          />
          <FilterGroup
            titulo="Estado"
            inputType="radio"
            options={[
              { text: 'Novo', value: 'novo' },
              { text: 'Usado', value: 'usado' },

            ]}
            selectedOption={selectedOption}
            onChange={handleRadioChange}
          />

        </Sidebar>

        <ControlPanel>
          <SortProducts onSortChange={handleSortChange} />
          <FilterButton onClick={toggleFilterVisibility}>
            <box-icon name="filter-alt" color="white" size="24px"></box-icon>
          </FilterButton>
        </ControlPanel>

        <Content>
          <Section title={`${totalProducts} produto(s) encontrado(s)`} titleAlign="left" />
          <ProductList products={sortOrder === 'priceAsc' || sortOrder === 'priceDesc' ? sortedProducts : filteredProducts} />
        </Content>

      </PageContainer>
    </div>

  );
};

export default ProductListingPage;