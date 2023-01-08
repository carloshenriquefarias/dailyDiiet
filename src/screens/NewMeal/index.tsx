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
    
    const [buttonSelected, setButtonSelected] = useState('')  
    
    const [newDate, setNewDate] = useState<number>(new Date().getTime());
    const [dietSelected, setDietSelected] = useState <string> ();
    const mealId = useId();

    function handleDietSelected(option: string) {
        setDietSelected(option);
    }

    async function handleNewMeal() {
        //Verificação
        if (meal.trim().length === 0 || description.trim().length === 0) {
          return Alert.alert('Nova Refeição', 'Preencha o nome e a descrição.');
        }

        // if (!dietSelected) {
        //   return Alert.alert(
        //     'Nova Refeição',
        //     'Selecione se está dentro ou fora da dieta.'
        //   );
        // }

        //Dados dos inputs
        const newMeal = {
          id: mealId,
          title: meal,
          description: description,
          date: date,
          hour: hour,          
          diet: dietSelected === 'Sim' ? true : false,
        };
    
        //Crie e armazene a função do A.Storage
        try {
          await mealCreate(newMeal);
          navigation.navigate('home');

        } catch (error) {
          if (error instanceof AppError) {
            Alert.alert('Criar refeição', error.message);

          } else {
            console.log(error);
            Alert.alert('Criar refeição', 'Não foi possível criar a refeição.');
          }
        }
    
        navigation.navigate('result', {
          variant: dietSelected === 'Sim' ? 'inDiet' : 'outDiet',
        });
    }

    // async function handleNewMeal(){
    //     try {

    //         if(meal.trim().length === 0 || description.trim().length === 0){ //Trim nao deixa caracteres no input
    //             Alert.alert('Nova Refeição', 'Informe o nome da refeição e sua descrição') 
    //         }

    //         // if (!dietSelected) {
    //         //     return Alert.alert(
    //         //       'ATENÇÃO!',
    //         //       'Por favor, escolha se está dentro ou fora da dieta.'
    //         //     );
    //         // }

    //         const newData = {
    //             id: mealId,
    //             meal: meal,
    //             description: description,
    //             date: date,
    //             hour: hour,
    //             diet: dietSelected === 'Sim' ? true : false,
    //         }            

    //         //fazer depois 
    //         // [ ] Colocar validacao dos campos
    //         // [ ] Limpar os campos do formularios depois de cadastrado

    //         const storageData = await mealsGetAll();

    //         const dataByDate = storageData.find(
    //             (item) => item.title === date
    //         );

    //         if (dataByDate) {
    //             dataByDate.data = [...dataByDate.data, newData]       
    //             await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storageData))
                
    //         } else {
    //             // const formdata = {
    //             //     title: date,
    //             //     data: [{
    //             //         description: description,
    //             //         hour: hour,
    //             //         meal: meal,
    //             //     }]
    //             // } 
                
    //             const formdata = {
    //                 title: date,
    //                 data: [{
    //                     id: mealId,
    //                     meal: meal,
    //                     description: description,
    //                     date: date,
    //                     hour: hour,
    //                     diet: dietSelected === 'Sim' ? true : false,
    //                 }]
    //             }   
        
    //             await mealCreate(formdata);   
    //         }

    //         // navigation.navigate('home')
           
    //     } catch (error) {
    //         if (error instanceof AppError){
    //             Alert.alert('Nova Refeição', error.message)
    //           } else {
    //           Alert.alert('Nova Refeição', 'Não foi possível criar uma nova refeição')
    //         }
    //     } 
        
    //     navigation.navigate('result', 
    //     { variant: dietSelected === 'Sim' 
    //     ? 'inDiet' : 'outDiet',});

    // }  
  
    // function handleNew(){
    //     navigation.navigate('statisticspainel') //Definir os tipos de navegação no @types
    // }

    function handleButtonSelected(type: 'Sim' | 'Não'){
        setButtonSelected(type)
    }

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