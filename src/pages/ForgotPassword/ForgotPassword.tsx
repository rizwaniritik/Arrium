import { LoginInput, StyledForm, StyledLoginFormContainer, StyledSignInContainer, StyledSignInInnerContainer, StyledSignInMainContainer, StyledWarning } from "../SignIn/SignIn.styled"
import BrandLogo from "../../assets/logo/brandLogo.svg";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const ForgotPassword = () => {
  return (
    <StyledSignInContainer>
      <StyledSignInInnerContainer>
        <img src={BrandLogo} alt="" />
        <StyledWarning>

        </StyledWarning>
        <StyledSignInMainContainer>
          <Typography fontSize={28} fontWeight={400}>
            Login to your account
          </Typography>
          <StyledForm>
            <StyledLoginFormContainer>
              <Typography fontWeight={400} fontSize={16}>
                Enter email address that you used to register
              </Typography>
              <LoginInput
                label="Enter your email address"
              />
            </StyledLoginFormContainer>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                borderRadius: "0.5rem",
                height: "3rem",
                marginTop: "1.75rem"
              }}
            >
              <Typography
                fontWeight={600}
                fontSize={16}
                textTransform={"capitalize"}
              >
                Send Instructions
              </Typography>
            </Button>
            </StyledForm>
            </StyledSignInMainContainer>
      </StyledSignInInnerContainer>
    </StyledSignInContainer>
  );
}

export default ForgotPassword