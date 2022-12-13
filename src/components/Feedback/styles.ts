import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'
// import { IsInDietTypeProps } from "src/@types/meal";

// export type FeedbackTypeStyleProps = {
//     isInDiet: IsInDietTypeProps;
// }

// type Props = FeedbackTypeStyleProps;

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

// export const Header = styled.Text<Props>`
//     ${({ theme, isInDiet }) => css`
//         font-family: ${theme.FONTS.FAMILY.BOLD};
//         font-size: ${theme.FONTS.SIZE.LG}px;
//         color: ${isInDiet ? theme.COLORS.STYLES.PRIMARY_DARK : theme.COLORS.STYLES.SECONDARY_DARK};
//     `};
//     text-align: center;
//     width: 100%;
//     margin-bottom: 20px;
//     margin-top: 30px;
// `

export const Header = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG}px;
        color: ${theme.COLORS.STYLES.PRIMARY_DARK };
    `};
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
    margin-top: 30px;
`

export const SubTitle = styled.Text`
    width: 100%;
    text-align: center;
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG}px;
        color: ${theme.COLORS.BASE.DARK};
    `};
    /* ${({ theme }) => css`
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.DARK};
        font-family: ${theme.FONTS.FAMILY.REGULAR};
  `};     */
`

export const TextBold = styled.Text`    
    ${({ theme }) => css`
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.DARK};
        font-family: ${theme.FONTS.FAMILY.REGULAR};
  `};    
    font-weight: bold;
`







