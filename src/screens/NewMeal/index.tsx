import { Container, ContentInput, HeaderButtonHalf, MiniContainer, SubContainer } from './styles';

import { NewMealHeader } from '@components/NewMealHeader';
import { InfoStatistics } from '@components/InfoStatistics';
import { Input } from '@components/Input';
import { InputDescription } from '@components/InputDescription';
import { InputHalf } from '@components/InputHalf';
import { Button } from '@components/Button';
import { ButtonHalf } from '@components/ButtonHalf';

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { DateTimePickerAndroid, DateTimePickerEvent} from '@react-native-community/datetimepicker';
import { formatDate } from '@utils/formatDate';
import { AppError } from '@utils/AppError';

import { useNavigation, useFocusEffect } from '@react-navigation/native'; //Navegação
import { useState, useId, useEffect, useCallback} from 'react'
import { Alert} from 'react-native';

import { mealCreate } from '@storage/meals/mealsCreate';
import { mealsGetAll } from '@storage/meals/mealsGetAll';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MealListDTO } from 'src/dtos/NewMeal';
import { storageMealCreate } from '@storage/storageMeal';

// type RootParamList = {
//     home: undefined;
//     newmeal: undefined;
//     statisticspainel: undefined;
//     meal: undefined;
//     result: {
//       newmeal: string;
//     }
// }

export function NewMeal(){   
    
    const navigation = useNavigation()
    const [meal, setMeal] = useState('')
    const [description, setDescription] = useState('') 
    const [hour, setHour] = useState('')  
    const [dateMeal, setDateMeal] = useState('')  
    const [isInDiet, setisInDiet] = useState (true);
    
    const [buttonSelected, setButtonSelected] = useState('');
    const [isLoading, setIsLoading] = useState(false); 
    
    const [newDate, setNewDate] = useState<number>(new Date().getTime());
    const [dietSelected, setDietSelected] = useState <string> ();

    function handleDietSelected(option: string) {
        setDietSelected(option);
    }

    function handleOpenResult() { 
        navigation.navigate('resultnegative');
    }

    async function handleNewMealData({ date, data }: MealListDTO) {
        // await storageMealRemove()
        // console.log('zerou?')
        
        try { 
            
            setIsLoading(true) 

            const dataMeal = {
                date: dateMeal,            
                data: [{
                    nameMeal: meal,
                    description: description,
                    hour:  hour,                    
                    isInDiet: isInDiet,
                }]
            }           
         
            await storageMealCreate(dataMeal);
            setIsLoading(false)

            handleOpenResult();               
                  
        } catch (error) {
            setIsLoading(false);
        
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : 
            Alert.alert('Criar refeição', 'Não foi possível criar a refeição!')
        }    
        
        // navigation.navigate('result', 
        // { variant: dietSelected === 'Sim' 
        // ? 'inDiet' : 'outDiet',});

    }

    function handleButtonSelected(type: 'Sim' | 'Não'){
        setButtonSelected(type)
    }

    // function onChange(event: DateTimePickerEvent, selectedDate?: Date) {
        
    //     let date = formatedDate(selectedDate!.getTime(),'date');
    //     setNewDate(date);
    // }

    // function showMode(mode: 'date' | 'time') {
    //     DateTimePickerAndroid.open({
    //         value: new Date(newDate),
    //         onChange,
    //         mode,
    //         is24Hour: true,
    //     });        
    // }

    return(

        <Container>                     
            <NewMealHeader
                title='Nova Refeição'
            />  

            <Input
                placeholder='Digite seu alimento'
                title='Nome da refeição'
                onChangeText={setMeal}
            />

            <InputDescription
                placeholder='Descreva o seu alimento'
                title='Descrição da refeição'
                onChangeText={setDescription}
            />

            <ContentInput>
                <InputHalf
                    placeholder='Data'
                    title='Data' 
                    onChangeText={setDateMeal}                  
                    //value={date}                 
                    // onPressIn={() => showMode('date')}
                    // defaultValue={newDate}
                />
                <InputHalf
                    placeholder='Hora'
                    title='Hora'
                    onChangeText={setHour}           
                    // onPressIn={() => showMode('time')}
                    // defaultValue={formatDate(newDate, 'time')}                   
                />
            </ContentInput>
            
            <HeaderButtonHalf>
                Esta dentro da dieta?
            </HeaderButtonHalf>

            <MiniContainer>                
                <ButtonHalf                    
                    title='Sim'
                    isActive={buttonSelected === 'Sim'}
                    type='PRIMARY'
                    onPress={() => handleButtonSelected('Sim')}   
                    // onSubmitEditing={handleSubmit(handleNewMeal)} //Usar o botao do teclado
                    // returnKeyType="send"
                />
                <ButtonHalf                    
                    title='Não'
                    isActive={buttonSelected === 'Não'}
                    type='SECONDARY'
                    onPress={() => handleButtonSelected('Não')}   
                />

                <ButtonHalf                    
                    title='Cadastar'
                    isActive={buttonSelected === 'Não'}
                    type='SECONDARY'
                    onPress={handleNewMealData}   
                />

            </MiniContainer>

           
            <SubContainer>
                <Button
                    title="Cadastrar Refeição"
                    type='PRIMARY'
                    // isLoading={isLoading}
                    // onPress={handleNewMealData}                               
                /> 
            </SubContainer>              

        </Container>
    );
}