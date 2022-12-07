import styled, {css}from "styled-components/native";
// import {UsersThree } from 'phosphor-react-native';
import { TextInput } from "react-native";

// export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

// type Props = {
//     type: ButtonTypeStyleProps
// }

export const Container = styled(TextInput)`
    flex: 1;   
    min-height: 56px;
    max-height: 56px;

    ${({theme}) => css`
        color: ${theme.COLORS.BASE.GRAY_600};
        background-color: ${
            theme.COLORS.BASE.GRAY_300}
        ;         
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.MD}px;
    `}    
    
    border-radius: 6px;  
    padding: 16px;  
    /* margin-top: 20px;    */
    margin: 15px;
    
`;
