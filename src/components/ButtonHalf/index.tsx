import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title} from "./styles";
import { Ball} from '@components/Ball'

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps; 
}

export function ButtonHalf({ title, type = 'PRIMARY', ...rest }: Props) {
  return (     
        
    <Container type={type} {...rest}>  

      <Ball/> 

      <Title>
        {title}
      </Title> 
               
    </Container>           
          
  )
}

