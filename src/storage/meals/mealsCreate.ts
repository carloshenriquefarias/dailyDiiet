import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { mealsGetAll } from './mealsGetAll';
import { MEAL_COLLECTION } from '@storage/storageConfig';

export async function mealCreate(newMeal: string) {
    
  try {
    const storedMeals = await mealsGetAll();
    const mealAlreadyExists = storedMeals.includes(newMeal); //Verifica se ja existe algo igual na lista

    if(mealAlreadyExists) {
      throw new AppError('Já existe uma refeição cadastrada com esse nome.') //Verificar o AppError
    }

    const storage = JSON.stringify([...storedMeals, newMeal])
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
}