// src/components/Section.js
import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-right: 120px;
  margin-top: 30px;
  margin-left: 120px;
  margin-bottom: 0x;
`;

const Title = styled.h2`
  /* text-align: ${({ titleAlign }) => titleAlign}; */
  text-align: ${({ $titleAlign }) => $titleAlign};
  font-size: 24px;
  color: darkgray;
`;

const Section = ({ title, titleAlign }) => {
  return (
    <SectionContainer>
      <Title $titleAlign={titleAlign}>{title}</Title>
    </SectionContainer>
  );
};

export default Section;
