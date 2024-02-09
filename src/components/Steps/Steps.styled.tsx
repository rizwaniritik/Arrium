import { Typography, styled } from "@mui/material";

export const StyledStepsContainer = styled("div")`
  width: 51rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledStepContainer = styled('div')`
    display: flex;
    gap: 0.5rem;
    
`

export const StyledStepDescContainer = styled('div')`
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
    justify-content: center;
`

export const StepCount = styled(Typography)`
    font-size: 10px;
    font-weight: 600;
`

export const StepTitle = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
`;