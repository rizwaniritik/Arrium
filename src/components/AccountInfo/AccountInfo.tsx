import {
  LoginInput,
  StyledForm,
  StyledLoginFormContainer,
  StyledSignInFailWarningContainer,
  StyledSignInMainContainer,
  StyledSignInNewAccount,
} from "../../pages/SignIn/SignIn.styled";
import {
  Typography,
  Button,
} from "@mui/material";

const AccountInfo = () => {

  return (
    <StyledSignInMainContainer>
      <Typography fontSize={28} fontWeight={400}>
        Sign Up
      </Typography>
      <StyledForm>
        <StyledLoginFormContainer>
          <LoginInput label="First Name" />
          <LoginInput label="Surname" />
          <LoginInput label="+44" />
          <LoginInput label="Choose timezone" />
        </StyledLoginFormContainer>
        <StyledSignInFailWarningContainer></StyledSignInFailWarningContainer>
        <Button
          variant="contained"
          sx={{
            width: "100%",
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

export default AccountInfo;
