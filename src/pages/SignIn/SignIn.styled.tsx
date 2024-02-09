import {TextField, styled} from '@mui/material'

export const StyledSignInContainer = styled('main')`
    display: flex;
    flex-direction: column;
   align-items: center;
`;
export const StyledSignInInnerContainer = styled("main")`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  align-items: center;
`;

export const StyledSignInMainContainer = styled("div")`
  display: flex;
  min-height: 33.25rem;
  flex-direction: column;
  background-color: #f2f3f7;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding: 2.5rem 2.5rem;
  border-radius: 1.25rem;
`;


export const LoginInput = styled(TextField)`
  background-color: white;
  width: 24rem;
  border-radius: 1rem;
  &&& {
    border-radius: 15px;
  }
  & > .MuiOutlinedInput-root {
    border-radius: 15px;
  }
  & > .MuiOutlinedInput-root > fieldset {
    outline: none;
    border: none;
  }
`;

export const StyledForm = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
  align-items: center;
  justify-content: center;
`;

export const StyledLoginFormContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 28.635rem;
`;

export const StyledLoginResetContainer = styled('div')`
    display: flex;
    justify-content: space-between;
`
export const StyledSignInNewAccount = styled('div')`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
`

export const StyledSignInAccountDisabledContainer = styled("div")`
  display: flex;
  gap: 0.625rem;
  justify-content: center;
  
  padding: 0.75rem;
  border: 1px solid #fa6464;
  border-radius: 0.75rem;
  max-width: 28.635rem;
`;

export const StyledSignInAccountDisabledDescriptionContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledWarning = styled("div")`
  display: flex;
  min-height: 5rem;
  margin-top: 1.5rem;
`;

export const StyledSignInFailWarningContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 1.25rem;
`;

export const StyledGapContainer = styled("div")`
`