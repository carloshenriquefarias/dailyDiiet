import { Container, Content, Title, Description, DateAndHour, Result, TitleDateAndHour } from './styles';
import { NewMealHeader } from '@components/NewMealHeader';
import { Alert, FlatList, TextInput, Keyboard } from 'react-native';
// import { Subtitle } from '@components/Subtitle';
import { InfoStatistics } from '@components/InfoStatistics';
import { Input } from '@components/Input';
import { InputDescription } from '@components/InputDescription';
import { InputHalf } from '@components/InputHalf';
import { Button } from '@components/Button';
import { ButtonHalf } from '@components/ButtonHalf';

import { useNavigation, useFocusEffect } from '@react-navigation/native'; //Navegação
import {useState, useEffect, useCallback} from 'react'
import { storageMealGet, storageMealRemove } from '@storage/storageMeal';
import { MealListDTO } from 'src/dtos/NewMeal';

type RootParamList = {
    home: undefined;
    newmeal: undefined;
    statisticspainel: undefined;
    result: {
      newmeal: string;
    }
}

export function Meal(){   
    
    const navigation = useNavigation()

    const [meal, setMeal] = useState<MealListDTO[]>([])

    function handleRegister(){
        navigation.navigate('statisticspainel')
    }

    // async function fetchPlayersByTeam(){
    //     try {
    //         // setIsLoading(true)
    //         const getMeal = await storageMealGet (meal, );
    //         setMeal(getMeal)            
    
    //     } catch (error) {            
    //         // Alert.alert('Pessoas', 'Não foi possível adicionar as pessoas')          
    //     } 
    //     finally{
    //         // setIsLoading(false)
    //     }       
    // }

    // async function handlePlayerRemove(playerName: string){
    //     try {
    //         await playerRemoveByGroup(playerName, group);
    //         fetchPlayersByTeam();            
    
    //     } catch (error) {            
    //         Alert.alert('Remover Pessoa', 'Não foi possível remover a pessoa')          
    //     }        
    // }

    function handleGoToHome() {
        navigation.navigate('home');
    }

    async function handleMealRemove(mealID: string){
        try {

            await storageMealRemove();
            // fetchPlayersByTeam();  
            
            Alert.alert(
                'Remover', 
                'Deseja remover a refeição?',
                [
                    {text: 'Não', style: 'cancel'},
                    {text: 'Sim', onPress:() => storageMealRemove()}
                ]
            )
            
            handleGoToHome();
               
        } catch (error) {            
            Alert.alert('Remover Refeição', 'Não foi possível remover a refeição')          
        }                   
    }

    return(
        <Container>                     
            <NewMealHeader
                title='Refeição'
            />

            <Content>

                <Title>
                    Sanduiche
                </Title>

                <Description>
                    Sanduiche de pao integral com atum salada de alface e tomate
                </Description>

                <TitleDateAndHour>
                    Data e Hora
                </TitleDateAndHour>

                <DateAndHour>
                    12/08/2022 as 16:00 hrs
                </DateAndHour>

                <Result>
                    dentro da dieta
                </Result>

                <Button
                    title="Editar Refeição"
                    type='SECONDARY'
                    onPress={handleRegister}
                />   

                <Button
                    title="Excluir Refeição"
                    type='PRIMARY'
                    onPress={handleMealRemove}
                /> 
            </Content>            

        </Container>
    );
}