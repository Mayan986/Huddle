import React from "react";
import { StyledHeader, Logo, StyledNav, Image } from "./styles/Header_Styled";
import { StyledContainer } from "./styles/Container_Styled";
import { Button } from "./styles/Button_Styled";
import { Flex } from "./styles/Flex_Styled";
export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledNav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try it free</Button>
        </StyledNav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="" />
        </Flex>
      </StyledContainer>
    </StyledHeader>
  );
};
