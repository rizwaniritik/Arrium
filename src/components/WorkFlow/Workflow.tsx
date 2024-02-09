import { Typography } from "@mui/material";
import { StyledVerticalWorkflowContainer, StyledWorkflowContainer, StyledWorkflowTitleContainer } from "./Workflow.styled";
import { HorizontalCards, VerticalCards } from "../Cards";
import { workFlowHorizontalData, workFlowVerticalData } from "./WorkFlowData";


const Workflow = () => {
  return (
    <StyledWorkflowContainer>
      <StyledWorkflowTitleContainer>
        <Typography fontWeight={700} fontSize={48}>
          How Arrium Works
        </Typography>
      </StyledWorkflowTitleContainer>
      <HorizontalCards>{workFlowHorizontalData[0]}</HorizontalCards>
      <StyledVerticalWorkflowContainer>
        <VerticalCards>{workFlowVerticalData[0]}</VerticalCards>
        <VerticalCards>{workFlowVerticalData[1]}</VerticalCards>
      </StyledVerticalWorkflowContainer>
      <HorizontalCards>{workFlowHorizontalData[1]}</HorizontalCards>
    </StyledWorkflowContainer>
  );
}

export default Workflow