import { Container } from './styles';

import { Header } from '@components/Header';
import { Statistics } from '@components/Statistics';
import { Subtitle } from '@components/Subtitle';
import { Button } from '@components/Button';
import { MealList } from '@components/MealList';
import { ListEmpty } from '@components/ListEmpty';

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
    
    const [meal, setMeal] = useState<string[]>([])
    const navigation = useNavigation()   

    const opcoes_1_dados = [
        {   
            "id": 1,
            "data" : "13/12/2022",
            "refeicoes": [
                {                                           
                    "hora" : "08:00",
                    "description": "Café da manhã"
                },
                {                                                        
                    "hora" : "12:00",
                    "description": "Almoço"
                }, 
                {                                                        
                    "hora" : "14:00",
                    "description": "Merenda"
                }, 
                {                                                        
                    "hora" : "18:00",
                    "description": "Lanche"
                }, 
                {                                                        
                    "hora" : "20:00",
                    "description": "Janta"
                }
            ]           
        },
        {   
            "id": 2,
            "data" : "14/12/2022",
            "refeicoes": [
                {                                            
                    "hora" : "08:00",
                    "description": "Café da manhã"
                },
                {                                                        
                    "hora" : "12:00",
                    "description": "Almoço"
                }, 
                {                                                        
                    "hora" : "14:00",
                    "description": "Merenda"
                }, 
                {                                                        
                    "hora" : "18:00",
                    "description": "Lanche"
                }, 
                {                                                        
                    "hora" : "20:00",
                    "description": "Janta"
                }
            ]           
        }
    ]

    // const opcoes_2_dados = [
    //     {
    //         "id": 1,
    //         "data" : "13/12/2022",
    //         "hora" : "12:00",
    //         "description": "Almoço"
    //     },
    //     {
    //         "id": 2,
    //         "data" : "13/12/2022",
    //         "hora" : "12:00",
    //         "description": "Almoço"
    //     },
    //     {
    //         "id": 3,
    //         "data" : "14/12/2022",
    //         "hora" : "08:00",
    //         "description": "Café da manhã"
    //     }
    // ]
 

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
                data={opcoes_1_dados}
                keyExtractor={(item, key) => item.id }
                renderItem={({item}) => (
                    <MealList
                        mealsGroup={item}                      
                        onPress={handleStatisticsMenu} 
                        // onPress={() => setTeam(item)}                       
                    />
                )}
                // horizontal
                // contentContainerStyle={meal.length === 0 && {flex: 1}}
                ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?'/>}
            />               
            
        </Container>
    );
}