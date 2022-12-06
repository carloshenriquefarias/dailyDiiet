import { Container } from './styles';
import { HighlightHeader } from '@components/HighlightHeader';
import { Title } from '@components/Title';
import { InfoStatistics } from '@components/InfoStatistics';

export function StatisticsPainel(){    

    return(
        <Container>                     
            <HighlightHeader/>
            <Title/>
            <InfoStatistics/>
        </Container>
    );
}