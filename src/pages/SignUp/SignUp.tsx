import BrandLogo from "../../assets/logo/brandLogo.svg";
import Steps from "../../components/Steps/Steps";
import Registration from "../../components/Registration";
import AccountInfo from "../../components/AccountInfo";
import { StyledSignInContainer, StyledSignInInnerContainer, StyledWarning } from "../SignIn/SignIn.styled";
import OtpConfirmation from "../../components/OtpConfirmation";
import AmazonFlexInfo from "../../components/AmazonFlexInfo";


const SignIn = () => {

  return (
    <StyledSignInContainer>
      <StyledSignInInnerContainer>
        <img src={BrandLogo} alt="" />

        <StyledWarning>
          <Steps></Steps>
        </StyledWarning>
        <Registration></Registration>
        <AccountInfo></AccountInfo>
        <OtpConfirmation/>
        <AmazonFlexInfo/>

      </StyledSignInInnerContainer>
    </StyledSignInContainer>
  );
}

export default SignIn