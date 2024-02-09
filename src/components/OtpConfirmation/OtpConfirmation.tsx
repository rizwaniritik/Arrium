import {
  StyledForm,
  StyledSignInFailWarningContainer,
  StyledSignInMainContainer,
  StyledSignInNewAccount,
} from "../../pages/SignIn/SignIn.styled";
import { Typography, Button } from "@mui/material";
import { StyledOtpContainer, StyledOtpTextContainer } from "./OtpConfirmation.styled";

const OtpConfirmation = () => {
  return (
    <StyledSignInMainContainer>
      <Typography fontSize={28} fontWeight={400}>
        Sign Up
      </Typography>
      <StyledForm>
        <Typography fontSize={16} fontWeight={400} sx={{ textAlign: "center" }}>
          Enter a 4-digit code that we’ve <br></br>sent you in SMS
        </Typography>
        <StyledOtpContainer>
          <StyledOtpTextContainer />
          <StyledOtpTextContainer />
          <StyledOtpTextContainer />
          <StyledOtpTextContainer />
        </StyledOtpContainer>
        <Typography fontSize={16} fontWeight={600} color={"#888A95"}>Resend code</Typography>
        <Typography fontSize={16} fontWeight={600} color={"#888A95"}>Change phone number</Typography>
        <StyledSignInFailWarningContainer></StyledSignInFailWarningContainer>
        <Button
          variant="contained"
          sx={{
            width: "23.635rem",
            borderRadius: "0.5rem",
            height: "3rem",
          }}
        >
          <Typography
            fontWeight={600}
            fontSize={16}
            textTransform={"capitalize"}
          >
            Continue
          </Typography>
        </Button>
        <StyledSignInNewAccount>
          <Typography color={"#A6A8B2"} fontWeight={400}>
            {" "}
            Already have an account?
          </Typography>
          <Button sx={{ padding: 0 }}>
            <Typography
              fontWeight={600}
              fontSize={16}
              textTransform={"capitalize"}
              color={"#0A0A0A"}
            >
              Log in
            </Typography>
          </Button>
        </StyledSignInNewAccount>
      </StyledForm>
    </StyledSignInMainContainer>
  );
};

export default OtpConfirmation;
