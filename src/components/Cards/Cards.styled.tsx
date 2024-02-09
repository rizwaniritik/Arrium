import { styled } from "@mui/material";

export const StyledCardsContainer = styled("main")`
  display: flex;
  flex-direction: column;
  max-width: 30%;
  height: 244px;
  background-color: #f9faff;
  padding: 1.5rem;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
`;


export const StyledCardsIconContainer = styled("div")`
  margin-top: 1.5rem;
`;

export const StyledCardsTitleContainer = styled("div")`
    margin-top: 2rem;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
`;

export const StyledHorizontalCardsContainer = styled("main")`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  height: 380px;
  background-color: ${(props) => props.color};
  margin: 1.5rem 5rem;
  border-radius: 2.5rem;
`;

export const StyledCardsImageContainer = styled("div")`
margin-bottom: 0 0;
padding-bottom: 0 0;
`;

export const StyledCardsBodyContainer = styled("div")`
padding-left: 4.5rem;
padding-top: 3.125rem;
`;

export const StyledCardsWorkTitleContainer = styled("div")`
  margin-top: 0.75rem;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
`;

export const StyledVerticalCardsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(props) => props.color};
  border-radius: 2.5rem;
  justify-content: space-between;
`;
