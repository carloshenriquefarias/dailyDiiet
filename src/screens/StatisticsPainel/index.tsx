import { Container } from './styles';
import { HighlightHeader } from '@components/HighlightHeader';
import { Title } from '@components/Title';
import { InfoStatistics } from '@components/InfoStatistics';
import { Button } from '@components/Button';
// import { ButtonHalf } from '@components/ButtonHalf';

import { useNavigation, useFocusEffect } from '@react-navigation/native'; //Navegação
import {useState, useEffect, useCallback} from 'react'

type RootParamList = {
    home: undefined;
    newmeal: undefined;
    statisticspainel: undefined;
    result: {
      newmeal: string;
    }
}

export function StatisticsPainel(){   
    
    const navigation = useNavigation()

    function handleGoBackHome(){
        navigation.navigate('home') //Definir os tipos de navegação no @types
    }

    function handleGoFeedback(){
        navigation.navigate('result') //Definir os tipos de navegação no @types
    }

    return(

        <>
            <HighlightHeader
                title='90,86%'
                text='das refeições comidas'
            />

            <Container>                     
                
                <Title/>

                <InfoStatistics                    
                    title='12'
                    text='Melhor sequencia de pratos dentro da dieta'
                />               

                <Button
                    title="Ir para o Feedback"
                    type='PRIMARY'
                    onPress={handleGoFeedback}
                />

            </Container>
        </>
        
    );
}