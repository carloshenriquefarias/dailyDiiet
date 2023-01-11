
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;    
    padding: 24px;
    background-color: ${({ theme }) =>      
    theme.COLORS.BASE.LIGHT};
`;

export const ListHeader = styled.Text`
  ${({ theme }) => css`
        font-size: ${theme.FONTS.SIZE.LG}px;
        font-family: ${ theme.FONTS.FAMILY.BOLD};
        color: ${ theme.COLORS.BASE.GRAY_700};
  `}
  margin-bottom:16px;
  margin-top: 32px;
`;

