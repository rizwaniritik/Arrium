import { StyledFooterButton, StyledFooterContainer, StyledFooterIconContainer, StyledFooterInnerContainer, StyledFooterLinkContainer, StyledFooterLoginContainer, StyledFooterSocialContainer, StyledLinkText } from "./Footer.styled";
import BrandLogo from "../../assets/logo/brandLogo.svg";
import Insta from "../../assets/logo/insta.svg"
import Fb from "../../assets/logo/fb.svg"
import Typography from '@mui/material/Typography'
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <StyledFooterContainer>
      <StyledFooterInnerContainer>
        <img src={BrandLogo} alt="Arrium Logo" />

        <StyledFooterLinkContainer>
          <StyledFooterButton>
            <StyledLinkText>Benefits</StyledLinkText>
          </StyledFooterButton>
          <StyledFooterButton>
            <StyledLinkText>How it works</StyledLinkText>
          </StyledFooterButton>
          <StyledFooterButton>
            <StyledLinkText>Contact US</StyledLinkText>
          </StyledFooterButton>
        </StyledFooterLinkContainer>
        <StyledFooterSocialContainer>
          <Typography fontSize={16} fontWeight={500}>
            info@arrium.com
          </Typography>
          <StyledFooterIconContainer>
            <img src={Insta} alt="" />
            <img src={Fb} alt="" />
          </StyledFooterIconContainer>
        </StyledFooterSocialContainer>
      </StyledFooterInnerContainer>
      <StyledFooterInnerContainer>
        <StyledFooterLoginContainer>
          <Button
            sx={{ padding: "0.5rem 1rem", borderRadius: "5px" ,border: "ridge 1px", width:"12rem"}}
            color="inherit">
            Login
          </Button>
          <Button
            sx={{ padding: "0.5rem 1rem", borderRadius: "10px" ,width:"12rem"}}
            color="primary"
            variant="contained"
          >
            Start Free Trial
          </Button>
        </StyledFooterLoginContainer>
      </StyledFooterInnerContainer>
    </StyledFooterContainer>
  );
};

export default Footer;
