import { RootStackScreenProps } from 'src/@types/navigation';
import { Container, Heading, Message, Strong, StyledImage, SubHeading, ContentButton } from './styles';
import { Button } from '@components/Button';

import PositiveIllustration from '@assets/positive/Illustration.png'
import NegativeIllustration from '@assets/negative/Illustration.png'
import { useNavigation } from '@react-navigation/native';

export function ResultPositive() {
    const navigation = useNavigation();

    function handleGoToHome() {
        navigation.navigate('home');
    }

  return (
    <Container>

        <Heading>
            Continue assim!
        </Heading>
        
        <SubHeading>
            <Message>
                Você continua
                    <Strong> dentro da dieta. </Strong> 
                Muito bem!
            </Message>            
        </SubHeading>

        
        {/* <SubHeading>
            <Message>
                Você
                    <Strong> saiu da dieta </Strong> 
                dessa vez, mas continue se esforçando e não desista!
            </Message>
        </SubHeading> */}

        {/* <StyledImage source={NegativeIllustration}/> */}

        <StyledImage 
            source={ 
            PositiveIllustration 
            // NegativeIllustration
        } 
        />

        <ContentButton>
            <Button title='Ir para a página inicial' onPress={handleGoToHome} />
        </ContentButton>
        

    </Container>
  );
}