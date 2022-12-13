import { Container, Icon } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native'; //Navegação
// import { IsInDietTypeProps } from 'src/@types/meal';

import { Button } from '@components/Button';
import { Feedback } from '@components/Feedback';

import {PositiveIllustration} from './@assets/positive/Illustration.png'
import NegativeIllustration from '@assets/negative/Illustration.png'

// type RouteParams = {
//     isInDiet: IsInDietTypeProps;
// }

export function Result(){      

    const navigation = useNavigation();
    // const route = useRoute();
    // const { isInDiet } = route.params as RouteParams;

    function handleGoBack() {      
      navigation.navigate('home'); 
    }

    function handleGoMeal() {      
        navigation.navigate('meal'); 
    }

    return(
        <Container>       
            
            {/* <Feedback
                title= { isInDiet ? 'Continue assim!' : 'Que pena!' }
                isInDiet={isInDiet}
            /> */}

            {/* <Feedback/> */}

            {/* { isInDiet ?  */}
                {/* <Icon source={PositiveIllustration} /> :  */}
                <Icon source={NegativeIllustration} /> 
            {/* } */}

            <Button
                title="Ir para pagina inicial"
                type='PRIMARY'
                style={{ width: 240 }}
                onPress={handleGoBack}                
            /> 

            <Button
                title="Ir para pagina de editar"
                type='PRIMARY'
                style={{ width: 240 }}
                onPress={handleGoMeal}                
            />   

        </Container>
    );
}