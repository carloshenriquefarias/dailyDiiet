import styled, { css } from "styled-components/native";

export type ButtonHalfStyleProps = {
  type: 'PRIMARY' | 'SECONDARY';
  // isActive: false;
}

type Props = ButtonHalfStyleProps;

export const Container = styled.View`
  flex: 1;
  min-height: 100px;
  max-height: 100px;
  width: 95%;
  margin: 10px; 

  background-color: ${({ theme }) =>    
    theme.COLORS.BASE.GRAY_200};
  border-radius: 6px;
  
  justify-content: center;
  align-items: center;
`;

export const Informations = styled.View<Props>`
  flex: 1;
  min-height: 100px;
  max-height: 100px;
  width: 45%;
  margin: 5px;  

  background-color: ${({ theme, type }) => type === 'PRIMARY' ?
    theme.COLORS.STYLES.PRIMARY_LIGHT : theme.COLORS.STYLES.SECONDARY_LIGHT
  };  
  border-radius: 6px;  
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 30px;
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
    /* background-color: ${theme.COLORS.BASE.GRAY_300}; */
  `};
`;

