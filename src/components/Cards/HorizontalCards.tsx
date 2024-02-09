import {
  StyledHorizontalCardsContainer,
  StyledCardsImageContainer,
  StyledCardsWorkTitleContainer,
  StyledCardsBodyContainer,
} from "./Cards.styled";
import Typography from "@mui/material/Typography";


const HorizontalCards = ({ children}) => {
  return (
    <StyledHorizontalCardsContainer color={children.tile_color}>
      <StyledCardsBodyContainer>
        <Typography
          fontSize={"4.5rem"}
          fontWeight={600}
          color={children.count_color}
        >
          {children.count}
        </Typography>
        <StyledCardsWorkTitleContainer>
          {children.title}
        </StyledCardsWorkTitleContainer>
        <Typography fontSize={18} fontWeight={400}>
          {children.description}
        </Typography>
      </StyledCardsBodyContainer>
      <StyledCardsImageContainer>
        <img src={children.image} alt="" />
      </StyledCardsImageContainer>
    </StyledHorizontalCardsContainer>
  );
};

export default HorizontalCards;
