import { Container, ContentInput, HeaderButtonHalf, MiniContainer, SubContainer } from './styles';

import { NewMealHeader } from '@components/NewMealHeader';
import { InfoStatistics } from '@components/InfoStatistics';
import { Input } from '@components/Input';
import { InputDescription } from '@components/InputDescription';
import { InputHalf } from '@components/InputHalf';
import { Button } from '@components/Button';
import { ButtonHalf } from '@components/ButtonHalf';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    DateTimePickerAndroid,
    DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

import { formatDate } from '@utils/formatDate';

// import DatePicker from 'react-native-datepicker'

import { useNavigation, useFocusEffect } from '@react-navigation/native'; //Navegação
import {useState, useEffect, useCallback} from 'react'
import { FlatList, Alert} from 'react-native';

import { AppError } from '@utils/AppError';
import { mealCreate } from '@storage/meals/mealsCreate';
import { mealsGetAll } from '@storage/meals/mealsGetAll';
import { MEAL_COLLECTION } from '@storage/storageConfig';

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
    const [date, setDate] = useState('')
    const [hour, setHour] = useState('')  
    
    const [newDate, setNewDate] = useState<number>(new Date().getTime());

    async function handleNewMeal(){
        try {
            if(meal.trim().length === 0){ //Trim nao deixa caracteres no input
                Alert.alert('Nova Refeição', 'Informe o nome da refeição') 
            }

             //fazer depois 
            // [ ] Colocar validacao dos campos
            // [ ] Limpar os campos do formularios depois de cadastrado

            const storageData = await mealsGetAll();

            const dataByDate = storageData.find(
                (item) => item.title === date
            );

            const newData = {
                description: description,
                hour: hour,
                meal: meal,
            }

          
            if (dataByDate) {
                dataByDate.data = [...dataByDate.data, newData]
       
                await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storageData))
            } else {
                const formdata = {
                    title: date,
                    data: [{
                        description: description,
                        hour: hour,
                        meal: meal,
                    }]
                }              
        
                await mealCreate(formdata);   
            }



            navigation.navigate('home')

        } catch (error) {
            if (error instanceof AppError){
                Alert.alert('Nova Refeição', error.message)
              } else {
              Alert.alert('Nova Refeição', 'Não foi possível criar uma nova refeição')
            }
        }        
    }  
  
    // function handleNew(){
    //     navigation.navigate('statisticspainel') //Definir os tipos de navegação no @types
    // }

    function onChange(event: DateTimePickerEvent, selectedDate?: Date) {
        const formatedDate = selectedDate!.getTime();
        setNewDate(formatedDate);
    }

    function showMode(mode: 'date' | 'time') {
        DateTimePickerAndroid.open({
            value: new Date(newDate),
            onChange,
            mode,
            is24Hour: true,
        });
}
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
                    onChangeText={setDate} //Armazenar os dados de uma tela pra outra                   
                    // value={meal}                 
                    onPressIn={() => showMode('date')}
                    defaultValue={formatDate(newDate, 'date')}
                />
                <InputHalf
                    placeholder='Hora'
                    title='Hora'
                    onChangeText={setHour} //Armazenar os dados de uma tela pra outra            
                    onPressIn={() => showMode('time')}
                    defaultValue={formatDate(newDate, 'time')}                   
                />
            </ContentInput>
            
            <HeaderButtonHalf>
                Esta dentro da dieta?
            </HeaderButtonHalf>

            <MiniContainer>                
                <ButtonHalf                    
                    title='Sim'
                    type='PRIMARY'
                />
                <ButtonHalf                    
                    title='Não'
                    type='PRIMARY'
                />
            </MiniContainer>

            <SubContainer>
                <Button
                    title="Cadastrar Refeição"
                    type='PRIMARY'
                    onPress={handleNewMeal}                               
                /> 
            </SubContainer>              

        </Container>
    );
}