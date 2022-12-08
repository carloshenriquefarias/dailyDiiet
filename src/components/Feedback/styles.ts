import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

type HeaderStyleProps = {
    title: string;
}

export const Container = styled(SafeAreaView)`
    margin-top: 100px;
    margin: 20px;
    flex-direction: column;
    justify-content: center;
    height: 100px;    
`
export const Header = styled.Text`
    width: 100%;
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONTS.SIZE.LG}px;
        color: ${theme.COLORS.BASE.DARK};
        font-family: ${theme.FONTS.FAMILY.REGULAR};
    `};
    margin-bottom: 20px;
    margin-top: 30px;
`;

export const Text = styled.Text`
    width: 100%;
    text-align: center;
    ${({ theme }) => css`
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.DARK};
        font-family: ${theme.FONTS.FAMILY.REGULAR};
  `};    
`
export const TextBold = styled.Text`    
    ${({ theme }) => css`
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.DARK};
        font-family: ${theme.FONTS.FAMILY.REGULAR};
  `};    
    font-weight: bold;
`





