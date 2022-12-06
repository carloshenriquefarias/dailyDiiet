import styled, { css } from "styled-components/native";
import { ForkKnife } from "phosphor-react-native";

export const Containers = styled.View`
    width: 23%;
    margin-bottom: 10px;
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: '#BF3B44' ; */
`
export const Person = styled.View`
    width: 40px;
    height: 40px;
    border: 1px solid  ${({ theme }) => theme.COLORS.BASE.GRAY_700};
    /* border-radius: 50%; */
`

export const Container = styled.View`
    width: 100%;
    margin-bottom: 10px;
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: '#BF3B44' ;
`

export const Title = styled.Text`
    color: '#BF3B44';
`

// export const Person = styled.View`
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
// `

export const Content = styled.View`
    flex-direction: row;
`
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentTitle = styled.View``;

export const Icon = styled(ForkKnife).attrs(({ theme }) => ({
    size: 37,    
    color: theme.COLORS.BASE.GRAY_700,
    weight: 'bold'
}))``;















