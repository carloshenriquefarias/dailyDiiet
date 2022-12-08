import { Container, ContentInput, HeaderButtonHalf, MiniContainer, Icon } from './styles';

import { InputDescription } from '@components/InputDescription';
import { InputHalf } from '@components/InputHalf';
import { Button } from '@components/Button';
import { Feedback } from '@components/Feedback';

import {PositiveIllustration} from './@assets/positive/Illustration.png'
import NegativeIllustration from '@assets/negative/Illustration.png'

export function Result(){    

    return(
        <Container>                     
            
            <Feedback/>

            {/* { isInDiet ?  */}
                {/* <Icon source={PositiveIllustration} /> :  */}
                <Icon source={NegativeIllustration} /> 
            {/* } */}

            <Button
                title="Ir para pagina inicial"
                type='PRIMARY'
                style={{ width: 240 }}
                // onPress={handleGoInitialScreen}                
            />   

        </Container>
    );
}