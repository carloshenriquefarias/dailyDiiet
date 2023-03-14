import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { MEAL_COLLECTION } from '@storage/storageConfig';
import { MealListDTO } from 'src/dtos/NewMeal';
import { mealsGetAll } from './meals/mealsGetAll';

export async function storageMealCreate(newMeal: string) {
    
  try {
    const storedMeals = await mealsGetAll();
    const mealAlreadyExists = storedMeals.includes(newMeal); //Verifica se ja existe algo igual na lista

    if(mealAlreadyExists) {
      throw new AppError('Já existe uma refeição cadastrada com esse nome.') //Verificar o AppError
    }

    const storage = JSON.stringify([...storedMeals, newMeal])
    // console.log('AQUI', storage)
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
}

export async function storageMealSave(meal: MealListDTO) {
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(meal));
}

export async function storageMealGet() {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
  console.log('DADOS AQUI:',storage);

  const meal = storage ? (JSON.parse(storage) as MealListDTO) : undefined;

  return meal;
}

export async function storageMealRemove() { 
  await AsyncStorage.removeItem(MEAL_COLLECTION);
}