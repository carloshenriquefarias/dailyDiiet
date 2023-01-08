import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ForkKnife } from "phosphor-react-native";

export const ContainerGlobal = styled.View`
    width: 100%;
    margin-bottom: 10px;
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
    /* background-color    : green ;    */
`

export const Container = styled.View`
    width: 23%;
    margin-bottom: 10px;
    margin-top: 15px;
    flex-direction: row;
    justify-content: space-between;
    /* background-color    : red ; */
`
export const Person = styled.View`
    width: 45px;
    height: 45px;
    border: 1px solid  ${({ theme }) => theme.COLORS.BASE.GRAY_700};
    border-radius: 50px;    
`
export const Title = styled.Text`   
    font-weight: bold;
`
export const Content = styled.View`
    flex-direction: row;
    /* background-color    : blue ; */
`
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const ProfileContainer = styled.Pressable`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.COLORS.BASE.GRAY_500};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const ContentTitle = styled.View``;

export const Icon = styled(ForkKnife).attrs(({ theme }) => ({
    size: 37,    
    color: theme.COLORS.BASE.GRAY_700,
    weight: 'bold'
}))``;

















