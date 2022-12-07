import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  min-height: 100px;
  max-height: 100px;
  width: 100%;
  flex-direction: row;

  background-color: ${({ theme }) =>    
    theme.COLORS.BASE.GRAY_300};
  border-radius: 6px;
  
  /* justify-content: center;
  align-items: center; */
  padding-top: 50px;
  padding-left: 15px;  
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    color: ${theme.COLORS.BASE.DARK};
    font-family: ${theme.FONTS.FAMILY.BOLD};
  `};
  text-align: center;
  margin-left: 90px; //verificar depois  
`;

export const IconHeading = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 25,    
    color: theme.COLORS.BASE.DARK
    // weight: 'bold',
    // align: 'right',  
}))``;