import { LoginInput, StyledForm, StyledLoginFormContainer, StyledSignInContainer, StyledSignInInnerContainer, StyledSignInMainContainer, StyledWarning } from "../SignIn/SignIn.styled"
import BrandLogo from "../../assets/logo/brandLogo.svg";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Sent from "../../assets/logo/Sign Up Step.svg"

const EmailSent = () => {
  return (
    <StyledSignInContainer>
      <StyledSignInInnerContainer>
        <img src={BrandLogo} alt="" />
        <StyledWarning></StyledWarning>
        <StyledSignInMainContainer>
          <img src={Sent} alt="" />
          <StyledForm>
            <StyledLoginFormContainer>
              <Typography fontWeight={400} fontSize={28}>
                Email Sent
              </Typography>
              <Typography fontWeight={400} sx={{display: "flex", textAlign: "center"}}>
                An email has been sent to your email address.<br></br> Follow the
                instructions in the email to reset your <br></br>password
              </Typography>
            </StyledLoginFormContainer>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                borderRadius: "0.5rem",
                height: "3rem",
                marginTop: "1.75rem",
              }}
            >
              <Typography
                fontWeight={600}
                fontSize={16}
                textTransform={"capitalize"}
              >
                Done
              </Typography>
            </Button>
          </StyledForm>
        </StyledSignInMainContainer>
      </StyledSignInInnerContainer>
    </StyledSignInContainer>
  );
}

export default EmailSent