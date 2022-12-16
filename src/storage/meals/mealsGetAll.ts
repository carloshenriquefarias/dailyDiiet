import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from '@storage/storageConfig';

export async function mealsGetAll() {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION); //GetItem serve pra pegar os dados do storage

    const meals: string[] = storage ? JSON.parse(storage) : [];

    return meals
  } catch (error) {
    throw error;
  }
}