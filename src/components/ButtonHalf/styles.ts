import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'THIRD';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
    width: 160px;
    height: 48px;
  background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.BASE.GRAY_200 : 
    theme.COLORS.STYLES.PRIMARY_LIGHT};
  border-radius: 6px; 
  justify-content: center;
  align-items: center; 
  margin: 5px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONTS.SIZE.MD}px;
    color: ${theme.COLORS.BASE.DARK};
    font-family: ${theme.FONTS.FAMILY.BOLD};
  `};
  margin-left: 10px;
  font-weight: bold;
`;