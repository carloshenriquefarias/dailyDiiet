import { useNavigation, useFocusEffect } from '@react-navigation/native'; //Navegação
import {useState, useEffect, useCallback} from 'react'

import { InfoStatistics } from '@components/InfoStatistics';
import { formatPercentage } from '@utils/formatPercentage';
import { RootStackScreenProps } from 'src/@types/navigation';
import { BoxesContainer, Container, Content, Header, IconContainer,
  StyledIcon, StyledNumber, StyledText, Title } from './styles';

export function StatisticsPainel(){   
    
    const navigation = useNavigation()     

    const [diet, setDiet] = useState()

    const totalMeals = 100
    const totalMealsInDiet = 62
    const totalMealsOutDiet = totalMealsInDiet - totalMeals;

    const formattedPercentageInDiet = formatPercentage(
        totalMealsInDiet,
        totalMeals
    ); 

    function handleGoBackHome(){
        navigation.navigate('home') //Definir os tipos de navegação no @types
    } 

    return (
        <Container variant={diet}>
            
            <Header variant={diet}>
                <IconContainer onPress={handleGoBackHome}>
                    <StyledIcon variant={diet} />
                </IconContainer>

                <StyledNumber>
                    {totalMeals > 0 ? formattedPercentageInDiet : '0,00%'}
                </StyledNumber>

                <StyledText>
                    das refeições dentro da dieta
                </StyledText>
            </Header>

            <Content>
                <Title>Estatísticas gerais</Title>
                
                <InfoStatistics                    
                    title='Melhor sequencia de pratos dentro da dieta'
                    value={15}                    
                />   

                <InfoStatistics                    
                    title='Melhor sequencia de pratos dentro da dieta'
                    value={19}  
                />              
                
                <BoxesContainer>
                    <InfoStatistics
                        variant='inDiet'
                        value={totalMealsInDiet}
                        title='refeições dentro da dieta'
                    />
                    <InfoStatistics
                        variant='outDiet'
                        value={totalMealsOutDiet}
                        title='refeições fora da dieta'
                    />
                </BoxesContainer>

            </Content>
        </Container>
    );
    
}