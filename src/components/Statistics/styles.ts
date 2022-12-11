import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type StatisticsButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: StatisticsButtonTypeStyleProps;  
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 120px;
  max-height: 120px;
  width: 100%;

  background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.STYLES.PRIMARY_LIGHT : 
  theme.COLORS.STYLES.SECONDARY_LIGHT};  
  border-radius: 6px;   
`;

export const subContainer = styled.View`  
  justify-content: center;
  align-items: flex-end;
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

// export const Logo = styled.Image`
//   width: 46px;
//   height: 55px;
// `;

// export const BackButton = styled.TouchableOpacity`
//   flex: 1; //Serve como space-between
// `;

// export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
//   size: 32,
//   color: theme.COLORS.WHITE}
// ))``;