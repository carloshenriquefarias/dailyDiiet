import { Container, ContentInput, HeaderButtonHalf, MiniContainer } from './styles';
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

    function handleRegister(){
        navigation.navigate('statisticspainel') //Definir os tipos de navegação no @types
    }

    return(
        <Container>                     
            <NewMealHeader
                title='Refeição'
            />            
            <Input
                placeholder='Digite seu alimento'
                title='Nome da refeição'
            />
            <InputDescription
                placeholder='Descreva o seu alimento'
                title='Descrição da refeição'
            />

            <ContentInput>
                <InputHalf
                    placeholder='Data'
                    title='Data'
                />
                <InputHalf
                    placeholder='Hora'
                    title='Hora'
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
                    type='SECONDARY'
                />
            </MiniContainer>

            <Button
                title="Cadastrar Refeição"
                type='PRIMARY'
                onPress={handleRegister}
                style={{marginRight: 20}} //VER DEPOIS
            />   

        </Container>
    );
}