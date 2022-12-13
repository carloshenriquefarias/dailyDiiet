import styled, { css } from "styled-components/native";
import { ArrowLeft} from "phosphor-react-native";

// export type HightlightStyleProps = {
//   title: string;  
//   text: string;
// }

// type Props = HightlightStyleProps;

export const Container = styled.View`
  flex: 1;
  min-height: 180px;
  max-height: 180px;
  width: 100%;
  /* margin-top: 15px; */

  background-color: ${({ theme }) =>    
  theme.COLORS.STYLES.PRIMARY_LIGHT};

  padding-top: 50px;
`;

export const SubContainer = styled.TouchableOpacity`  
  /* padding-top: 20px; */
  padding-left: 24px;  
  font-weight: bold; 
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 40px;
    color: ${theme.COLORS.BASE.DARK};
    font-family: ${theme.FONTS.FAMILY.BOLD};
  `};  
  text-align: center;
`;

export const Text = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONTS.SIZE.SM}px;
    color: ${theme.COLORS.BASE.DARK};
    font-family: ${theme.FONTS.FAMILY.REGULAR};
  `};
  text-align: center;
`;

export const IconHeading = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 32,    
  color: theme.COLORS.BASE.GRAY_700,   
}))`
  /* weight: 'bold',
  align-items: left,
  align: 'right',  */
`;
