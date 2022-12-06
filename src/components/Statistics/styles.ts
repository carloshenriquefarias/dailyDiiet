import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  min-height: 120px;
  max-height: 120px;
  width: 100%;

  background-color: ${({ theme }) =>    
    theme.COLORS.STYLES.PRIMARY_LIGHT};
  border-radius: 6px;
  
  /* justify-content: center;
  align-items: center; */
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 40px;
    color: ${theme.COLORS.BASE.DARK};
    font-family: ${theme.FONTS.FAMILY.BOLD};
  `};
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Text = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONTS.SIZE.SM}px;
    color: ${theme.COLORS.BASE.DARK};
    font-family: ${theme.FONTS.FAMILY.REGULAR};
  `};
  /* justify-content: center; */
  text-align: center;
`;

export const IconHeading = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 20,    
  color: theme.COLORS.BASE.GRAY_700,  
}))``;
