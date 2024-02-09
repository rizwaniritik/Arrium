import { StyledCardsContainer, StyledCardsIconContainer, StyledCardsTitleContainer } from "./Cards.styled";
import Typography from '@mui/material/Typography'

const Cards = ({children, icon, description}) => {
  return (
    <StyledCardsContainer>
      <StyledCardsIconContainer><img src={icon} alt="" /></StyledCardsIconContainer>
      <StyledCardsTitleContainer>{children}</StyledCardsTitleContainer>
      <Typography fontSize={16} fontWeight={400}>
        {description}
      </Typography>
    </StyledCardsContainer>
  );
};

export default Cards;
