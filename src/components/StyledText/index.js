import styled from "styled-components/native";

const StyledTitle = styled.Text`
  color: ${(props) => props.theme.colors.dark};
  font-size: 44px;
  font-weight: ${(props) => props.theme.fonts.bold};
`;

export default StyledTitle;
