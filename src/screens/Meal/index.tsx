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

    function handleRegister(){
        navigation.navigate('statisticspainel') //Definir os tipos de navegação no @types
    }

    async function mealRemove(){
        try {
               
        } catch (error) {            
            Alert.alert('Remover Refeição', 'Não foi possível remover a refeição')          
        }  
    }

    async function handleMealRemove(){
        Alert.alert(
            'Remover', 
            'Deseja remover a refeição?',
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim', onPress:() => mealRemove()}
            ]
        )              
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
                    Dentro da dieta
                </Result>

                <Button
                    title="Editar Refeição"
                    type='PRIMARY'
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