import { Container } from './styles';

import { Header } from '@components/Header';
import { Statistics } from '@components/Statistics';
import { Subtitle } from '@components/Subtitle';
import { Button } from '@components/Button';
import { MealList } from '@components/MealList';

import { FlatList, Alert} from 'react-native';

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

export function Home(){

    const [meal, setMeal] = useState<string[]>(['X-tudo', 'X-Bacon', 'Pão', 'Queijo'])

    const navigation = useNavigation()

    function handleNewMeal(){
        navigation.navigate('newmeal') //Definir os tipos de navegação no @types
        // navigation.navigate('meal') //Definir os tipos de navegação no @types       
    }

    function handleStatisticsMenu(){       
        navigation.navigate('statisticspainel') //Definir os tipos de navegação no @types
    }

    return(
        <Container>

            <Header/>

            <Statistics
                title='90,85%'
                type='PRIMARY'
                text='das refeições dentro da dieta'               
                onPress={handleStatisticsMenu}
            />

            <Subtitle/> 

            <Button
                title="Nova Refeição"
                type='PRIMARY'
                onPress={handleNewMeal}
            />        

            {/* <Button
                title="Ver refeição"
                type='PRIMARY'
                onPress={handleStatisticsMenu}
            />          */}

            <FlatList
                data={meal}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <MealList
                        title={item}                        
                        onPress={handleStatisticsMenu}                        
                    />
                )}
                // contentContainerStyle={meal.length === 0 && {flex: 1}}
                // ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?'/>}
            />               
            
        </Container>
    );
}