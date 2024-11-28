import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-right: 120px;
  margin-top: 30px;
  margin-left: 120px;
  margin-bottom: 0x;
 
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const SectionTitle = styled.h2`
    text-align: ${({ $titleAlign }) => $titleAlign};
  font-size: 24px;
   color: darkgray;
`;

const SectionLink = styled.a`
  font-size: 18px;
  color: #C92071;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
     cursor:pointer;
  }
`;

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <SectionContainer>
      <SectionHeader style={{ justifyContent: titleAlign === "left" ? "space-between" : "center" }}>
        <SectionTitle $titleAlign={titleAlign}>{title}</SectionTitle>
        {link && link.href && <SectionLink href={link.href}>{link.text}</SectionLink>}
      </SectionHeader>
      {children}
    </SectionContainer>
  );
};

export default Section;

