import Navbar from "../../components/Navbar";
import {
  StyledLeftContainer,
  StyledNotFoundContainer,
  StyledNotFoundMainContainer,
  StyledRightContainer
} from "./NotFound.styled";

import LaptopLogo from "../../assets/logo/Laptop.svg";
import ArrowLogo from "../../assets/logo/Arrow_04.svg";

import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <StyledNotFoundContainer>
      <Navbar />
      <StyledNotFoundMainContainer>
        <StyledLeftContainer>
          <Typography fontWeight={700} fontSize={146} color={"#0A0A0A"}>
            404
          </Typography>
          <Box position="relative">
            <Typography fontWeight={400} fontSize={18} color={"#585A61"}>
              This page doesn't exist or was remond.
              <br /> We suggest you back to home
            </Typography>
            <Box position="absolute" top="2rem" left="240px">
              <img src={ArrowLogo} alt="Arrow Logo" />
            </Box>
          </Box>
          <Button
            sx={{
              padding: "1rem 1.5rem",
              borderRadius: "10px",
              width: "40%",
              marginTop: "2rem"
            }}
            color="primary"
            variant="contained"
          >
            <Typography
              fontSize={16}
              fontWeight={600}
              color={"white"}
              textTransform={"none"}
            >
              <Link to={`/`}>Back to Home</Link>
            </Typography>
          </Button>
        </StyledLeftContainer>
        <StyledRightContainer>
          <img src={LaptopLogo} height={734} alt="Laptop logo" />
        </StyledRightContainer>
      </StyledNotFoundMainContainer>
    </StyledNotFoundContainer>
  );
};

export default NotFound;
