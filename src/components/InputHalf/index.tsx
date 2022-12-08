import {Container, Header, Title} from './styles';
import { TextInputProps, TextInput} from "react-native";
import {useTheme} from "styled-components/native";

type Props = TextInputProps &  {
    title: string;
}

export function InputHalf({ title, ...rest }: Props){

    const {COLORS} = useTheme()
   
    return(
        // <Content>
            <Container>
                <Header>                    
                    {title}
                </Header>

                <Title {...rest} />
            </Container>             
            
        // </Content>
        
    );
}