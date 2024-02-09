import {
  StyledNavcontainer,
  StyledLinkContainer,
  StyledNavInnerContainer,
  StyledLinkText,
  StyledNavButton
} from "./Navbar.styled";
import { useEffect, useState } from "react";

import Button from "@mui/material/Button";

import BrandLogo from "../../assets/logo/brandLogo.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);
  const changeNavBg = () => {
    window.scrollY >= 80 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  let color = navBg? 'white': 'transparent';

  return (
    <StyledNavcontainer color={color}>
      <StyledNavInnerContainer>
        <Link to={`/`}>
          <img src={BrandLogo} alt="Arrium Logo" />
        </Link>
        <StyledLinkContainer>
          <ScrollLink to="Benefits" offset={-30} smooth={true} duration={500}>
            <StyledNavButton variant="text">
              <StyledLinkText>Benefits</StyledLinkText>
            </StyledNavButton>
          </ScrollLink>
          <ScrollLink to="HowItWorks" offset={-30} smooth={true} duration={500}>
            <StyledNavButton variant="text">
              <StyledLinkText>How it Works</StyledLinkText>
            </StyledNavButton>
          </ScrollLink>
          <ScrollLink to="ContactUs" smooth={true} duration={500}>
            <StyledNavButton variant="text">
              <StyledLinkText>Contact Us</StyledLinkText>
            </StyledNavButton>
          </ScrollLink>
        </StyledLinkContainer>
      </StyledNavInnerContainer>

      <StyledNavInnerContainer>
        <StyledNavButton variant="text">
          <StyledLinkText>Login</StyledLinkText>
        </StyledNavButton>
        <Button
          sx={{ padding: "0.5rem 1rem", borderRadius: "10px" }}
          color="primary"
          variant="contained"
        >
          Start Free Trial
        </Button>
      </StyledNavInnerContainer>
    </StyledNavcontainer>
  );
};

export default Navbar;
