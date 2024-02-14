import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

export default function Footer () {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} FHP Company. All Rights Reserved.</p>
    </FooterContainer>
  );
}

