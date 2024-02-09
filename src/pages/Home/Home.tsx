import { Box, Button, IconButton, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import {
  StyledHomeContainer,
  StyledHomeDescriptionContainer,
  StyledHomeImageContainer,
  StyledHomeMainContainer,
} from "./Home.styled";
import Benefits from "../../components/Benefit";
import WorkFlow from "../../components/WorkFlow";
import Contact from "../../components/Contact";
import { useEffect, useState } from "react";
import { Element, animateScroll as Scroll } from "react-scroll";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Footer from "../../components/Footer";

const Home = () => {
  const [scrollVisible, setScrollVisible] = useState(false);
  const changeNavBg = () => {
    window.scrollY >= 500 ? setScrollVisible(true) : setScrollVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  useEffect(() => {
    Scroll.scrollToTop();
  }, []);

  const handleClick = () => {
    Scroll.scrollToTop();
  };
  return (
    <div>
      {scrollVisible && (
        <Box
          position="fixed"
          bottom="20px"
          right="20px"
          bgcolor="
#3071F2"
          borderRadius="50%"
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          onClick={handleClick}
        >
          <IconButton>
            <ArrowUpwardIcon
              sx={{
                color: "white",
              }}
            />
          </IconButton>
        </Box>
      )}

      <StyledHomeContainer>
        <Navbar />
        <StyledHomeMainContainer>
          <StyledHomeDescriptionContainer>
            <Typography
              fontWeight={700}
              fontSize={18}
              color={"#3071F2"}
              marginBottom={"1.5rem"}
            >
              No refreshing. Auto accepting. Instant notifications.
            </Typography>
            <Typography
              fontWeight={700}
              fontSize={36}
              lineHeight={"44px"}
              marginBottom={"1.5rem"}
            >
              The freedom and flexibility to earn maximum amount, according to
              your schedule.
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={18}
              width={"82.5%"}
              color={"#49F199"}
            >
              Arrium allows you to set your preferences for the blocks that you
              want to work,<br></br>and then it accepts the blocks as soon as
              they appear.
            </Typography>
          </StyledHomeDescriptionContainer>
          <Button
            sx={{ padding: "0.5rem 1rem", borderRadius: "10px", width: "12%" }}
            color="primary"
            variant="contained"
          >
            Start Free Trial
          </Button>
          <StyledHomeImageContainer>
            <img src={"src/assets/logo/Search Running.png"} alt="" />
          </StyledHomeImageContainer>
        </StyledHomeMainContainer>
      </StyledHomeContainer>
      <Element name="Benefits">
        <Benefits />
      </Element>
      <Element name="HowItWorks">
        <WorkFlow />
      </Element>
      <Element name="ContactUs">
        <Contact />
      </Element>
      <Footer/>
    </div>
  );
};

export default Home;
