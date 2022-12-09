import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled.View`
    flex: 1;    
    padding: 24px;
    background-color: ${({ theme }) =>      
    theme.COLORS.BASE.LIGHT};
`;