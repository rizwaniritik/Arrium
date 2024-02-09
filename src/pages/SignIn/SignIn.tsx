import { LoginInput, StyledForm, StyledLoginFormContainer, StyledLoginResetContainer, StyledSignInAccountDisabledContainer, StyledSignInAccountDisabledDescriptionContainer, StyledSignInContainer, StyledSignInFailWarningContainer, StyledSignInInnerContainer, StyledSignInMainContainer, StyledSignInNewAccount, StyledWarning } from "./SignIn.styled"
import BrandLogo from "../../assets/logo/brandLogo.svg";
import { Typography, Button, Checkbox, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";
import Cross from "../../assets/logo/Frame 28893.svg"
import { Visibility, VisibilityOff } from "@mui/icons-material";


const SignUp = () => {
  const [loginEnabled, setLoginEnabled] = useState(true)
  const [verification, setVerification] = useState(false)
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledSignInContainer>
      <StyledSignInInnerContainer>
        <img src={BrandLogo} alt="" />

        <StyledWarning>
          {loginEnabled && (
            <StyledSignInAccountDisabledContainer>
              <img src={Cross} alt="" />
              <StyledSignInAccountDisabledDescriptionContainer>
                <Typography fontWeight={600}>
                  Your account has been disabled.
                </Typography>
                <Typography fontWeight={400} fontSize={12}>
                  To reactivate your account, please contact the Team using the
                  contact form
                </Typography>
              </StyledSignInAccountDisabledDescriptionContainer>
            </StyledSignInAccountDisabledContainer>
          )}
        </StyledWarning>

        <StyledSignInMainContainer>
          <Typography fontSize={28} fontWeight={400}>
            Login to your account
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
            <StyledLoginResetContainer>
              <Typography fontSize={16} fontWeight={500} display={"flex"}>
                <Checkbox defaultChecked size="small" sx={{ padding: 0 }} />
                Remember me
              </Typography>
              <Typography fontSize={16} fontWeight={500}>
                Forgot Password?
              </Typography>
            </StyledLoginResetContainer>
            <StyledSignInFailWarningContainer>
              {verification && (
                <Typography fontWeight={500} color={"#F25555"}>
                  Your email address or password is incorrect
                </Typography>
              )}
            </StyledSignInFailWarningContainer>
            <Button
              onClick={() => {
                setVerification(true);
              }}
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
                Log In
              </Typography>
            </Button>
            <StyledSignInNewAccount>
              <Typography color={"#A6A8B2"} fontWeight={400}>
                {" "}
                Don't have an account yet?
              </Typography>
              <Button sx={{ padding: 0 }}>
                <Typography
                  fontWeight={600}
                  fontSize={16}
                  textTransform={"capitalize"}
                  color={"#0A0A0A"}
                >
                  Sign Up
                </Typography>
              </Button>
            </StyledSignInNewAccount>
          </StyledForm>
        </StyledSignInMainContainer>
      </StyledSignInInnerContainer>
    </StyledSignInContainer>
  );
}

export default SignUp