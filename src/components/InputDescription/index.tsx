import {Container, Header, Title } from './styles';
import { TextInputProps, TextInput} from "react-native";
import {useTheme} from "styled-components/native";

type Props = TextInputProps &  {
    title: string;
}

export function InputDescription({ title, ...rest }: Props){

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