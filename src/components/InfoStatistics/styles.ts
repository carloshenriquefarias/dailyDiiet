import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  min-height: 100px;
  max-height: 100px;
  width: 100%;
  margin: 5px; 

  background-color: ${({ theme }) =>    
    theme.COLORS.BASE.GRAY_200};
  border-radius: 6px;
  
  justify-content: center;
  align-items: center;
`;

export const Informations = styled.View`
  flex: 1;
  min-height: 100px;
  max-height: 100px;
  width: 45%;
  margin: 5px;
  

  background-color: ${({ theme }) =>    
    theme.COLORS.STYLES.PRIMARY_LIGHT};
  border-radius: 6px;
  
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
    flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 40px;
    color: ${theme.COLORS.BASE.DARK};
    font-family: ${theme.FONTS.FAMILY.BOLD};
  `};
`;

export const Text = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONTS.SIZE.SM}px;
    color: ${theme.COLORS.BASE.DARK};
    font-family: ${theme.FONTS.FAMILY.REGULAR};
  `};
`;

