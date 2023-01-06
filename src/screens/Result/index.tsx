import { RootStackScreenProps } from 'src/@types/navigation';
import { Container, Heading, Message, Strong, StyledImage, SubHeading } from './styles';
import { Button } from '@components/Button';

import PositiveIllustration from '@assets/positive/Illustration.png'
import NegativeIllustration from '@assets/negative/Illustration.png'

export function Result({ navigation, route }: RootStackScreenProps<'result'>) {
  const { variant } = route.params;

  function handleGoToHome() {
    navigation.navigate('home');
  }

  return (
    <Container>

        <Heading variant={variant}>
            {variant === 'inDiet' ? 'Continue assim!' : 'Que pena!'}
        </Heading>
      
        {variant === 'inDiet' ? (
            <SubHeading>
                <Message>
                    Você continua
                        <Strong> dentro da dieta.</Strong> 
                    Muito bem!
                </Message>            
            </SubHeading>

        ) : (
            <SubHeading>
                <Message>
                    Você
                        <Strong> saiu da dieta </Strong> 
                    dessa vez, mas continue se esforçando e não desista!
                </Message>
            </SubHeading>
        )}

        <StyledImage source={NegativeIllustration}/>

        {/* <StyledImage 
            source={variant === 'inDiet' ? 
            PositiveIllustration : 
            NegativeIllustration} 
        /> */}

        <Button title='Ir para a página inicial' onPress={handleGoToHome} />

    </Container>
  );
}