import {Container, Header, Title } from './styles';
import { TextInputProps, TextInput} from "react-native";
import {useTheme} from "styled-components/native";

type Props = TextInputProps &  {
    title: string;
    // errorMessage?: string | null;
}

export function Input({ title, ...rest }: Props){

    const {COLORS} = useTheme()
   
    return(
        <>
            <Container>
                <Header>                    
                    {title}
                </Header>

                <Title {...rest} />
            </Container> 
            
            
        </>
        
    );
}