import { Container, Title, IconHeading, Text, StatisticsButtonTypeStyleProps, SubContainer} from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string; 
  text: string; 
  type?: StatisticsButtonTypeStyleProps;
}

export function Statistics ({ title, text, type = 'PRIMARY', ...rest }: Props){

  return (
    <Container type="PRIMARY">
      
      <SubContainer>
        <IconHeading/>
      </SubContainer>            
      
      <Title>
        {title}        
      </Title>

      <Text>
        {text}        
      </Text>

    </Container>
  )
}