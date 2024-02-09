import { styled } from "@mui/material";
import Button from "@mui/material/Button";

export const StyledFooterContainer = styled("footer")`
  display: flex;
  margin-top: 5rem;
  padding: 3rem 5rem;
  justify-content: space-between;
`;
export const StyledFooterInnerContainer = styled("div")`
  display: flex;
  align-items:flex-start;
`;

export const StyledFooterLinkContainer = styled("div")`
  display: flex;
  flex-direction: column;
  margin-left: 5.5rem;
  gap: 1.25rem;
`;

export const StyledLinkText = styled("p")`
  text-transform: capitalize;
  color: #000000;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1px;
`;

export const StyledFooterButton = styled(Button)`
  margin-bottom: 1.25rem;
  justify-content: start;
  padding: 0 0;
`;

export const StyledFooterSocialContainer = styled('div')`
padding-top: 0px;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
  margin-left: 7.5rem;
`;

export const StyledFooterIconContainer = styled("div")`
  margin-top: 1.825rem;
  gap: 0.75rem;
  display: flex;
`;

export const StyledFooterLoginContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

