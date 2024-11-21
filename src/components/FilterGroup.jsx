import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
   width: 308px;
   height: auto; 
   padding: 10px;
   background-color: white;

   @media (max-width: 768px) {
    width: 308px;
    height: auto;
    bottom: 5px;
    z-index: 10;
  position: relative;
  }
`;

const FilterTitle = styled.h3`
  font-size: 14px;
  color: #474747;
  margin-bottom: 5px;
  background-color: white;
`;

const Checkbox = styled.input`
  width: 22px;
  height: 22px;
  margin-right: 8px;
  cursor: pointer;
  accent-color: #C92071;
`;

const FilterGroup = ({ titulo, inputType, options, onChange, selectedOption }) => {
  return (
    <FilterContainer>

      <FilterTitle>{titulo}</FilterTitle>

      {options.map((option, index) => (
        <div key={option.value || index}>
          <Checkbox
            type={inputType}
            name={inputType === 'radio' ? 'uniqueRadioGroup' : undefined} // Define o name apenas para radio
            value={option.value}
            checked={inputType === 'radio' ? selectedOption === option.value : undefined}
            onChange={() => onChange(option.value)} // Chamando a função ao mudar o checkbox
          />

          {option.text}
        </div>
      ))}
    </FilterContainer>

  );
};

export default FilterGroup;
