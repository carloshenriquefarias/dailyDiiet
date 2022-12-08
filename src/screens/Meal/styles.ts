import styled, { css } from "styled-components/native";
// import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
    flex: 1;  
    border-radius: 6px; 
`;

export const Content = styled.View`
    flex: 1;  
    border-radius: 6px; 
    margin-top: 40px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.LG}px;
        color: ${theme.COLORS.BASE.GRAY_700};
    `};
    margin-bottom: 10px;
    margin-left: 20px;
    font-weight: bold;
`
export const Description = styled.Text`
    ${({ theme }) => css`        
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_700};
    `};
    margin-bottom: 20px;
    margin-left: 20px;    
`
export const TitleDateAndHour = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_700};
    `};
    margin-bottom: 10px;
    margin-left: 20px;   
`

export const DateAndHour = styled.Text`
    ${({ theme }) => css`        
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_700};
    `};
    margin-bottom: 10px;
    margin-left: 20px;    
`
export const Result = styled.Text`
    ${({ theme }) => css`       
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.DARK};
        background-color: ${theme.COLORS.BASE.GRAY_300};
    `};
    margin-bottom: 10px;
    margin-left: 20px;
    width: 40%;   
    height: 36px;
    text-align: center;
    padding: 10px;
    border-radius: 16px;
    margin-bottom: 250px;
`
