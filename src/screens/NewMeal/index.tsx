import { Container, ContentInput, HeaderButtonHalf, MiniContainer, SubContainer } from './styles';
import { NewMealHeader } from '@components/NewMealHeader';
// import { Subtitle } from '@components/Subtitle';
import { InfoStatistics } from '@components/InfoStatistics';
import { Input } from '@components/Input';
import { InputDescription } from '@components/InputDescription';
import { InputHalf } from '@components/InputHalf';
import { Button } from '@components/Button';
import { ButtonHalf } from '@components/ButtonHalf';

import { useNavigation, useFocusEffect } from '@react-navigation/native'; //Navegação
import {useState, useEffect, useCallback} from 'react'
import { FlatList, Alert} from 'react-native';

import { AppError } from '@utils/AppError';
import { mealCreate } from '@storage/meals/mealsCreate';

type RootParamList = {
    home: undefined;
    newmeal: undefined;
    statisticspainel: undefined;
    result: {
      newmeal: string;
    }
}

export function NewMeal(){   
    
    const navigation = useNavigation()
    const [meal, setMeal] = useState('')
    const [informations, setInformations] = useState('')

    async function handleNewMeal(){
        try {
            if(meal.length === 0){ //Trim nao deixa caracteres no input
                Alert.alert('Nova Refeição', 'Informe o nome da refeição') 
            }

            await mealCreate(meal);
            // navigation.navigate('players', {group})
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
                onChangeText={setMeal}
            />

            <ContentInput>
                <InputHalf
                    placeholder='Data'
                    title='Data' 
                    onChangeText={setMeal} //Armazenar os dados de uma tela pra outra                   
                    // type='datetime'
                    // options={{ format: 'DD/MM/YYYY' }}                    
                    value={meal}
                />
                <InputHalf
                    placeholder='Hora'
                    title='Hora'
                    onChangeText={setMeal} //Armazenar os dados de uma tela pra outra
                    // type='datetime'
                    // options={{ format: 'HH:mm' }}
                    // value={meal.data[0].hour}
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
                    // style={{marginRight: 20}} //VER DEPOIS
                /> 
            </SubContainer>              

        </Container>
    );
}