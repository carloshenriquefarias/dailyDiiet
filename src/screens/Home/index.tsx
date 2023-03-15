import { Container, ListHeader } from './styles';

import {useState, useEffect, useCallback} from 'react'
import React from "react";
import { Alert, SectionList } from 'react-native';
import { Plus } from 'phosphor-react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; //Navegação

import { useTheme } from 'styled-components/native';

import { Header } from '@components/Header';
import { Statistics } from '@components/Statistics';
import { Subtitle } from '@components/Subtitle';
import { Button } from '@components/Button';
import { MealList } from '@components/MealList';
import { ListEmpty } from '@components/ListEmpty';
import { Loading } from '@components/Loading';

import { formatPercentage } from '@utils/formatPercentage';
import { formatDate } from '@utils/formatDate';

// import { MealDataDTO } from '@dtos/MealDataDTO';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { mealsGetAll } from '@storage/meals/mealsGetAll';
import { AppError } from '@utils/AppError';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealListDTO } from 'src/dtos/NewMeal';
import { storageMealGet } from '@storage/storageMeal';

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

export function Home() {   

    const [data, setData] = useState<MealListDTO[]>([]);      
    const [isLoading, setIsLoading] = useState(true);
    const [diet, setDiet] = useState<DietVariant>('inDiet');

    const navigation = useNavigation();
    const totalMealsInDiet = 48;
    const totalMeals = 100;
    const percentageInDiet = totalMealsInDiet / totalMeals;
    const numberFormattedPercentageInDiet = formatPercentage(totalMealsInDiet, totalMeals);   

    const { COLORS } = useTheme();
    
    async function fetchMeal(){  
        try {
                     
            setIsLoading(true);
            const mealLoad = await storageMealGet(); 

            setData(mealLoad)  
            // console.log ()     
    
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
        navigation.navigate('newmeal')            
    }

    function handleStatisticsMenu(){       
        navigation.navigate('statisticspainel')
    } 
    
    // function handleOpenGroup(group: string){
    //     navigation.navigate('players', {group})
    // }

    function handleOpenMealsDetails(meal: string) { 
        navigation.navigate('meal', {meal});
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
                onPress={handleStatisticsMenu}
                variant={diet}
            />           

            <Subtitle/> 

            <Button
                title="Nova Refeição"
                type='PRIMARY'
                onPress={handleNewMeal}
                icon={<Plus size={18} color={COLORS.BASE.LIGHT} />}
            />

            { isLoading ? <Loading/> :
                <SectionList
                    sections={data}
                    keyExtractor={(meal, index) => meal.description + index}
                    renderItem={({ item: meal }) => (
                        <MealList
                            description={meal.description}
                            hour={meal.hour}
                            variant={meal.diet ? 'inDiet' : 'outDiet'}
                            onPress={() => handleOpenMealsDetails(meal)}
                        />
                    )}

                    renderSectionHeader={({ section: { date } }) => (
                        <ListHeader>
                            {date}
                        </ListHeader>
                    )}

                    showsVerticalScrollIndicator={false}
                    fadingEdgeLength={300}                   
                    ListEmptyComponent={() => <ListEmpty message='Está com fome? Que tal cadastrar a primeira refeição?'/>}
                />  
            } 
            
        </Container>
    );
}