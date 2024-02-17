import styled from "styled-components";
import { FaFacebook } from 'react-icons/fa';
import React from 'react';

const FooterContainer = styled.footer`
  background-color: #444;
  color: #fff;
  padding: 10px;
  text-align: center;
  margin-top: 60px;
`;

const SocialIconsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin: 0 10px;
  transition: color 0.3s ease;
  display: flex;
  align-items: center; 
  text-decoration: none;

  &:hover {
    color: #0084ff;
    text-decoration: none;
  }
`;

const IconText = styled.span`
  margin-left: 5px; /* Adjust the margin as needed */
  font-size: 16px;
  display: inline-block; /* Ensure proper alignment */
`;

export default function Footer () {
  return (
    <FooterContainer>
      {/* <p>&copy; {new Date().getFullYear()} FHP Company. All Rights Reserved.</p> */}
      <div>
        <SocialIconsContainer>
          <SocialIconLink href="https://www.facebook.com/fluidhydropower/">
            <FaFacebook />
            <IconText>Fluid Hydro Power</IconText>
          </SocialIconLink>
        </SocialIconsContainer>
      </div>
      <p>© 2024 Fluid Hydro Power Company. All rights reserved.</p>
    </FooterContainer>
  );
}

