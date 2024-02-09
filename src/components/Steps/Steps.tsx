import { StyledStepContainer, StyledStepDescContainer, StyledStepsContainer, StepCount, StepTitle} from "./Steps.styled"
import Tick from "../../assets/logo/tick.svg"

const Steps = () => {
    
  return (
    <StyledStepsContainer>
      <StyledStepContainer>
        <img src={Tick} alt="" />
        <StyledStepDescContainer>
          <StepCount>Step 1</StepCount>
          <StepTitle>Registration</StepTitle>
        </StyledStepDescContainer>
      </StyledStepContainer>
      <StyledStepContainer>
        <img src={Tick} alt="" />
        <StyledStepDescContainer>
          <StepCount>Step 2</StepCount>
          <StepTitle>Account Info</StepTitle>
        </StyledStepDescContainer>
      </StyledStepContainer>
      <StyledStepContainer>
        <img src={Tick} alt="" />
        <StyledStepDescContainer>
          <StepCount>Step 3</StepCount>
          <StepTitle>OTP Confirmation</StepTitle>
        </StyledStepDescContainer>
      </StyledStepContainer>
      <StyledStepContainer>
        <img src={Tick} alt="" />
        <StyledStepDescContainer>
          <StepCount>Step 4</StepCount>
          <StepTitle>Amazon Flex Info</StepTitle>
        </StyledStepDescContainer>
      </StyledStepContainer>
      <StyledStepContainer>
        <img src={Tick} alt="" />
        <StyledStepDescContainer>
          <StepCount>Step 5</StepCount>
          <StepTitle>Finish</StepTitle>
        </StyledStepDescContainer>
      </StyledStepContainer>
    </StyledStepsContainer>
  );
}

export default Steps