import { LoginInput, StyledForm, StyledLoginFormContainer, StyledSignInContainer, StyledSignInInnerContainer, StyledSignInMainContainer, StyledWarning } from "../SignIn/SignIn.styled"
import BrandLogo from "../../assets/logo/brandLogo.svg";
import Typography from "@mui/material/Typography";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <StyledSignInContainer>
      <StyledSignInInnerContainer>
        <img src={BrandLogo} alt="" />
        <StyledWarning></StyledWarning>
        <StyledSignInMainContainer>
          <Typography fontSize={28} fontWeight={400}>
            Reset Password
          </Typography>
          <StyledForm>
            <StyledLoginFormContainer>
              <LoginInput
                label="New Password"
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
              <LoginInput
                label="Confirm new Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleToggleConfirmPassword} edge="end">
                        {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
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
                Save
              </Typography>
            </Button>
          </StyledForm>
        </StyledSignInMainContainer>
      </StyledSignInInnerContainer>
    </StyledSignInContainer>
  );
}

export default ResetPassword
