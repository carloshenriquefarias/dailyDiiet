import { TouchableOpacity } from "react-native";
import { IsInDietTypeProps } from "src/@types/meal";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = {
  type: 'PRIMARY' | 'SECONDARY'
  isActive: IsInDietTypeProps;
}

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<ButtonTypeStyleProps>`
  flex: 1;
  width: 160px;
  height: 48px;  

  ${({ theme, type, isActive }) => isActive ? css`
        background-color: ${type === 'PRIMARY' ? theme.COLORS.STYLES.PRIMARY_LIGHT : theme.COLORS.STYLES.SECONDARY_LIGHT};
        border: 1px solid ${type === 'PRIMARY' ? theme.COLORS.STYLES.PRIMARY_DARK : theme.COLORS.STYLES.SECONDARY_DARK};
    ` : css`
        background-color: ${theme.COLORS.BASE.GRAY_300};
    `
  };
  
  /* ${({ theme, isActive }) => isActive && css`        
    border: 1px solid ${theme.COLORS.STYLES.PRIMARY_DARK};
  `}; 

  ${({ theme, isActive }) => isActive && css` ?       
  background-color: ${theme.COLORS.STYLES.PRIMARY_DARK} : ${theme.COLORS.STYLES.SECONDARY_DARK};
  `};  */
  
  border-radius: 6px; 
  justify-content: center;
  align-items: center; 
  flex-direction: row;
  margin-top: 15px;
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

export const Icon = styled.View<ButtonTypeStyleProps>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ?
    theme.COLORS.STYLES.PRIMARY_DARK : theme.COLORS.STYLES.SECONDARY_DARK
  };
`;


