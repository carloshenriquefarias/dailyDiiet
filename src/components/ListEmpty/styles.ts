import styled, {css} from "styled-components/native";

export const Container = styled.View` 
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONTS.SIZE.SM}px;
    font-family: ${theme.FONTS.FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_300};
  `};
  text-align: center;
  
`;