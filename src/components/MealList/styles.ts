import styled, {css} from "styled-components/native";
import { DietVariant } from '@screens/Home';
// import {UsersThree } from 'phosphor-react-native';
import { TouchableOpacity } from "react-native";

type Props = {
    variant: DietVariant;
};

export const Container = styled(TouchableOpacity)` 
    margin-top: 10px;
`;

export const SubContainer = styled(TouchableOpacity)`
    width: 100%;
    height: 50px;
    /* background-color: ${({theme}) => theme.COLORS.STYLES.PRIMARY_DARK};    */
    flex-direction: column;    
    align-items: center;    
    margin-bottom: 10px;
`;

export const Content = styled(TouchableOpacity)`
    width: 100%;
    height: 50px;
    background-color: ${({theme}) => theme.COLORS.BASE.LIGHT};
    border-radius: 6px;
    flex-direction: row;    
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    /* margin-bottom: 5px;     */
    border: 1px solid ${({ theme }) => theme.COLORS.BASE.GRAY_300};
`;

export const SubContent = styled(TouchableOpacity)`
    flex-direction: row;        
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONTS.SIZE.LG}px;
        font-family: ${ theme.FONTS.FAMILY.REGULAR};
        color: ${ theme.COLORS.BASE.GRAY_700};
    `}  
    margin-right: 130px;
`;

export const Date = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONTS.SIZE.LG}px;
        font-family: ${ theme.FONTS.FAMILY.BOLD};
        color: ${ theme.COLORS.BASE.GRAY_700};
    `} 
    margin-bottom: 5px; 
    text-align: left;
    font-weight: bold;
`;

export const Hour = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONTS.SIZE.MD}px;
        font-family: ${ theme.FONTS.FAMILY.BOLD};
        color: ${ theme.COLORS.BASE.GRAY_700};
    `}  
    margin-right: 5px;
    /* margin-left: 5px; */
`;

export const Divider = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONTS.SIZE.SM}px;
        font-family: ${ theme.FONTS.FAMILY.BOLD};
        color: ${ theme.COLORS.BASE.GRAY_500};
    `}  
    margin-right: 10px;
`;

export const Icon = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, variant }) =>
    variant === 'inDiet' ? theme.COLORS.STYLES.PRIMARY_DARK : theme.COLORS.STYLES.SECONDARY_DARK};
`;

// export const Icon = styled(UsersThree).attrs(({theme}) => ({
//     size: 25,
//     color: theme.COLORS.STYLES.PRIMARY_LIGHT}
    
// ))`
//     margin-right: 20px;
//     align-items: flex-end;
//     // weight: 'fill'
// `;