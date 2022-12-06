import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.BASE.GRAY_600 : 
    theme.COLORS.BASE.GRAY_600};
  border-radius: 6px;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
`;

export const Title = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONTS.SIZE.MD}px;
    color: ${theme.COLORS.BASE.LIGHT};
    font-family: ${theme.FONTS.FAMILY.REGULAR};
  `};
  margin-left: 10px
`;

export const IconHeading = styled(Plus).attrs(({ theme }) => ({
    size: 18,    
    color: theme.COLORS.BASE.LIGHT,
    weight: 'bold',
    align: 'right',  
  }))``;