import { Button, TextField, Typography } from "@mui/material"
import { ContactFormContainer, ContactInput, StyledContactContainer, StyledContactDescContainer, StyledContactFormContainer, StyledContactMainContainer, StyledForm } from "./Contact.styled"

const Contact = () => {
    return (
      <StyledContactContainer>
        <StyledContactMainContainer>
          <StyledContactDescContainer>
            <Typography fontSize={42} fontWeight={700}>
              Talk to a human
            </Typography>
            <Typography fontSize={18} fontWeight={400} color={"#585A61"}>
              {
                "At Arrium, your email isn’t going to disappear into a black hole, your live chat is going to go unanswered."
              }
            </Typography>
            <Typography fontSize={18} fontWeight={400} color={"#585A61"}>
              {
                "We provide great customer service because it’s the kind of customer service we expect to receive ourselves. So, we deliver it in the same way we expect it to receive it."
              }
            </Typography>
          </StyledContactDescContainer>
          <StyledContactFormContainer>
            <Typography fontSize={42} fontWeight={700}>
              Have a question?
            </Typography>
            <Typography fontSize={18} fontWeight={400}>
              Get in touch and tell us how we can help
            </Typography>
            <StyledForm>
              <ContactFormContainer>
                <ContactInput inputWidth="17rem" label={"First Name"} />
                <ContactInput inputWidth="17rem" label={"Surname"} />
              </ContactFormContainer>
              <ContactInput label={"Your Email"} />
              <ContactInput label={"Your Question"} />
            </StyledForm>
            <Button
            >
              Send
            </Button>
          </StyledContactFormContainer>
        </StyledContactMainContainer>
      </StyledContactContainer>
    );
}

export default Contact