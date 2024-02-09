import { TextField, styled } from "@mui/material";
import bg from '../../assets/logo/backgroundcontact.png'

export const StyledContactContainer = styled("main")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

export const StyledContactMainContainer = styled('div')`
    display: flex;
    flex-direction: row;
    background-image: url("${bg}");
    background-size: cover;
    max-width: 90%;
    border-radius: 2rem;
    padding: 4rem 0;
`

export const StyledContactFormContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 50%;
  padding-left: 5.5rem;
  padding-right: 5.5rem;
`;

export const StyledContactDescContainer = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 50%;
  padding-left: 5.5rem;
  gap: 2rem;
`;

export const StyledForm = styled("div")`
margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const ContactInput = styled(TextField)<{ inputWidth: string }>`
  background-color: white;
  width: ${(props) => props.inputWidth};
  margin-bottom: 1.25rem;
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

export const ContactFormContainer = styled("div")`
  display: flex;
  gap: 1rem
`;