import {
  StyledVerticalCardsContainer,
  StyledCardsImageContainer,
  StyledCardsWorkTitleContainer,
  StyledCardsBodyContainer,
} from "./Cards.styled";
import Typography from "@mui/material/Typography";


const VerticalCards = ({ children}) => {
  return (
    <StyledVerticalCardsContainer color={children.tile_color}>
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

        <img src={children.image} alt="" />
    </StyledVerticalCardsContainer>
  );
};

export default VerticalCards;
