import { styled } from "@mui/material";
import BackGroundImage from "../../assets/images/background.png";

export const StyledHomeContainer = styled("div")`
  background-image: url(${BackGroundImage});
  background-size: cover;
  min-height: 100vh;
`;

export const StyledHomeMainContainer = styled("div")`
padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHomeDescriptionContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 57%;
    margin-bottom: 2em;
    text-align: center;
    margin-top: 3rem
`;

export const StyledHomeImageContainer = styled('div')`
    margin-top: 7.5%;
`;