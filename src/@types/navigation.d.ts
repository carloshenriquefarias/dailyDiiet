import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DataProps, DietVariant, Meal } from '@screens/Home';

export type RootStackParamList = {
  home: undefined;
  statisticspainel: {
    diet: DietVariant;
    data: DataProps[];
  };
  newmeal: undefined;
  result: { variant: DietVariant };
  meal: { meal: Meal };
  editMeal: { meal: Meal };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
























// import { DietVariant } from '@screens/Home';

// export declare global {
//     namespace ReactNavigation {
//       interface RootParamList {
//         home: undefined;
//         newmeal: undefined;
//         statisticspainel: undefined;
//         meal: undefined;
//         // result: undefined;
//         result: { variant: DietVariant };
        
//         // result: {
//         //   newmeal: string;
//         // }
//       }
//     }
// }
