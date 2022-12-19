import styled, {css} from "styled-components/native";

export const Container = styled.View` 
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONTS.SIZE.MD}px;
    font-family: ${theme.FONTS.FAMILY.REGULAR};
    color: ${theme.COLORS.BASE.GRAY_700};
  `};
  text-align: center;
  margin-top: 100px
`;