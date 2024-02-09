import {TextField, styled } from "@mui/material";


export const StyledOtpContainer = styled('div')`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
`

export const StyledOtpTextContainer = styled(TextField)`
  width: 2.5rem;
  border-radius: 0.625;
  background-color: white;
  &&& {
    border-radius: 10px;
  }
  & > .MuiOutlinedInput-root {
    border-radius: 10px;
  }
  & > .MuiOutlinedInput-root > fieldset {
    outline: none;
    border: none;
  }
`;