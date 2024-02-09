import { styled } from "@mui/material";
import BackGroundImage from "../../assets/images/background.png";

export const StyledNotFoundContainer = styled("div")`
  background-image: url(${BackGroundImage});
  background-size: cover;
  min-height: 100vh;
`;

export const StyledNotFoundMainContainer = styled("main")`
  display: flex;
  padding: 0 5rem;
  height: 100%;
`;

export const StyledLeftContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 35%;
`;

export const StyledRightContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 65%;
  height: 100%;
`;
