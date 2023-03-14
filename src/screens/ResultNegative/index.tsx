import { RootStackScreenProps } from 'src/@types/navigation';
import { Container, Heading, Message, Strong, StyledImage, SubHeading, ContentButton } from './styles';
import { Button } from '@components/Button';

import NegativeIllustration from '@assets/negative/Illustration.png'
import { useNavigation } from '@react-navigation/native';

export function ResultNegative() {
    const navigation = useNavigation();

    function handleGoToHome() {
        navigation.navigate('home');
    }

  return (
    <Container>

        <Heading>
            Que pena!
        </Heading>
        
        <SubHeading>
            <Message>
                Você
                    <Strong> saiu da dieta </Strong> 
                dessa vez, mas continue se esforçando e não desista!
            </Message>
        </SubHeading>

        <StyledImage source={NegativeIllustration}/>

        <ContentButton>
            <Button title='Ir para a página inicial' onPress={handleGoToHome} />
        </ContentButton>

    </Container>
  );
}