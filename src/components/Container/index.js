import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native"; // Use styled-components/native para React Native

export default function Container({ children, bgColor, padding, ...props }) {
  const StyledContainer = styled.View`
    flex: 1;
    padding: ${padding || "20px"};
    background-color: ${bgColor || "white"};
  `;
  return <StyledContainer {...props}>{children}</StyledContainer>;
}
