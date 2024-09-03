import React from "react";
import styled from "styled-components/native"; // Use styled-components/native para React Native

const StyledContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.padding || "20px"};
  background-color: ${(props) => props.bgColor || "white"};
`;

export default function Container({ children, bgColor, padding, ...props }) {
  return (
    <StyledContainer bgColor={bgColor} padding={padding} {...props}>
      {children}
    </StyledContainer>
  );
}
