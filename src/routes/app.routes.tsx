import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { NewMeal } from '@screens/NewMeal';
import { Meal } from '@screens/Meal';
import { ResultPositive } from '@screens/ResultPositive';
import { StatisticsPainel } from '@screens/StatisticsPainel';
import { ResultNegative } from '@screens/ResultNegative';

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
        name="resultpositive"
        component={ResultPositive}
      />

      <Screen 
        name="resultnegative"
        component={ResultNegative}
      />

      <Screen 
        name="meal"
        component={Meal}
      />
    </Navigator>
  );
}