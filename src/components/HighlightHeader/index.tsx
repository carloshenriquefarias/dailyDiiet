import { Container, Title, Text, IconHeading, SubContainer } from "./styles";
import { useNavigation } from '@react-navigation/native'; //Navegação

type Props = {     
  title: string;
  text: string;
}

export function HighlightHeader ({ title, text, ...rest }: Props){

  const navigation = useNavigation()

  function handleGoBack() { 
    navigation.navigate('home'); //Volta pra tela que voce escolher
  }

  return (
    <Container>  

      <SubContainer onPress={handleGoBack}>
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