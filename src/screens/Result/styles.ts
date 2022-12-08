import styled, { css } from "styled-components/native";
// import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
    flex: 1;  
    border-radius: 6px; 
    align-items: center;
`;

export const ContentInput = styled.View`
   /* flex-direction: row;
   margin: 20px;   */
   
   flex-direction: row;
    justify-content: space-between; 
    margin-top: 40px;  
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
`
export const MiniContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 180px;
    margin-left: 15px;
    margin-right: 15px;
`
export const HeaderButtonHalf = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_700};
    `};
    margin-bottom: 10px;
    margin-left: 20px;
    font-weight: bold;
`

export const Icon = styled.Image`
    margin-bottom: 30px;
`
