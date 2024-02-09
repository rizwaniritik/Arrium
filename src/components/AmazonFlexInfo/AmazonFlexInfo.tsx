import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    LoginInput,
  StyledForm,
  StyledSignInFailWarningContainer,
  StyledSignInMainContainer,
  StyledSignInNewAccount,
} from "../../pages/SignIn/SignIn.styled";
import { Typography, Button, InputAdornment, IconButton } from "@mui/material";
import { useState } from "react";

const AmazonFlexInfo = () => {
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
        <Typography fontSize={16} fontWeight={400} sx={{ textAlign: "center" }}>
          Please, enter your Amazon Flex <br></br>account details
        </Typography>
        <LoginInput label="Amazon Flex Username" />
        <LoginInput
          label="Amazon Flex Password"
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
        <StyledSignInFailWarningContainer></StyledSignInFailWarningContainer>
      </StyledForm>
      <Button
        variant="contained"
        sx={{
          width: "23.635rem",
          borderRadius: "0.5rem",
          height: "3rem",
        }}
      >
        <Typography fontWeight={600} fontSize={16} textTransform={"capitalize"}>
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
    </StyledSignInMainContainer>
  );
};

export default AmazonFlexInfo;
