import { Container } from './styles';
import { NewMealHeader } from '@components/NewMealHeader';
import { Title } from '@components/Title';
import { InfoStatistics } from '@components/InfoStatistics';
import { Input } from '@components/Input';

export function NewMeal(){    

    return(
        <Container>                     
            <NewMealHeader/>            
            <Input/>
        </Container>
    );
}