import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import SearchIcon from "./icons/SearchIcon";

const StyleHeader = styled.header`
  background-color: #00004d;
  position:sticky;
  top:0;
  z-index:10;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
      display: block;
    ` : `
      display: none;
    `}
    gap: 20px;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 70px 20px 20px;
    background-color: #00004d;
    @media screen and (min-width: 768px) {
      display: flex;
      position: static;
      padding: 0;
    }
`;

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  min-width: 30px;
  padding: 10px 0;
  svg{
    height:20px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pounter;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const SideIcons = styled.div`
  display: flex;
  align-items: center;
  a{
    display: inline-block;
    min-width: 20px;
    color:white;
     svg{
       width:14px;
       height: 14px;
     }
  }
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false); 
  return (
    <StyleHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>FHP Company</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/aboutus"}>About Us</NavLink>
            <NavLink href={"/products"}>All Products</NavLink>
            <NavLink href={"/categories"}>Categories</NavLink>
            <NavLink href={"/account"}>Account</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <SideIcons>
          <Link href={"/search"}><SearchIcon /></Link>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyleHeader>
  );
}
