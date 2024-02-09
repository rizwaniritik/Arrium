import {
  LoginInput,
  StyledForm,
  StyledGapContainer,
  StyledLoginFormContainer,
  StyledSignInFailWarningContainer,
  StyledSignInMainContainer,
  StyledSignInNewAccount,
} from "../../pages/SignIn/SignIn.styled";
import { Typography, Button, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledSignInMainContainer>
      <Typography fontSize={28} fontWeight={400}>
        Sign Up
      </Typography>
      <StyledForm>
        <StyledLoginFormContainer>
          <LoginInput />
          <LoginInput
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </StyledLoginFormContainer>
        <StyledGapContainer></StyledGapContainer>
        <Typography fontWeight={400} fontSize={16}>
          If you have a 6-digit code, enter it below
        </Typography>
        <LoginInput label="6-digit code" />
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

export default Registration;
