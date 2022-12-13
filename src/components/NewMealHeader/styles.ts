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
  
  /* justify-content: center; //PERGUNTAR AO PRISCO
  align-items: center; */
  padding-top: 50px;
  padding-left: 15px;  
  font-weight: bold;
`;

export const SubContainer = styled.TouchableOpacity`  
  /* padding-top: 20px; */
  padding-left: 12px;  
  background-color: ${({ theme }) =>    
    theme.COLORS.BASE.GRAY_300}; 
  font-weight: bold; 
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    color: ${theme.COLORS.BASE.DARK};
    font-family: ${theme.FONTS.FAMILY.BOLD};
  `};
  text-align: center;
  margin-left: 90px; //verificar depois  
  font-weight: bold;
`;

export const IconHeading = styled(ArrowLeft).attrs(({ theme }) => ({
    size: 28,    
    color: theme.COLORS.BASE.DARK
    // weight: 'bold',
    // align: 'right',  
}))``;