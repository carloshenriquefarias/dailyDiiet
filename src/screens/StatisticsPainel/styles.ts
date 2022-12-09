import styled from "styled-components/native";
// import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
    flex: 1;  
    background-color: ${({ theme }) =>    
    theme.COLORS.BASE.LIGHT};
    border-radius: 6px;
    padding: 24px
    /* margin-bottom: 20px; */    
`;