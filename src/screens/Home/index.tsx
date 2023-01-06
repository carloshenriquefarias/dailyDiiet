import { Container } from './styles';
import React from "react";
import { Camera, Plus } from 'phosphor-react-native';

import { useTheme } from 'styled-components/native';

import { Header } from '@components/Header';
import { Statistics } from '@components/Statistics';
import { Subtitle } from '@components/Subtitle';
import { Button } from '@components/Button';
import { MealList } from '@components/MealList';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';

import { FlatList, Alert, SectionList, Text } from 'react-native';

import { formatPercentage } from '@utils/formatPercentage';

import { useNavigation, useFocusEffect } from '@react-navigation/native'; //Navegação
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect, useCallback} from 'react'

import { mealsGetAll } from '@storage/meals/mealsGetAll';
import { AppError } from '@utils/AppError';
import { MEAL_COLLECTION } from '@storage/storageConfig';

type RootParamList = {
    home: undefined;
    newmeal: undefined;
    statisticspainel: undefined;
    result: {
      newmeal: string;
    }
}

//Colocar estes dados no DTO

export type DietVariant = 'inDiet' | 'outDiet';

export type MealData = {
  id: string;
  title: string;
  date: number;
  description: string;
  diet: boolean;
};

export type DataProps = {
  title: string;
  data: MealData[];
}

export function Home(){

    const [meal, setMeal] = useState([
        // {
        //     title: '26.08.22',
        //     data: [
        //         {
        //             hour: '07:00',
        //             description: 'Cafe com bolo'
        //         },
        //         {
        //             hour: '12:00',
        //             description: 'Almoco'
        //         }
        //     ]
        // },
        // {
        //     title: '27.08.22',
        //     data: [
        //         {
        //             hour: '07:30',
        //             description: 'Cafe com bolo'
        //         }
        //     ]
        // },
       
    ]);
    
    // const [meal, setMeal] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation()  
    const { COLORS } = useTheme(); 

    const [diet, setDiet] = useState<DietVariant>('inDiet');

    const totalMealsInDiet = 48
    const totalMeals = 100
    const percentageInDiet = totalMealsInDiet / totalMeals;
    const numberFormattedPercentageInDiet = formatPercentage(
        totalMealsInDiet,
        totalMeals
    );


    // async function tratarDados(storage: any) {
    //     console.log()
    //     var newItem = []
    //     var resultado = storage.map((item , key) => {
           
    //         if (key == 0) {
    //             newItem.push({
    //                 id: key+1,
    //                 data: item.date,
    //                 refeicoes: [
    //                     {
    //                         hora: item.hour,
    //                         description: item.description
    //                     }
    //                 ]
    //             })
    //         } else { 

    //             if (item.date != storage[key-1].date ) {
    //                 newItem.push({
    //                     id: key+1,
    //                     data: item.date,
    //                     refeicoes: [
    //                         {
    //                             hora: item.hour,
    //                             description: item.description
    //                         }
    //                     ]
    //                 })
    //             }
    //             else {
                    
    //                 newItem[key-1].refeicoes.push({
    //                     hora: item.hour,
    //                     description: item.description
    //                 }) 
    
    //             } 
    //         } 
            
    //         return newItem;

    //     })
       
    //     return resultado
    // }

    
    async function fetchMeal(){ //Busca os grupos ja cadastrados (CARREGAMENTO DOS GRUPOS)
    
        try {
            // AsyncStorage.clear() //limpa os dados
            setIsLoading(true)

            const data = await mealsGetAll()

           
            setMeal(data)     

            // var newItem = []

            // const storage = await mealsGetAll()
           
            // if (storage) {
               
            //    const dadosTratados = await tratarDados(storage)
            //    //console.log('dadosTratados',dadosTratados)
            //    setMeal(dadosTratados[0])  
            // }           
                
    
        } catch (error) {
            if (error instanceof AppError){
                Alert.alert('Nova Refeição', error.message)
            } else {
                Alert.alert('Nova Refeição', 'Não foi possível criar uma nova refeição')      
            }
        
        } finally{
          
            setIsLoading(false)
        }
    }

    function handleNewMeal(){
        navigation.navigate('newmeal') //Definir os tipos de navegação no @types              
    }

    // function handleStatisticsMenu(){       
    //     navigation.navigate('statisticspainel')
    // }

    function handleOpenMeal(meal: string){
        navigation.navigate('meal')
    }

    function handleGoToStatisticsScreen() {
        navigation.navigate('statisticspainel');
    }

    function handleOpenMealsDetails() { 
        //Pegando a refeição pelo ID
        navigation.navigate('meal');
    }  

    useFocusEffect(useCallback(() => { //Listando grupos cadastrados na tela principal
        fetchMeal()
    }, []));

    useEffect(() => {
        if (percentageInDiet <= 0.5) {
          setDiet('outDiet');
        } else {
          setDiet('inDiet');
        }
    }, [percentageInDiet]);

    return(
        <Container>

            <Header/>

            <Statistics
                number={totalMeals > 0 ? numberFormattedPercentageInDiet : '0,00%'}
                text='das refeições dentro da dieta'
                onPress={handleGoToStatisticsScreen}
                variant={diet}
            />           

            <Subtitle/> 

            <Button
                title="Nova Refeição"
                type='PRIMARY'
                onPress={handleNewMeal}
                icon={<Plus size={18} color={COLORS.BASE.LIGHT} />}
            />    
        
            {/* { isLoading ? <Loading/> :
                <FlatList
                    data={meal}
                    keyExtractor={(item, key) => item.id }
                    renderItem={({item}) => (
                        <MealList
                            mealsGroup={item}                      
                            // onPress={handleStatisticsMenu} 
                            onPress={() => handleOpenMeal(item)}                       
                        />
                    )}
                    // horizontal
                    // contentContainerStyle={meal.length === 0 && {flex: 1}}
                    ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira refeição?'/>}
                /> 
            }              */}

            { isLoading ? <Loading/> :
                <SectionList 
                    sections={meal}
                    keyExtractor={(item, key) => key}
                    renderItem={({ item }) => (
                        
                        <MealList
                            meals={item}
                            // onPress={() => handleOpenMealsDetails(item.id)} 
                            //mealsGroup={item}                      
                            // onPress={handleStatisticsMenu} 
                            // onPress={() => handleOpenMeal(item)}                       
                        />
                    )}

                    renderSectionHeader={({ section }) => (
                    <Text>
                        {section.title}
                    </Text>
                    )}                    
                    ListEmptyComponent={() => <ListEmpty message='Está com fome? Que tal cadastrar a primeira refeição?'/>}
                    showsVerticalScrollIndicator={false}
                />  
            }    
            
        </Container>
    );
}