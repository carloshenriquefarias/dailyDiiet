import styled, { css } from "styled-components/native";
import { ArrowLeft} from "phosphor-react-native";

export const Container = styled.View`
  flex: 1;
  min-height: 180px;
  max-height: 180px;
  width: 100%;

  background-color: ${({ theme }) =>    
    theme.COLORS.STYLES.PRIMARY_LIGHT};
  border-radius: 6px;
  
  justify-content: center;
  align-items: center;
  padding-top: 40px;
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

export const IconHeading = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 25,    
  color: theme.COLORS.BASE.GRAY_700,
   
}))`
  /* weight: 'bold',
  align-items: left,
  align: 'right',  */
`;
