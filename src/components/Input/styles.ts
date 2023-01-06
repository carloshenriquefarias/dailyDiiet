import styled, {css}from "styled-components/native";
// import {UsersThree } from 'phosphor-react-native';
// import { TextInput } from "react-native";

export const Container = styled.View`
    margin: 20px;
`
export const Header = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.BOLD};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_700};
    `};
    margin-bottom: 5px;
    font-weight: bold;
`
export const Title = styled.TextInput`
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.MD}px;
        color: ${theme.COLORS.BASE.GRAY_700};
        border: 1px solid ${theme.COLORS.BASE.GRAY_500};
    `};
`;

export const Error = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONTS.FAMILY.REGULAR};
        font-size: ${theme.FONTS.SIZE.SM}px;
        color: ${theme.COLORS.STYLES.SECONDARY_DARK};
        /* border: 1px solid ${theme.COLORS.BASE.GRAY_500}; */
    `};   
`;
