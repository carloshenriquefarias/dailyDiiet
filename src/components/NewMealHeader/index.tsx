import { Container, Title, IconHeading, SubContainer } from "./styles";
import { useNavigation } from '@react-navigation/native'; //Navegação

type HeaderProps = {
  title: string,  
};

export function NewMealHeader ({title}: HeaderProps){

  const navigation = useNavigation()

  function handleGoBack() {
    // navigation.goBack(); //Volta pra tela anterior
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

    </Container>
  )
}