import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import {ActivityIndicator, StatusBar} from 'react-native'

import { Home } from '@screens/Home';
import { StatisticsPainel } from '@screens/StatisticsPainel';
import { NewMeal } from '@screens/NewMeal';
// import { Result } from '@screens/ResultPositive';

import {Routes} from './src/routes';

export default function App() {

  const [fontLoaded] = useFonts({Roboto_400Regular,Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      {/* <Home/>  */}
      {/* <StatisticsPainel/> */}
      {/* <NewMeal/> */}
      {/* <Result/> */}

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />   
      { fontLoaded ? <Routes/> : <ActivityIndicator/> } 
    </ThemeProvider>       
  );
}


