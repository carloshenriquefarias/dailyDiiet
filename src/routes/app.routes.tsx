import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { Meal } from '@screens/Meal';
import { Result } from '@screens/Result';
import { StatisticsPainel } from '@screens/StatisticsPainel';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home"
        component={Home}
      />

      <Screen 
        name="newmeal"
        component={NewMeal}
      />

      <Screen 
        name="statisticspainel"
        component={StatisticsPainel}
      />

      <Screen 
        name="result"
        component={Result}
      />

      <Screen 
        name="meal"
        component={Meal}
      />
    </Navigator>
  );
}