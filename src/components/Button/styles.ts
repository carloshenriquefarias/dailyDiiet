import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
// import { Plus } from "phosphor-react-native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
  hasIcon?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  width: 100%;

  ${({ theme, type }) => css`
    background-color: ${type === 'PRIMARY'
      ? theme.COLORS.BASE.GRAY_600
      : 'transparent'};
    border: 1px solid
      ${type === 'PRIMARY' ? 'transparent' : theme.COLORS.BASE.GRAY_200};
  `}

  /* background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.BASE.GRAY_600 : 
  theme.COLORS.BASE.GRAY_200}; */

  border-radius: 8px;  
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  margin-bottom: 20px;
`;

export const Title = styled.Text<Props>`
${({ theme, type, hasIcon }) => css`
  color: ${type === 'PRIMARY'
    ? theme.COLORS.BASE.LIGHT
    : theme.COLORS.BASE.GRAY_600};
  font-family: ${theme.FONTS.FAMILY.BOLD};
  font-size: ${theme.FONTS.SIZE.MD};
  margin-left: ${hasIcon ? '12px' : 0};
  /* text-align: center; */
`}`;

// export const Title = styled.Text`
//   ${({ theme }) => css`
//     font-size: ${theme.FONTS.SIZE.MD}px;
//     color: ${theme.COLORS.BASE.LIGHT};
//     font-family: ${theme.FONTS.FAMILY.REGULAR};
//   `};
//   margin-left: 10px
// `;

// export const IconHeading = styled(Plus).attrs(({ theme }) => ({
//     size: 18,    
//     color: theme.COLORS.BASE.LIGHT,
//     weight: 'bold',
//     align: 'right',  
// }))``;