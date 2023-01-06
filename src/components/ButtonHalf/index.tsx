import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title} from "./styles";
// import { Ball} from '@components/Ball'

type Props = TouchableOpacityProps & ButtonTypeStyleProps & {
  title: string;
}

export function ButtonHalf({ title, isActive = false, ...rest }: Props) {
  return (       
    <Container 
      isActive={isActive} 
      {...rest} 
    > 
      {/* <Ball/>  */}
      <Title>
        {title}
      </Title> 
               
    </Container>           
          
  )
}

