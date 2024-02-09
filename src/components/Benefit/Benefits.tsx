import { StyledBenefitsCardsContainer, StyledBenefitsContainer, StyledBenefitsTitleContainer } from "./Benefits.styled";
import Typography from '@mui/material/Typography'
import Cards from "../Cards";
import { GoBrowser } from "react-icons/go";
import {cardsData} from "./CardData";

const Benefits = () => {
    const benefitCardData = cardsData
    const renderedCards = benefitCardData.map((card, index) => {
        return <Cards key={index} description={card.description} icon={card.icon}>{card.title}</Cards>
    })
  return (
    <StyledBenefitsContainer>
      <StyledBenefitsTitleContainer>
        <Typography fontWeight={700} fontSize={48}>
          The Amazing Benefits
        </Typography>
      </StyledBenefitsTitleContainer>
      <StyledBenefitsCardsContainer>
        {renderedCards}
      </StyledBenefitsCardsContainer>

    </StyledBenefitsContainer>
  );
};

export default Benefits;
