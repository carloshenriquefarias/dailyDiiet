// import { Container, Title, Icon, Hour, Content, Divider, SubContainer, SubContent} from './styles';
// import { TouchableOpacityProps, Text } from "react-native";
// import { DietVariant } from '@screens/Home';
// import { Ball } from '@components/Ball';
// import { useEffect, useState } from 'react';

// type Props = TouchableOpacityProps & {
//     date?: string;
//     hour?: string;
//     description?: string;   
//     variant: DietVariant;   
//     // mealsGroup: Group
// }

// type Group = {
//     id: number,
//     data : string
//     refeicoes: MealsItens[]
// }

// type MealsItens = {
//     hora: string;
//     description: string;
// }

// export function MealList({ meals, date, hour, description, variant  }: Props ){
  
//     return(
//         <Container>

//             {/* <Date>
//                 {meals.title}
//             </Date>  */}
          
//             <SubContainer>  

//                 <Content>
                    
//                     <SubContent>

//                         <Hour>
//                             {meals.hour}
//                         </Hour>

//                         <Divider>
//                             |
//                         </Divider>

//                         <Title>
//                             {meals.description}
//                         </Title>

//                     </SubContent>  

//                     <Icon variant={variant} />                  

//                     {/* <Ball/> */}
                    
//                 </Content> 

//             </SubContainer>            

//         </Container>
//     );
// }

import { DietVariant } from '@screens/Home';
import { TouchableOpacityProps } from 'react-native';
import { Container, Content, Icon, Divider, Time, Description} from './styles';

type Props = TouchableOpacityProps & {
  description: string;
  hour: string;
  variant: DietVariant;
};

export function MealList({ description, hour, variant, ...rest }: Props) {
  return (
    <Container {...rest}>
        <Content>            
            <Time>
                {hour}
            </Time>

            <Divider />
            
            <Description>
                {description}
            </Description>            
        </Content>

      <Icon variant={variant} />

    </Container>
  );
}