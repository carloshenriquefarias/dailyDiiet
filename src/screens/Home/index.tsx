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
        navigation.navigate('meal') //Definir os tipos de navegação no @types
    }

    return(
        <Container>
            <Header/>
            <Statistics
                // icon='arrow-top-right'
                // sideOfIcon='RIGHT'
            />
            <Subtitle/>            
            <Button
                title="Nova Refeição"
                type='PRIMARY'
                onPress={handleNewMeal}
            />        

            <Button
                title="Ver refeição"
                type='PRIMARY'
                onPress={handleNewMeal}
            />         

            <FlatList
                data={meal}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <MealList
                        title={item}
                        // meal={item.meal}
                        // hour={item.hour}
                        // onPress={() => handleOpenGroup (item)}
                    />
                )}
                // contentContainerStyle={meal.length === 0 && {flex: 1}}
                // ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?'/>}
            />               
            
        </Container>
    );
}